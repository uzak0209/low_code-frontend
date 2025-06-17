import Block from "./block";



// src/lib/colorMap.ts

export enum BlockName {
  TextInput = 'TextInput',
  GetText = 'GetText',
  GoURL = 'GoURL',
  InitBrowser = 'InitBrowser',
  _='unknown'
}

export type BlockConfig = {
  id:number,
  label: string;
  color: string;
  hasInput: boolean;
  hasSelector: boolean;
};

// Enumをkeyとしたhashmapの作成
export const Blockconfigs :Record<BlockName,BlockConfig>= {
  [BlockName.TextInput]: {
    id:1,
    label: 'テキストを入力',
    color: 'bg-green-500',
    hasInput: true,
    hasSelector:true,
  },
  [BlockName.GetText]: {
    id:2,
    label: 'テキストを取得',
    color: 'bg-green-500',
    hasInput:false,
    hasSelector:true
  },
  [BlockName.GoURL]: {
    id:3,
    label: '指定したURLに遷移',
    color: 'bg-yellow-500',
    hasInput:true,
    hasSelector:false
  },
  [BlockName.InitBrowser]: {
    id:4,
    label: 'ブラウザを立ち上げる',
    color: 'bg-red-500',
    hasInput: true,
    hasSelector:false
  },
  [BlockName._]: {
    id:100,
    label: '不明なブロック',
    color: 'bg-gray-400',
    hasInput: false,
    hasSelector: false
  }
};
