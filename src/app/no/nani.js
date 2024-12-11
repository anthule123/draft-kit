
import { $typst } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs';
const mainContent = 'Hello, typst!';

console.log(await $typst.svg({ mainContent }));