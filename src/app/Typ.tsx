import { $typst } from "@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs";

export default async function Typ() {
  return await $typst.svg({
    mainContent: "Hello, typst!",
  });
}
