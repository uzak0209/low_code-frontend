import { Menu } from "lucide-react";
import { useState } from "react";

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* メニューボタン */}
      <button
        onClick={toggleMenu}
        className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* スライド式メニュー */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">メニュー</h2>
            <button
              onClick={toggleMenu}
              className="p-1 hover:bg-gray-100 rounded"
            >
              ✕
            </button>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              🏠 <span>ホーム</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              📄 <span>ドキュメント</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              ⚙️ <span>設定</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              ❓ <span>ヘルプ</span>
            </li>
          </ul>
        </div>
      </div>

      {/* オーバーレイ（メニューが開いている時の背景） */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Menubar;