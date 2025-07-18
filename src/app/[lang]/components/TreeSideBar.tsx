'use client'

import Link from "next/link";
import { TreeNode } from "../blog/types";
import TreeView from "./TreeView";
import style from '@/css/components/TreeView.module.css';
import ILink from "./ILink";


export default function TreeSideBar(
    { tree }: { tree: TreeNode }) {
    return (
      <div className={style.bar}>
        <div className={style.header}>
          <ILink href="/">
            <h3>Draft Kit</h3>
          </ILink>
          
        </div>
        <div className={style.body}>
          <TreeView data={tree} />
        </div>
      </div>
    );
}