"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { BlockConfig } from "./types";
import { Button } from "../ui/button";
import { Settings, Play, Copy, Trash2 } from "lucide-react";
interface BlockProps extends BlockConfig {
  onDelete?: (id: number) => void;
  onDuplicate?: (id: number) => void;
  onExecute?: (id: number) => void;
}

const Block: React.FC<BlockProps> = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [selectorVal, setSelectorVal] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card
      className={`w-80 bg-gradient-to-br ${props.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
    >
      <CardHeader className="p-3 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white/20 rounded-md">{props.icon}</div>
            <CardTitle className="text-white font-medium text-sm">
              {props.label}
            </CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white/70 hover:text-white hover:bg-white/20"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <Settings className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white/70 hover:text-white hover:bg-white/20"
              onClick={() => props.onDuplicate?.(props.id)}
            >
              <Copy className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white/70 hover:text-white hover:bg-white/20"
              onClick={() => props.onDelete?.(props.id)}
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="p-3 pt-1 space-y-3">
          {props.hasInput && (
            <div className="space-y-1">
              <label className="text-white/90 text-xs font-medium block">
                入力値
              </label>
              <Input
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="値を入力してください..."
                className="bg-white/90 border-white/30 focus:border-white focus:ring-2 focus:ring-white/30 text-gray-800 text-sm h-8"
              />
            </div>
          )}

          {props.hasSelector && (
            <div className="space-y-1">
              <label className="text-white/90 text-xs font-medium block">
                CSSセレクター
              </label>
              <Input
                value={selectorVal}
                onChange={(e) => setSelectorVal(e.target.value)}
                placeholder="例: #id, .class, button"
                className="bg-white/90 border-white/30 focus:border-white focus:ring-2 focus:ring-white/30 font-mono text-gray-800 text-sm h-8"
              />
            </div>
          )}

          {!props.hasInput && !props.hasSelector && (
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <p className="text-white/80 text-xs">設定項目がありません</p>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};
export default Block;
