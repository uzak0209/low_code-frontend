"use client";
import { useState, useReducer } from "react";
import {
  BlockConfigs,
  BlockName,
  BlockPosConfig,
} from "../components/original/types";
import Sidebar from "../components/original/sidebar";
import Header from "../components/original/Header";
import Canvas from "../components/original/canvas";
import Menubar from "@/components/original/Menubar";
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
const App: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [idNum, dispatch] = useReducer(
    idNumReducer,
    Object.keys(BlockConfigs).length
  );
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const [blocks, setBlocks] = useState(() =>
    Object.entries(BlockConfigs).map(
      ([_, config], index) =>
        ({
          position: {
            x: 300 + (index % 3) * 100,
            y: 50 + Math.floor(index / 3) * 150,
          },
          conf: { ...config },
        } as BlockPosConfig)
    )
  );

  const handleAddBlock = (blockType: BlockName) => {
    const config = BlockConfigs[blockType];
    const newBlock = {
      position: { x: 300, y: 50 },
      conf: { ...config, id: idNum + 1 },
    };
    setBlocks((prev) => [...prev, newBlock]);
    dispatch({ type: "increment", step: 1 });
  };

  return (
    <div className="relative h-screen bg-background">
      {/* Sidebarの上に重ねて表示するMenubar */}
      <div className="fixed top-4 left-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
          <Menubar />
        </div>
      </div>

      <div className="h-full flex bg-gradient-to-br from-slate-100 to-slate-200">
        <Sidebar onAddBlock={handleAddBlock} />
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <Header />
          <Canvas
            blocks={blocks}
            setBlocks={setBlocks}
            dispatch={dispatch}
            idNum={idNum}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
