import createMDX from "@next/mdx";

import rehypeTypst from "@myriaddreamin/rehype-typst";
import remarkMermaid from "remark-mermaidjs";

import rehypeShiki from "@shikijs/rehype";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/roadkit" : "",
};
if (process.env.NODE_ENV === "production") {
  nextConfig.output = "export";
  nextConfig.images = { unoptimized: true };
  nextConfig.basePath = "/roadkit";
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMermaid],
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
