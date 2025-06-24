// import path from "path";
// import fs from 'fs'

// function extractImportsAndContent(mdx: string, mdxFilePath: string, aliasRoot: string) {
//   const lines = mdx.split('\n');
//   const imports: string[] = [];
//   const content: string[] = [];

//   let inExportBlock = false;
  
//   const mdxDir = path.dirname(mdxFilePath);
//   const aliasAbsPath = path.resolve(aliasRoot); // tuyệt đối của @
//   for (const line of lines) {
//     const trimmed = line.trim();

//     // Handle import lines
//     if (!inExportBlock && trimmed.startsWith('import ')) {
//       let transformedLine = line;

//       transformedLine = line.replace(/from\s+['"](.+?)['"]/, (match, importPath) => {
//         // Nếu là import tương đối
//         if (importPath.startsWith('.') || importPath.startsWith('..')) {
//           const absImportPath = path.resolve(mdxDir, importPath);
//           if (absImportPath.startsWith(aliasAbsPath)) {
//             const relToAlias = path.relative(aliasAbsPath, absImportPath).replace(/\\/g, '/');
//             return `from '@/` + relToAlias + `'`;
//           }
//         }

//         return match;
//       });

//       imports.push(transformedLine);
//       continue;
//     }

//     // Detect start of export block
//     if (trimmed.startsWith('export ')) {
//       inExportBlock = true;

//       // Check if export is single-line
//       if (trimmed.endsWith('}') || trimmed.includes(';')) {
//         inExportBlock = false;
//       }

//       continue;
//     }

//     // End of export block
//     if (inExportBlock) {
//       if (trimmed.endsWith('}')) {
//         inExportBlock = false;
//       }
//       continue;
//     }

//     // All other content lines
//     content.push(line);
//   }

//   return {
//     imports: Array.from(new Set(imports)),
//     content: content.join('\n').trim()
//   };
// }
// export function concat(filePaths: string[]){
//     let combinedImports = new Set();
//     let combinedContent = [];

//     for (const file of filePaths) {
//         const mdx = fs.readFileSync(file, 'utf8');
//         const { imports, content } = extractImportsAndContent(mdx, );
//         imports.forEach(i => combinedImports.add(i));
//         combinedContent.push(content);
//       }
      
//       // Combine unique imports, then combined content separated by a new line
//       const finalContent = Array.from(combinedImports).join('\n') + '\n\n' + combinedContent.join('\n\n');
//       const outputPath = path.join(process.cwd(), 'src/app/concat', 'concat.mdx');
//       fs.writeFileSync(outputPath, finalContent);
// }