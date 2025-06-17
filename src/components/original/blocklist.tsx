"use client";
import { Blockprops, BlockListprops } from "./types";
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

const Blocklist = (props: BlockListprops) => {
  const [id_num, dispatch] = useReducer(idNumReducer, 0);
  return (
    <div className="blocklist">
      {props.blocklist.map((block) => (
        <Draggable
          key={block.id}
          initialPosition={{ x: 200, y: block.id * 100 }}
          ignoreTags={["input"]}
        >
          <Block {...block} />
        </Draggable>
      ))}
    </div>
  );
};
export default Blocklist;
