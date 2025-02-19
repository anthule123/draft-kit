import createMDX from "@next/mdx";
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeTypst from "@myriaddreamin/rehype-typst";
import remarkMermaid from "remark-mermaidjs";
import rehypeShiki from "@shikijs/rehype";
import remarkMath from 'remark-math'
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/draft-kit" : "",
};
if (process.env.NODE_ENV === "production") {
  nextConfig.output = "export";
  nextConfig.images = { unoptimized: true };
  nextConfig.basePath = "/draft-kit";
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [ remarkMath, remarkMermaid],
    rehypePlugins: [
      rehypeTypst,
      [
        rehypeShiki,
        {
          theme: "dark-plus",
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
