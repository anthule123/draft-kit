import "@/css/globals.css";
import { garamond, inter, merriweather } from "@/app/fonts";
import { Metadata } from "next";
import TreeSideBar from "@/app/components/TreeSideBar";
import { getContentTree } from "@/app/lib/content";
import 'katex/dist/katex.min.css'
import 'katex/dist/katex.css'
export const metadata: Metadata = {
  title: "RoadKit",
  description: "Toolkit set up for roadmaps",
  keywords: ["roadmap", "toolkit", "planning"],
  openGraph: {
    title: "RoadKit",
    description: "Toolkit set up for roadmaps",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tree = getContentTree();

  return (
    <html lang="vi">
      <head>
        <meta charSet="UTF-8" />
       
      </head>
      <body
        className={` ${garamond.variable}
                         ${inter.variable} ${merriweather.variable}
        antialiased`}
      >
        {/* <Header /> */}
        <div className="home">
          <span>
            <TreeSideBar tree={tree} />
          </span>
          <span>
            <div>{children}</div>{" "}

          </span>
        </div>
        <span className="math-inline"> $2^2=4$</span>
      </body>
    </html>
  );
}
