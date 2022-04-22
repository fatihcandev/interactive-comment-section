import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Comment } from './Comment'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const Primary = Template.bind({})

Primary.args = {
  comment: {
    content: 'This is a comment',
  },
}
