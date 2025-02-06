"use client";
import dynamic from "next/dynamic";
import hahaSketch from "@/content/sketches/haha";
import Image from 'next/image'
//import P5Wrapper dynamically to avoid SSR issues
import bridgeimg  from 'SquidGameGlassBridge.png'
const P5Wrapper = dynamic(() => import("@/app/components/P5Wrapper"), {
  ssr: false,
});
export default function Drawing() {
  return (
    <div>
      <h1>Hello</h1>
      <p className="">Thử 1 hình vẽ p5</p>
      <P5Wrapper sketch={hahaSketch} />
      <Image src={bridgeimg} width={200} height={200} alt='bridge-image'/>
    </div>
  );
}
