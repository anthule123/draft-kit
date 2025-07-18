import "@/css/globals.css";
import { garamond, inter, merriweather } from "@/app/fonts";
import { Metadata } from "next";

import PanelLayout2 from "./panelLayout2";
import { getContentTree } from "./blog/getContentTree";
import LanguageSwitcher from "./components/LanguageSwitcher";


type Params = {
  lang?: string
}
// export async function generateStaticParams() {

//   return [{ lang: 'vi' }, { lang: 'en' }]
// }
export async function generateStaticParams(): Promise<Params[]>{
    
    const result =  [{ lang: 'vi' }, { lang: 'en' },
      //  { lang: undefined as any }
    ]
    if(!result || result.length===0){
        return [{lang: 'not-found'}];
    }
    return result
}
export default async function RootLayout({
  children,
  params,
}:Readonly<{
  children: React.ReactNode
  params: Promise<{ lang?: 'en' | 'vi' }>
}>) {
  return (
     
      <div  className={` ${garamond.variable}
                               ${inter.variable} ${merriweather.variable}
              antialiased`}
      
      >
        {children}</div>
  )
}      