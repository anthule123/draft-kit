"use client";
import React, { useRef, useEffect } from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";

interface TypProps {
  children: string;
  displayMode?: boolean;
}

export function Typ({ children, displayMode = false }: TypProps) {
  // Tách các phần bởi dấu $
  const parts = children.split(/(\$[^$\n]+\$)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          const mathContent = part.slice(1, -1).trim();
          return (
            <MathComponent
              key={index}
              math={mathContent}
              displayMode={displayMode}
            />
          );
        }
        return part ? <span key={index}>{part}</span> : null;
      })}
    </>
  );
}

// Tách riêng MathComponent để tối ưu re-renders
const MathComponent = React.memo(
  ({ math, displayMode }: { math: string; displayMode: boolean }) => {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const processContent = async () => {
        try {
          const { default: rehypeTypst } = await import(
            "@myriaddreamin/rehype-typst"
          );

          const htmlContent = displayMode
            ? `<pre><code class="language-math">${math}</code></pre>`
            : `<code class="language-math">${math}</code>`;

          const file = await unified()
            .use(rehypeParse, { fragment: true })
            .use(rehypeTypst)
            .use(rehypeStringify)
            .process(htmlContent);

          if (containerRef.current) {
            containerRef.current.innerHTML = String(file);
          }
        } catch (error) {
          console.error("Typst processing error:", error);
        }
      };

      processContent();
    }, [math, displayMode]);

    return (
      <span
        ref={containerRef}
        className="typst-container"
        style={{
          display: displayMode ? "block" : "inline-block",
        }}
      />
    );
  },
);

MathComponent.displayName = "MathComponent";

export default Typ;
