// components/Sidebar.tsx
"use client";
import { TreeNode } from '@/app/lib/types';
import TreeView from "./TreeView";

export default function TreeSideBar({ tree }: { tree: TreeNode }) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h3>Pracman</h3>
      </div>
      <TreeView data={tree} />
    </div>
  );
}
