
import fs from 'fs' 
import path from 'path'
import { TreeNode } from './types';
import { GREEN, WHITE } from '../blog/constant';


export function getAllMdxNodes(){ 
    const tree: TreeNode = {
        name: "",
        path: "/blog",
        children: [] as TreeNode[],
        dir: path.join(process.cwd(), 'src/content/blog'),
        color: WHITE,   
        parent: {} as TreeNode,
    }; 
    const myStack = [tree];
    const mdxStack = [] as TreeNode[]
    while(myStack.length>0){
        
        const v = myStack.pop()
        const thisPath = v?.path;
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
            const thisNode : TreeNode = {
                name: nodeName,
                path: thisPath + '/' + nodeName, 
                isMdxFile: isMdxFile,
                children: [],
                dir: newDir,
                color: isMdxFile? GREEN: WHITE,
                parent: v
            }
            v?.children?.push(thisNode) 
            if(entry.isDirectory()){
                myStack.push(thisNode);
            }
            if(isMdxFile)
                {
                    mdxStack.push(thisNode)
                }
        }
    }
    const ans = mdxStack;
    ans.map((node) => node.dir = node.dir + '.mdx')
    // console.log('ans', ans);
    ans.sort((a,b) => a?.path.localeCompare(b?.path))
    return ans;
}