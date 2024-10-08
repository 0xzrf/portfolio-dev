import { div } from "framer-motion/client";
import Image from "next/image";
import Info from "@/components/App/Info"
import Work  from "@/components/App/Work";
import {Experience} from "@/components/App/Experience";
import { Acheivements } from "@/components/App/Acheivements";

export default function Home() {
  return (
   <div className="min-h-screen w-full  overflow-hidden" style={{ backgroundColor: '#18191a', paddingTop: "1px" }}>
      <Info/>
      <Work/>
      <Experience />
      <Acheivements/>
   </div>
  );
}
