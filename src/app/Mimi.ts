import katex from "katex";

interface MathProps {
  c: string;
}

export function Mimi(c: string) {
  const html = katex.renderToString(c, {
    throwOnError: false,
    trust: true,
  });
  return html;
}
