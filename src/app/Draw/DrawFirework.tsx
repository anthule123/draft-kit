"use client";
import heartFirework from "@/content/sketches/heartFirework";
import dynamic from "next/dynamic";

const P5Wrapper = dynamic(() => import("@/app/components/P5Wrapper"), {
  ssr: false,
});
export default function Drawing() {
  return (
    <div>
      <P5Wrapper sketch={heartFirework} />
    </div>
  );
}
