import "@/css/globals.css";
import { garamond, inter, merriweather } from "@/app/fonts";
import { Metadata } from "next";

import PanelLayout2 from "./panelLayout2";
import { getContentTree } from "./blog/getContentTree";
export const metadata: Metadata = {
  title: "DraftKit",
  description: "Toolkit set up for drafts",
  keywords: ["roadmap", "toolkit", "planning"],
  openGraph: {
    title: "Draft",
    description: "Toolkit set up for drafts",
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
        <div>
            <PanelLayout2
            tree = {tree}
            children={children} />
        </div>
        
      </body>
    </html>
  );
}
