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
        <div className='center'>
           <div>
             {dict.language.notice}
              <Home params={params}/>
           </div>
        </div>
    )
  }