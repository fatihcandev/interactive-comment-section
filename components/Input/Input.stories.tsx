import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input as InputComp, InputProps } from './Input'

export default {
  title: 'Input',
  component: InputComp,
  decorators: [
    (story: ComponentStory<typeof InputComp>, context) => (
      <div style={{ maxWidth: 500 }}>
        {story(story.args as InputProps, context)}
      </div>
    ),
  ],
} as ComponentMeta<typeof InputComp>

const Template: ComponentStory<typeof InputComp> = args => (
  <InputComp {...args} />
)

export const Input = Template.bind({})
