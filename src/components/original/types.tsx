import { Copy, Play, Settings, Trash2, Plus, Code, Globe, Type, MousePointer } from 'lucide-react';
export enum BlockName {
  TextInput = 'TextInput',
  GetText = 'GetText',
  GoURL = 'GoURL',
  InitBrowser = 'InitBrowser',
}

export type BlockConfig = {
  id: number;
  label: string;
  color: string;
  hasInput: boolean;
  hasSelector: boolean;
  icon: React.ReactNode;
  category: 'input' | 'action' | 'browser' | 'data';
};

export const BlockConfigs: Record<BlockName, BlockConfig> = {
  [BlockName.TextInput]: {
    id: 1,
    label: 'テキストを入力',
    color: 'from-emerald-500 to-teal-600',
    hasInput: true,
    hasSelector: true,
    icon: <Type className="w-4 h-4" />,
    category: 'input',
  },
  [BlockName.GetText]: {
    id: 2,
    label: 'テキストを取得',
    color: 'from-blue-500 to-indigo-600',
    hasInput: false,
    hasSelector: true,
    icon: <Code className="w-4 h-4" />,
    category: 'data',
  },
  [BlockName.GoURL]: {
    id: 3,
    label: '指定したURLに遷移',
    color: 'from-amber-500 to-orange-500',
    hasInput: true,
    hasSelector: false,
    icon: <Globe className="w-4 h-4" />,
    category: 'browser',
  },
  [BlockName.InitBrowser]: {
    id: 4,
    label: 'ブラウザを立ち上げる',
    color: 'from-purple-500 to-violet-600',
    hasInput: true,
    hasSelector: false,
    icon: <MousePointer className="w-4 h-4" />,
    category: 'browser',
  },
};
