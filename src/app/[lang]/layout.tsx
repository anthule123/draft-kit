import "@/css/globals.css";
import { garamond, inter, merriweather } from "@/app/fonts";
import { Metadata } from "next";

import PanelLayout2 from "./panelLayout2";
import { getContentTree } from "./blog/getContentTree";
import LanguageSwitcher from "./components/LanguageSwitcher";
export const metadata: Metadata = {
  title: "DraftKit",
  description: "Toolkit set up for drafts",
  keywords: ["text", "note","draft"],
  openGraph: {
    title: "Draft",
    description: "Toolkit set up for drafts",
  },
};

type Params = {
  lang: string
}
// export async function generateStaticParams() {

//   return [{ lang: 'vi' }, { lang: 'en' }]
// }
export async function generateStaticParams(): Promise<Params[]>{
    
    const result =  [{ lang: 'vi' }, { lang: 'en' }]
    if(!result || result.length===0){
        return [{lang: 'not-found'}];
    }
    return result
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: 'en' | 'vi' }>
}>) {
  return (
    <html lang={(await params).lang}>
      <body  className={` ${garamond.variable}
                               ${inter.variable} ${merriweather.variable}
              antialiased`}
      
      >
        {children}</body>
    </html>
  )
}      