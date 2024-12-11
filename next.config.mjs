import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeTypst from "@myriaddreamin/rehype-typst";
import rehypeStringify from "rehype-stringify";
/** @type {import('next').NextConfig} */
const nextConfig = {
  generateStaticParams: async () => {
    // Đây là nơi bạn định nghĩa tất cả các dynamic paths
    return {
      dynamicParams: true, // Cho phép generate dynamic params
    };
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeTypst],
  },
});

export default withMDX(nextConfig);
