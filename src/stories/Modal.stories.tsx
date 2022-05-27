import React from 'react';
// コンポーネントのストーリーが、引数をpropsとして受け取る単純なコンポーネントである場合。
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {

    // ブラウザで表示するタイトル
    title: 'Example/Modal',

    // .storybook\main.jsの"stories"設定とマッチするファイルを探します。
    // Buttonの場合はButton.tsxファイルを探しています。
    component: Modal,

    // TypeScriptの型設定
    // ComponentMetaは コンポーネントのストーリーが、引数をプロップとして受け取る単純なコンポーネントで使用します。
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Modal01 = Template.bind({});
Modal01.args = {
    label: 'labelダミーテキスト',
    lalabel: 'lalabelダミーテキスト',
};