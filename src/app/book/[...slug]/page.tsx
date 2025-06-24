

import { getAllDocPaths2 } from '@/app/blog/[...slug]/getAllDocPaths';
import style from '@/css/components/article.module.css';
import path from "path";


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
        const {slug: slugArray} = await params;
        const decodeURISlugArray = slugArray.map(
            (segment: any)=> (decodeURIComponent(segment))
        )
        const slugPath = decodeURISlugArray.join('/') 

       // return <div>{JSON.stringify(props.params)}</div>;
        const {default: Post} = await import(`@/content/blog/${slugPath}.mdx`) 
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
