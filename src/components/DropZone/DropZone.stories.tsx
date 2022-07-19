import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DropZone } from './DropZone'

export default {
  title: 'DropZone',
  component: DropZone,
} as ComponentMeta<typeof DropZone>

const Template: ComponentStory<typeof DropZone> = (args) => (
  <DropZone {...args} accept={{ 'image/png': ['.png'] }} />
)

export const Default = Template.bind({})
Default.args = {}
