import Draggable from "../ui/draggable";
import Block from "./block";
import { BlockPosConfig } from "./types";


type CanvasProps = {
  blocks: BlockPosConfig[];
  setBlocks:any,
  dispatch:any,
  idNum:any,
};

const Canvas: React.FC<CanvasProps> = ({ blocks ,setBlocks,dispatch,idNum}) => {
    const updateBlockPosition = (id: number, position: { x: number; y: number }) => {
    setBlocks((prev: BlockPosConfig[]) => prev.map((block: BlockPosConfig) => 
      block.conf.id === id ? { ...block, position } : block
    ));
  };

const handleDeleteBlock = (id: number) => {
  setBlocks((prev:BlockPosConfig[]) => prev.filter((block) => block.conf.id !== id));
  dispatch({ type: "decrement", step: 1 });
};
const handleExecuteBlock = (id: number) => {
  console.log(`Executing block ${id}`);
  // ここに実行ロジックを追加
};
const handleDuplicateBlock = (id: number) => {
  const blockToDuplicate = blocks.find((block) => block.conf.id === id);
  if (blockToDuplicate) {
    const newBlock = {
      ...blockToDuplicate,
      id: idNum + 1,
      position: {
        x: blockToDuplicate.position.x + 30,
        y: blockToDuplicate.position.y + 30,
      },
    };
    setBlocks((prev:BlockPosConfig[]) => [...prev, newBlock]);
    dispatch({ type: "increment", step: 1 });
  }
};
  return (
    <div className="relative w-full h-full">
      {blocks.map((block) => (
        <Draggable
          key={block.conf.id}
          initialPosition={block.position}
          onPositionChange={(position) =>
            updateBlockPosition(block.conf.id, position)
          }
        >
          <Block
            id={block.conf.id}
            label={block.conf.label}
            color={block.conf.color}
            hasInput={block.conf.hasInput}
            hasSelector={block.conf.hasSelector}
            icon={block.conf.icon}
            category={block.conf.category}
            onDelete={handleDeleteBlock}
            onDuplicate={handleDuplicateBlock}
            onExecute={handleExecuteBlock}
          />
        </Draggable>
      ))}
    </div>
  );
};
export default Canvas;
