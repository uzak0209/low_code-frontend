import { BlockConfigs, BlockName } from "./types";


const Sidebar: React.FC<{ onAddBlock: (blockType: BlockName) => void }> = ({ onAddBlock }) => {
  const categories = {
    input: { label: '入力', blocks: [BlockName.TextInput] },
    data: { label: 'データ', blocks: [BlockName.GetText] },
    browser: { label: 'ブラウザ', blocks: [BlockName.GoURL, BlockName.InitBrowser] },
  };

  return (
    <div className="w-64 bg-white/95 backdrop-blur-sm border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">ブロック</h2>
        <p className="text-sm text-gray-600 mt-1">ドラッグして追加</p>
      </div>
      
      <div className="p-4 space-y-4">
        {Object.entries(categories).map(([key, category]) => (
          <div key={key}>
            <h3 className="text-sm font-medium text-gray-700 mb-2">{category.label}</h3>
            <div className="space-y-2">
              {category.blocks.map((blockName) => {
                const config = BlockConfigs[blockName];
                return (
                  <button
                    key={blockName}
                    onClick={() => onAddBlock(blockName)}
                    className={`w-full p-3 rounded-lg bg-gradient-to-r ${config.color} text-white text-left hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md`}
                  >
                    <div className="flex items-center gap-2">
                      {config.icon}
                      <span className="text-sm font-medium">{config.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;