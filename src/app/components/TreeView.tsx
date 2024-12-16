// components/TreeView.tsx
"use client";
import { TreeNode } from "@/app/lib/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import treeView from "@/css/components/TreeView.module.css";

export default function TreeView({ data }: { data: TreeNode }) {
  const pathname = usePathname();
  // Kiểm tra xem pathname có phải là con của data.path
  const isPathChild = decodeURI(pathname).startsWith(decodeURI(data.path));
  const [isOpen, setIsOpen] = useState(isPathChild);

  const isActive =
    decodeURI(pathname).replace(/\/$/, "") ===
    decodeURI(data.path).replace(/\/$/, "");
  console.log({
    pathname: decodeURI(pathname),
    dataPath: decodeURI(data.path),
    isActive: decodeURI(pathname) === decodeURI(data.path),
  });
  if (data.isFile) {
    return (
      <Link
        href={data.path}
        className={`${treeView.fileLink} ${isActive ? treeView.active : ""}`}
      >
        <div className={treeView.treeNode}>{data.name}</div>
      </Link>
    );
  }

  function clsx(chevron: string, arg1: string | boolean): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={`${treeView.treeNode} ${isActive ? treeView.active : ""}`}>
      <details open={isOpen} onToggle={(e) => setIsOpen(e.currentTarget.open)}>
        <summary
          className={`${treeView.folderButton} ${isActive ? "active" : ""}`}
        >
          <span
            className={`${treeView.folderIcon} ${isOpen ? treeView.open : ""}`}
          >
            ▶
          </span>
          <div>{data.name}</div>
        </summary>
        {data.children && (
          <div
            className={`${treeView.children} ${isOpen ? treeView.open : treeView.closed}`}
          >
            {data.children.map((child) => (
              <TreeView key={child.path} data={child} />
            ))}
          </div>
        )}
      </details>
    </div>
  );
}
