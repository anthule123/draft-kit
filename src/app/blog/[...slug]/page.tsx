import fs from 'fs' 
import path from 'path'
import style from '@/css/components/article.module.css';

const folderPlace = 'app/trial/fs/MyFolder'
 function getAllDocPaths(dir: string, basePath: string[]=[]){
    const entries = fs.readdirSync(dir, 
        {
            withFileTypes: true, 
            recursive: false 
        }
    );
    const paths : string[][] = []
    for (const entry of entries){ 
       
        const fullPath = path.join(dir, entry.name);
        const relativePath= entry.name.replace(/\.mdx$/,"")
        if(entry.isDirectory()){
            paths.concat(
                getAllDocPaths(fullPath, 
                    [...basePath, entry.name]
                )
            )
        }
        else if(entry.name.endsWith('.mdx')){
            paths.push([...basePath, relativePath])
        }
    }
    return paths;
}
export async function generateStaticParams() {
    const folderDir = path.join(process.cwd(), `src/content/blog`);
    const paths = getAllDocPaths(folderDir, []);
    return paths.map((pathArray ) => ({slug: pathArray}));
}
export default async function BlogPage(
    {params}: {params: Promise<{slug: string[]}>}
) {
    try{
        //join slug array with '/'
        const {slug: slugArray} = await params;
        const decodeURISlugArray = slugArray.map(
            (segment)=> (decodeURIComponent(segment))
        )
        const slugPath = decodeURISlugArray.join('/') 

        const {default: Post} = await import(`@/content/blog/${slugPath}.mdx`) 
        console.log(`Nani: @/app/trial/fs/MyFolder/${slugPath}.mdx`)
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