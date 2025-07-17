'use client'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { useEffect, useState } from "react";
import { TreeNode } from "./blog/types";
import TreeSideBar from "./components/TreeSideBar";

export default function PanelLayout(
    {children,tree} : {
        tree: TreeNode,
        children: React.ReactNode 
    }
){
    const init = (window.innerWidth>500)
    const [isShow, setIsShow] = useState(init);
    return (
        <div>
        <button onClick={(e) => {
            setIsShow(!isShow)}
            }>Mục lục </button>
            {isShow? <CaseOpen children={children} tree={tree}/> 
                : <CaseClose children={children} tree={tree}/>}        
        
        </div>
    )
}
export function CaseClose (
    {children,tree} : {
        tree: TreeNode,
        children: React.ReactNode 
    }
){
    return <div className="">{children}</div>
}

export function CaseOpen(
    {children,tree} : {
        tree: TreeNode,
        children: React.ReactNode 
    }
){
    return (
        <PanelGroup autoSaveId="example" direction="horizontal">
            <Panel defaultSize={25}>
                <TreeSideBar tree={tree}/>
            </Panel>
          <PanelResizeHandle
             className={`resizeHandler`}
         />
        <Panel>
            {children}
        </Panel>
 </PanelGroup>
        
    )
}