import React from 'react'
import { Story } from '@storybook/react'
import { Arrow } from './index'

export default {
  title: 'Icon',
  component: Arrow,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
}

export const Default: Story = () => <Arrow />

export const Color: Story = () => (
  <div className="text-red-900">
    <Arrow />
  </div>
)

export const Size: Story = () => (
  <>
    <Arrow width="240" height="240" />
  </>
)
