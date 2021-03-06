import { ComponentStory, ComponentMeta } from '@storybook/react'
import dayjs from 'dayjs'

import { mockData } from '@/data'
import { Comment } from './Comment'
import { NewComment } from '../NewComment'

export default {
  title: 'Comment',
  component: Comment,
  decorators: [
    (story: ComponentStory<typeof Comment>, context) => (
      <div style={{ maxWidth: 732 }}>{story(story.args, context)}</div>
    ),
  ],
  argTypes: {
    comment: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = args => <Comment {...args} />

export const AnotherUser = Template.bind({})
AnotherUser.args = {
  comment: mockData.comments[0],
}

export const CurrentUser = Template.bind({})

CurrentUser.args = {
  comment: {
    id: '4',
    content:
      "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    createdAt: dayjs().subtract(2, 'days').toISOString(),
    score: 2,
    user: {
      id: '1',
      avatarUrl: '/images/image-juliusomo.png',
      username: 'juliusomo',
      email: 'juliusomo@gmail.com',
    },
    replies: [],
  },
}

const NewTemplate: ComponentStory<typeof NewComment> = args => (
  <NewComment {...args} />
)

export const New = NewTemplate.bind({})

New.args = {
  replyingTo: '',
}
