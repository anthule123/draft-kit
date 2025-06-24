import Concat from './concat.mdx'
import style from '@/css/components/article.module.css';

export default async function Page(){
  const {default: Post} = await import(`@/app/concat/concat.mdx`) 
  return  (
    <div className={style.page}>
            <article className={style.article}>
                <Post/>
             </article>
            </div>
  )
}