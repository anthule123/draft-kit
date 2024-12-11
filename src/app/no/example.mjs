import rehypeTypst from "@myriaddreamin/rehype-typst";
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import {unified} from 'unified';
import {read, write} from 'to-vfile'

async function process() {
  try {
    const htmlContent = `
    $C_L$
  
  `;

    const processor = unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeTypst, {
      })
      .use(rehypeStringify);

    const file = await processor.process(htmlContent);
    console.log(String(file));
    file.basename = 'output.html'
await write(file)

  } catch (error) {
    console.error('Error:', error);
  }
}

process();