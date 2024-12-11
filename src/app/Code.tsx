import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  language: string;
}

const Code: React.FC<CodeBlockProps> = ({ children, language }) => {
  return <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>;
};

export default Code;
