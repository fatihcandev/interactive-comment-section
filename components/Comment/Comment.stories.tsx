import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { mockData } from 'data'
import { Comment, CommentProps } from './Comment'

export default {
  title: 'Comment',
  component: Comment,
  decorators: [
    (story: ComponentStory<typeof Comment>, context) => (
      <div style={{ maxWidth: 375 }}>
        {story(story.args as CommentProps, context)}
      </div>
    ),
  ],
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = args => <Comment {...args} />

export const Primary = Template.bind({})

Primary.args = {
  comment: mockData.comments[0],
}
