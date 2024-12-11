import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
function getAllDocPaths(dir: string, basePath: string[] = []): string[][] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let paths: string[][] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;

    const fullPath = path.join(dir, entry.name);
    const relativePath = entry.name.replace(/\.mdx$/, "");

    if (entry.isDirectory()) {
      paths = paths.concat(
        getAllDocPaths(fullPath, [...basePath, relativePath]),
      );
    } else if (entry.name.endsWith(".mdx")) {
      paths.push([...basePath, relativePath]);
    }
  }

  return paths;
}
// Generate static params
export async function generateStaticParams() {
  const files = path.join(process.cwd(), "src/content/blog");

  const paths = getAllDocPaths(files);

  return paths.map((slug) => ({
    slug: slug,
  }));
}
type Props = {
  params: Promise<{
    slug: string[];
  }>;
};
// This is now the main page component
export default async function TutorialPage({ params }: Props) {
  try {
    // Join slug array with '/' to create path
    const slugList = await params;
    console.log(slugList);
    slugList.slug = slugList.slug.map((segment) => decodeURIComponent(segment));
    const slugPath = slugList.slug.join("/");

    // Try MDX first, fallback to MD
    const specialPath = `@/content/blog/${slugPath}.mdx`;
    const Nono = (await import(`@/content/blog/${slugPath}.mdx`)).default;

    return (
      <article>
        {" "}
        <Nono />
      </article>
    );
  } catch (error) {
    console.error("Error loading tutorial:", error);
    return (
      <div>
        <h1>Error</h1>
        <p>Sorry, there was an error loading this tutorial.</p>
      </div>
    );
  }
}
