import React from 'react';
// コンポーネントのストーリーが、引数をpropsとして受け取る単純なコンポーネントである場合。
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Test } from './Test';

export default {

    // ブラウザで表示するタイトル
    title: 'Example/Test',

    // .storybook\main.jsの"stories"設定とマッチするファイルを探します。
    // Buttonの場合はButton.tsxファイルを探しています。
    component: Test,

    // TypeScriptの型設定
    // ComponentMetaは コンポーネントのストーリーが、引数をプロップとして受け取る単純なコンポーネントで使用します。
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Test01 = Template.bind({});