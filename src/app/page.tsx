import Blocklist from "@/components/original/blocklist";
import { BlockName} from "@/components/original/types";
import { useReducer } from "react";
export default function Home() {


  return (
    <div className="h-screen flex items-center justify-center bg-background">
        <Blocklist />
    </div>
  )
}
