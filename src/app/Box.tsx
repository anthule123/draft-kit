"use client";
import React from "react";

export default function M({ children }: { children: string }) {
  const parts = children.split(/(?<!\\)(\$[^$]+\$)/g);

  return <div></div>;
}
