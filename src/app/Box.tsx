"use client";
import React, { useRef, useEffect } from "react";
import katex from "katex";

export function M({ children }: { children: string }) {
  // Tách các phần bởi dấu $
  const parts = children.split(/(\$[^$]+\$)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          // Nếu là math content (trong dấu $)
          const mathContent = part.slice(1, -1); // bỏ dấu $ ở đầu và cuối
          const containerRef = useRef<HTMLSpanElement>(null);

          useEffect(() => {
            if (containerRef.current) {
              katex.render(mathContent, containerRef.current, {
                throwOnError: false,
                displayMode: false,
              });
            }
          }, [mathContent]);

          return <span key={index} ref={containerRef} />;
        }
        // Nếu là text thường
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
