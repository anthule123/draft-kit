// scripts/generateBookPdf.ts
'use server'
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer'
import { FormState } from '@/types/form';
import {PDFDocument, rgb, StandardFonts} from 'pdf-lib'
import { getAllMdxNodes } from '../lib/getAllMdxNodes';
import Cookies from 'js-cookie';

export default async function bookAction(
  prevState: FormState,
  formData: FormData,
) {
  await generatePdfBook();
  return {
    success: true, 
    message: 'Tạo sách thành công',
    error: 'No error'
  }
}


async function fetchPagePdf(url: string): 
Promise<Buffer> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
 
  await page.goto(url, { waitUntil: 'networkidle0' });
 
await page.evaluate(() => {
  document.querySelectorAll('details').forEach(el => el.setAttribute('open', ''));
});
const myPDF = await page.pdf({
  printBackground: true,
  format: 'A4',
  margin: {
    top: '60px',
    bottom: '60px',
    left: '40px',
    right: '40px'
  }
});
  
  await browser.close();
  return Buffer.from(myPDF);
}
async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
  const html = await res.text();
  return html;
}

export async function generatePdfBook() {
  const nodes = getAllMdxNodes();
  const filePaths = nodes.map((node: any) => (node.dir));
  let urls = nodes.map((node: any) => {
  let path = decodeURIComponent(node.path);
  path = path.replace('blog', 'book') 
  const lang = Cookies.get('NEXT_LOCALE') || 'vi'; // fallback mặc định
  return `http://localhost:3102/${lang}/${path}`})
  // urls = ['http://localhost:3102/blog/N%E1%BB%91/']
  const sections = await Promise.all(
    urls.map((url: any) => 
    fetchPagePdf(url)));

  const res = await mergePDFBuffers(sections);

}
async function mergePDFBuffers(pdfBuffers: Buffer[]) {
  const mergedPdf = await PDFDocument.create();

  // Merge các trang
  for (const buffer of pdfBuffers) {
    const pdf = await PDFDocument.load(buffer);
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    pages.forEach(page => mergedPdf.addPage(page));
  }

  // ===== Đánh số trang tại đây =====
  const totalPages = mergedPdf.getPageCount();
  const font = await mergedPdf.embedFont(StandardFonts.Helvetica);

  for (let i = 0; i < totalPages; i++) {
    const page = mergedPdf.getPage(i);
    const { width, height } = page.getSize();

    page.drawText(`${i + 1}`, {
      x: width / 2 - 50,
      y: 20, // vị trí từ bottom
      size: 10,
      font,
      // color: rgb(0.5, 0.5, 0.5),
    });
  }

  // ===== Lưu file =====
  const pdfBytes = await mergedPdf.save();
  const outputPath = path.join(process.cwd(), 'public', 'book.pdf');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, Buffer.from(pdfBytes));
  console.log('Merged PDF with page numbers saved at:', outputPath);
}