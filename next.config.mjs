import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeTypst from "@myriaddreamin/rehype-typst";
import rehypeStringify from "rehype-stringify";
import rehypeMermaid from "rehype-mermaid";
import remarkMermaid from "remark-mermaidjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMermaid],
    rehypePlugins: [rehypeTypst],
  },
});

export default withMDX(nextConfig);
