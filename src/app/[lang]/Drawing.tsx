"use client";
import dynamic from "next/dynamic";
import hahaSketch from "@/content/sketches/haha";

//import P5Wrapper dynamically to avoid SSR issues

// const P5Wrapper = dynamic(() => import("@/app/[lang]/components/P5Wrapper"), {
//   ssr: false,
// });
export default function Drawing() {
  return (
    <div>
      <h1>Hello</h1>
      <p className="">Thử 1 hình vẽ p5</p>
      {/* <P5Wrapper sketch={hahaSketch} /> */}
    </div>
  );
}
