import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

import rehypeTypst from "@myriaddreamin/rehype-typst";
import remarkMermaid from "remark-mermaidjs";
import remarkRehype from "remark-rehype";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/roadkit" : "",

  experimental: {
    esmExternals: true, // Enable ESM support
  },
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
    rehypePlugins: [rehypeTypst],
  },
});

export default withMDX(nextConfig);
