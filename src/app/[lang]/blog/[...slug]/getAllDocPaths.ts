
import fs from "fs";
import path from "path";
import { TreeNode } from "../types";
import { WHITE } from "../constant";





// export async function getAllDocPaths(dir: string,
//      basePath: string[]=[]){
//     const entries = fs.readdirSync(dir, 
//         {
//             withFileTypes: true, 
//             recursive: false 
//         }
//     );
//     const paths : string[][] = []
//     for (const entry of entries){ 
       
//         const fullPath = path.join(dir, entry.name);
//         const relativePath= entry.name.replace(/\.mdx$/,"")
//         if(entry.isDirectory()){
//             paths.concat(
//                 await getAllDocPaths(fullPath, 
//                     [...basePath, entry.name]
//                 )
//             )
//         }
//         else if(entry.name.endsWith('.mdx')){
//             paths.push([...basePath, relativePath])
//         }
//     }
//     return paths;
// }
type Node = {
    name: string,
    path: string[],
    dir: string,
}
export async function getAllDocPaths2(dir: string){
    const paths : string[][] = []
    const root: Node = {
            name: "",
            path: [],
            dir: dir
        };
    const myStack = [root];
    while(myStack.length>0){
            const v = myStack.pop()
            const thisPath = v!.path;
            const thisDir = v!.dir;
            const entries = fs.readdirSync(thisDir, {
                withFileTypes: true, 
                recursive: false
            }) 
            for(const entry of entries){
                const nodeName = entry.name.replace
                (/\.mdx$/,"");
                const newDir = thisDir + '/' + nodeName;
                const isMdxFile = entry.name.endsWith('.mdx') && entry.isFile();
                const newPath = [...v!.path, nodeName];
                const thisNode : Node = {
                    name: nodeName,
                    path: newPath,
                    dir: newDir,
                } 
                if(entry.isDirectory()){
                    myStack.push(thisNode);
                }
                if(isMdxFile){
                    paths.push(newPath)    
                }
            }
    }
    return paths 
}