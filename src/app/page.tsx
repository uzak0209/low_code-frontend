import Blocklist from "@/components/original/blocklist";
import { BlockListprops } from "@/components/original/types";
import { useReducer } from "react";
export default function Home() {

  const blocklist = [
    {
      name: "Sample Block",
      input: true,
      id: 1
    },
    {
      name: "Sample Block",
      input: true,
      id: 2
    },
    {
      name: "Sample Block",
      input: true,
      id: 3
    }
  ];
  return (
    <div className="h-screen flex items-center justify-center bg-background">
        <Blocklist blocklist={blocklist}/>
    </div>
  )
}
