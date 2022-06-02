import React from 'react'
// コンポーネントのストーリーが、引数をpropsとして受け取る単純なコンポーネントである場合。
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from './Card'

export default {
  // ブラウザで表示するタイトル
  title: 'Example/Card',

  // .storybook\main.jsの"stories"設定とマッチするファイルを探します。
  // Buttonの場合はButton.tsxファイルを探しています。
  component: Card,

  // TypeScriptの型設定
  // ComponentMetaは コンポーネントのストーリーが、引数をプロップとして受け取る単純なコンポーネントで使用します。
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Card01 = Template.bind({})
