"use client"
import { useState,useReducer } from "react";
import { BlockConfigs, BlockName ,BlockPosConfig} from "./types";
import { Play, Settings} from "lucide-react";
import { Button } from "../ui/button";
import  Sidebar  from "./sidebar"
import Block from "./block";
import Draggable from "../ui/draggable";
import Header from "./Header";
import Canvas from "./canvas";
function idNumReducer(state: number, action: { step: number; type: string }) {
  switch (action.type) {
    case 'increment':
      return state + action.step;
    case 'decrement':
      return state - action.step;
    default:
      return state;
  }
}
const Blocklist: React.FC = () => {
  const [idNum, dispatch] = useReducer(idNumReducer, Object.keys(BlockConfigs).length);
  const [blocks, setBlocks] = useState(() => 
    Object.entries(BlockConfigs).map(([_, config], index) => ({
      position: { x: 300 + (index % 3) * 100, y: 50 + Math.floor(index / 3) * 150 },
      conf: { ...config }
    } as BlockPosConfig))
  );

  const handleAddBlock = (blockType: BlockName) => {
    const config = BlockConfigs[blockType];
    const newBlock = {
      position: { x: 300, y: 50 },
      conf: { ...config, id: idNum + 1 }
    };
    setBlocks(prev => [...prev, newBlock]);
    dispatch({ type: 'increment', step: 1 });
  };




  return (
    <div className="h-screen flex bg-gradient-to-br from-slate-100 to-slate-200">
      <Sidebar onAddBlock={handleAddBlock} />
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <Header/>
        <Canvas  blocks={blocks} setBlocks={setBlocks} dispatch={dispatch} idNum={idNum} />
      </div>
    </div>
  );
};
export default Blocklist