"use client";
import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export default function M({ children }: { children: string }) {
  // Split text into parts: normal text and math expressions between $...$
  const parts = children.split(/(?<!\\)(\$[^$]+\$)/g);

  return (
    <span>
      {parts.map((part, index) => {
        // Check if the part is a math expression (surrounded by $)
        if (part.startsWith("$") && part.endsWith("$")) {
          // Remove $ symbols and render math expression
          const mathExpression = part.slice(1, -1);
          return (
            <span
              key={index}
              dangerouslySetInnerHTML={{
                __html: katex.renderToString(mathExpression, {
                  throwOnError: false,
                  displayMode: false,
                }),
              }}
            />
          );
        }
        // Return normal text as is
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}