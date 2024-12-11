import Image from "next/image";
import logoSrc from "./hello.svg";
export default function App() {
  return (
    <div style={{ border: "1px solid black" }}>
      <Image
        src={logoSrc}
        alt="Logo"
        width={500}
        height={500}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
