// lib/content.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import fg from "fast-glob";
import { TreeNode } from "@/app/lib/types";
export function getContentTree(): TreeNode {
  const files = fg.sync("src/content/blog/**/*.{md,mdx}", { dot: true });

  const tree: TreeNode = {
    name: "blog",
    path: "/blog",
    children: [],
  };

  files.forEach((file) => {
    const relativePath = path
      .relative("src/content/blog", file)
      .replace(/\.(md|mdx)$/, "");

    const parts = relativePath.split("/");
    let currentNode = tree;

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1;

      const nodePath = `/blog/${parts
        .slice(0, index + 1)
        .map((p) => p)
        .join("/")}`;

      let node = currentNode.children?.find((n) => n.name === part);
      if (!node) {
        node = {
          name: part,
          path: nodePath,
          isFile,
          children: isFile ? undefined : [],
        };
        currentNode.children?.push(node);
      }
      currentNode = node;
    });
  });

  return tree;
}

// export function getDocBySlug(slug: string[]) {
//   const realSlug = slug.join("/");

//   // Try .md first, then .mdx
//   let fullPath = path.join("src/content/chinhchu2", `${realSlug}.md`);
//   if (!fs.existsSync(fullPath)) {
//     fullPath = path.join("src/content/chinhchu2", `${realSlug}.mdx`);
//   }

//   try {
//     const fileContents = Buffer.from(fs.readFileSync(fullPath)).toString(
//       "utf8",
//     );
//     const { data, content } = matter(fileContents);

//     return {
//       slug: realSlug,
//       frontmatter: data,
//       content,
//     };
//   } catch {
//     return null;
//   }
// }
