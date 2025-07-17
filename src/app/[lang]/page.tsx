// You now have access to the current locale

import { getDictionary } from './dictionaries'
import Home from './Home'

export default async function Page({
    params,
  }: {
    params: Promise<{ lang: 'vi' |'en' }>
  }) {
    const { lang } = await params
    const dict = await getDictionary(lang) // en
    return (
        <div>
            You now acess to {`${lang}`} language.
            <button>{dict.products.cart}</button>
            <Home/> 
        </div>
    )
  }