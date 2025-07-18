import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DraftKit",
    description: "Toolkit set up for drafts",
    keywords: ["text", "note","draft"],
    openGraph: {
      title: "Draft",
      description: "Toolkit set up for drafts",
    },
    
  };
  export default async function RootLayout({
    children,
  }:Readonly<{
    children: React.ReactNode
  }>) {
    return (
       <html>
        <body>{children}</body>
       </html>
        
    )
  }      