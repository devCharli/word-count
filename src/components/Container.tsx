import { useState } from "react";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");
  return (
    <main
      className="flex flex-col sm:flex-row sm:w-[1050px] h-[520px] bg-[#fff] 
   rounded-[10px] mt-[55px] overflow relative shadow-[0_4px_4px_rgba(0,0,0,0.3)]"
    >
      <Textarea text={text} setText={setText} />
    </main>
  );
}
