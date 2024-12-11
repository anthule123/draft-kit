
import { NodeCompiler, DynLayoutCompiler } from '@myriaddreamin/typst-ts-node-compiler';

const compiler = NodeCompiler.create();
await compiler.pdf({
    mainFileContent: 'Hello, typst!',
  }); // :-> PDF Buffer