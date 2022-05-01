import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>{args.children}</Button>
)

export const Primary = Template.bind({})

Primary.args = {
  children: 'REPLY',
}