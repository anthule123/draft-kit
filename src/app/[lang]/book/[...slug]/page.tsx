

import style from '@/css/components/article.module.css';
import path from "path";
import Article from '../../components/Article';
import { getAllDocPaths2 } from '../../blog/[...slug]/getAllDocPaths';


type Params = {
    slug: string[]
}
export async function generateStaticParams(): Promise<Params[]>{
    const folderDir = path.join(process.cwd(), `src/content/blog`);
    const paths =await getAllDocPaths2(folderDir);
    
    const result =  paths.map(
        (pathArray: any ) => ({slug: pathArray}));
    console.log(result);
    if(!result || result.length===0){
        return [{slug: ['not-found']}];
    }
    return result
}
export default async function BlogPage(
    props: any
) {

    try{
        //join slug array with '/'
        const params = props.params;
        const {slug: slugArray, lang: lang} = await params;
        const decodeURISlugArray = slugArray.map(
            (segment: any)=> (decodeURIComponent(segment))
        )
        const slugPath = decodeURISlugArray.join('/') 
        const {default: Post, metadata} = await import(`@/content/blog/${slugPath}.mdx`)
        if (lang==='en') {
            const {default: PostEn, metadata} = await import(`@/content/blogen/${slugPath}.mdx`)
            return (
                <article className={style.article}>
                    <PostEn/>
                </article>
            )
        }  
        return (<article className={style.article}>
            <Post/>
        </article>) 
    }
    catch(error){
        console.error('Error loading this blog post') 
        return (
            <div className="">
                <h1 className="">Error</h1>
                <p className="">Sorry, there was an error loading this blog post.</p>
            </div>
        )
    }
}
