import { Play, Settings } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          ワークフロービルダー
        </h1>
        <p className="text-sm text-gray-600">
          ブロックをドラッグしてワークフローを作成
        </p>
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
  );
};
export default Header;