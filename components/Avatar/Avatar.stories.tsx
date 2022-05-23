import { ComponentStory, ComponentMeta } from '@storybook/react'
import { mockData } from '@/data'

import { Avatar } from './Avatar'

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    src: {
      options: mockData.comments.map(comment => comment.user.avatar_url),
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Primary = Template.bind({})

Primary.args = {
  src: mockData.comments[0].user.avatar_url,
}
