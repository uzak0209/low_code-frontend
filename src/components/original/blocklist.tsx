"use client";
import { BlockName, Blockconfigs } from "./types";
import Block from "./block";
import Draggable from "./draggable";
import { useReducer } from "react";
import { Input } from "../ui/input";
function idNumReducer(state: number, action: { step: number; type: string }) {
  switch (action.type) {
    case "increment":
      return state + action.step;
    case "decrement":
      return state - action.step;
    default:
      return state;
  }
}

const Blocklist = () => {
  const [id_num, dispatch] = useReducer(idNumReducer, 0);
  return (
    <div className="blocklist">
      {Object.keys(Blockconfigs).map((block) => (
        <Draggable
          key={Blockconfigs[block as BlockName].id}
          initialPosition={{ x: 200, y: Blockconfigs[block as BlockName].id * 100 }}
          ignoreTags={["input"]}
        >
          <Block {...Blockconfigs[block as BlockName]} />
        </Draggable>
      ))}
    </div>
  );
};
export default Blocklist;
