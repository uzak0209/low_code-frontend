"use client"
import { useState,useReducer } from "react";
import { BlockConfigs, BlockName } from "./types";
import { Play, Settings} from "lucide-react";
import { Button } from "../ui/button";
import  Sidebar  from "./sidebar"
import Block from "./block";
import Draggable from "../ui/draggable";
import { Main } from "next/document";
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
      ...config,
      position: { x: 300 + (index % 3) * 100, y: 50 + Math.floor(index / 3) * 150 }
    }))
  );

  const handleAddBlock = (blockType: BlockName) => {
    const config = BlockConfigs[blockType];
    const newBlock = {
      ...config,
      id: idNum + 1,
      position: { x: 300, y: 50 }
    };
    setBlocks(prev => [...prev, newBlock]);
    dispatch({ type: 'increment', step: 1 });
  };

  const handleDeleteBlock = (id: number) => {
    setBlocks(prev => prev.filter(block => block.id !== id));
    dispatch({ type: 'decrement', step: 1 });
  };

  const handleDuplicateBlock = (id: number) => {
    const blockToDuplicate = blocks.find(block => block.id === id);
    if (blockToDuplicate) {
      const newBlock = {
        ...blockToDuplicate,
        id: idNum + 1,
        position: { 
          x: blockToDuplicate.position.x + 30, 
          y: blockToDuplicate.position.y + 30 
        }
      };
      setBlocks(prev => [...prev, newBlock]);
      dispatch({ type: 'increment', step: 1 });
    }
  };

  const handleExecuteBlock = (id: number) => {
    console.log(`Executing block ${id}`);
    // ここに実行ロジックを追加
  };

  const updateBlockPosition = (id: number, position: { x: number; y: number }) => {
    setBlocks(prev => prev.map(block => 
      block.id === id ? { ...block, position } : block
    ));
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-slate-100 to-slate-200">
      <Sidebar onAddBlock={handleAddBlock} />
      
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">ワークフロービルダー</h1>
            <p className="text-sm text-gray-600">ブロックをドラッグしてワークフローを作成</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              設定
            </Button>
            <Button size="sm">
              <Play className="w-4 h-4 mr-2" />
              実行
            </Button>
          </div>
        </div>

        {/* Canvas */}
        <div className="relative w-full h-full">
          {blocks.map((block) => (
            <Draggable
              key={block.id}
              initialPosition={block.position}
              onPositionChange={(position) => updateBlockPosition(block.id, position)}
            >
              <Block
                {...block}
                onDelete={handleDeleteBlock}
                onDuplicate={handleDuplicateBlock}
                onExecute={handleExecuteBlock}
              />
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blocklist