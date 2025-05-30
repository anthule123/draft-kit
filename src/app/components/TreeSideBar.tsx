'use client'

import { TreeNode } from "../blog/types";
import TreeView from "./TreeView";
import style from '@/css/components/TreeView.module.css';


export default function TreeSideBar(
    { tree }: { tree: TreeNode }) {
    return (
      <div className={style.bar}>
        <div className={style.header}>
          <a href="/">
            <h3>Draft Kit</h3>
          </a>
        </div>
        <div className={style.body}>
          <TreeView data={tree} />
        </div>
      </div>
    );
}