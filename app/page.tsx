import Info from "@/components/App/Info"
import Work  from "@/components/App/Work";
import {Experience} from "@/components/App/Experience";
  

export default function Home() {
  return (
   <div className="min-h-screen w-full  overflow-hidden" style={{ backgroundColor: '#18191a', paddingTop: "1px" }}>
      <Info/>
      <Work/>
      <Experience />
   </div>
  );
}
