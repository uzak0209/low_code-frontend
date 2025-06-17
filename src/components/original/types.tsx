export enum BlockName {
  TextInput = 'TextInput',
  GetText = 'GetText',
  GoURL = 'GoURL',
  InitBrowser = 'InitBrowser',
}

export type BlockConfig = {
  id: number,
  label: string;
  color: string;
  hasInput: boolean;
  hasSelector: boolean;
};

// より洗練された色使い
export const Blockconfigs: Record<BlockName, BlockConfig> = {
  [BlockName.TextInput]: {
    id: 1,
    label: 'テキストを入力',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    hasInput: true,
    hasSelector: true,
  },
  [BlockName.GetText]: {
    id: 2,
    label: 'テキストを取得',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    hasInput: false,
    hasSelector: true
  },
  [BlockName.GoURL]: {
    id: 3,
    label: '指定したURLに遷移',
    color: 'bg-gradient-to-br from-amber-500 to-orange-500',
    hasInput: true,
    hasSelector: false
  },
  [BlockName.InitBrowser]: {
    id: 4,
    label: 'ブラウザを立ち上げる',
    color: 'bg-gradient-to-br from-red-500 to-rose-600',
    hasInput: true,
    hasSelector: false
  },
};