'use client'
import Link from "next/link";

import { usePathname } from "next/navigation";
import {  useState } from "react";
import style from '@/css/components/TreeView.module.css';
import { TreeNode } from "../blog/types";
import { GREEN } from "../blog/constant";
import ILink from "./ILink";

export default function TreeView({
    data, 
}: {data: TreeNode,
}){
    const pathname = usePathname();
    const isPathChild = decodeURI(pathname).startsWith(decodeURI(data.path)) 
    const [isOpen, setIsOpen] = useState(isPathChild); 
    const isActive = decodeURI(pathname).replace(/\/$/, "")
                     === decodeURI(data.path).replace(/\/$/, "")
                    && data.isMdxFile;
    // console.log({
    // pathname: decodeURI(pathname),
    // dataPath: decodeURI(data.path),
    // isActive: decodeURI(pathname) === decodeURI(data.path),
    // });
    if(data.color!==GREEN){
        return <></>
    }
    if (data.isMdxFile) return (
        <div className={`${isActive? `${style.active}`: '' } ${style.item}`}>
            <ILink href = {data.path}
> {data.name} </ILink>
        </div>
    )
    if(data.name==='') return (
        <ChildrenShow data = {data}/>
    )
    else return (
        <div className="">
            <details open = {isOpen}
                    onToggle={(e) => setIsOpen(e.currentTarget.open)}
                    className=""
            >
                <summary className={`${style.item}`}> {data.name} </summary>
                <ChildrenShow data = {data}/>
            </details>

        </div>
    )
}

export function ChildrenShow({data}:{data: TreeNode}){
    return  (
        <div>
            {data.children && 
            <div>
                {data.children.map((child, index) => (
                <TreeView key={index} 
                data={child} />
                ))}
            </div>
            }
           
        </div>
    )
}
