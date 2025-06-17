"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { BlockConfig } from "./types";

const Block = (props: BlockConfig) => {
  const [inputval, setInputval] = useState("");
  const [selectorval, setSelectorval] = useState("");
  
  const changetxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputval(e.target.value);
  };
  
  // バグ修正: setInputval → setSelectorval
  const changeSelector = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectorval(e.target.value);
  };

  return (
    <div key={props.id}>
      <Card className={`${props.color} w-[28rem] shadow-lg hover:shadow-xl transition-all duration-200 border-none`}>
        <CardHeader className="p-2">
          <CardTitle className="text-white font-medium text-xs">
            {props.label}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 p-2">
          {props.hasInput && (
            <div className="flex items-center space-x-2">
              <label className="text-white/90 text-xs font-medium w-8 shrink-0">入力</label>
              <Input
                value={inputval}
                onChange={changetxt}
                placeholder="値を入力..."
                className="bg-white/90 border-white/50 focus:border-white focus:ring-1 focus:ring-white/50 flex-1 h-7 text-xs px-2"
              />
            </div>
          )}
          
          {props.hasSelector && (
            <div className="flex items-center space-x-2">
              <label className="text-white/90 text-xs font-medium w-8 shrink-0">選択</label>
              <Input
                value={selectorval}
                onChange={changeSelector}
                placeholder="CSS セレクター..."
                className="bg-white/90 border-white/50 focus:border-white focus:ring-1 focus:ring-white/50 font-mono text-xs flex-1 h-7 px-2"
              />
            </div>
          )}
          
          {/* 入力フィールドがない場合のプレースホルダー */}
          {!props.hasInput && !props.hasSelector && (
            <div className="bg-white/20 rounded text-white/80 text-xs text-center py-1">
             
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Block;