// // scripts/generateBookPdf.ts
// 'use server'
// import fs from 'fs';
// import path from 'path';
// import puppeteer from 'puppeteer'
// import { concat } from './concat';
// import { FormState } from '@/types/form';
// import { getAllMdxNodes } from '../lib/getAllMdxNodes';

// export default async function book2(
//   prevState: FormState,
//   formData: FormData,
// ) {
//   await generateConcatBook();
//   return {
//     success: true, 
//     message: 'Tạo sách thành công',
//     error: 'No error'
//   }
// }


// async function fetchPagePdf(url: string){
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ['--no-sandbox', '--disable-setuid-sandbox'],
//   });

//   const page = await browser.newPage();
 
//   await page.goto(url, { waitUntil: 'networkidle0' });
//  // Get full content height
//  const height = await page.evaluate(() => {
//   return document.documentElement.scrollHeight;
// });

// await page.evaluate(() => {
//   document.querySelectorAll('details').forEach(el => el.setAttribute('open', ''));
// });
// const myPDF = await page.pdf({
//   printBackground: true,
//   format: 'A4'
// });
  
//   await browser.close();

//   const outputPath = path.join(process.cwd(), 'public', 'book.pdf');
//    // Ensure folder exists
//    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
//    // Save to file
//    fs.writeFileSync(outputPath, Buffer.from(myPDF));
// }

// export async function generateConcatBook() {
//     const nodes = getAllMdxNodes();
//     const filePaths = nodes.map((node) => (node.dir));
//     console.log('file paths', filePaths)
//     console.log('file paths length', nodes.length)

//     concat(filePaths);
//     const url = 'http://localhost:3102/concat';
//     await fetchPagePdf(url);

// }