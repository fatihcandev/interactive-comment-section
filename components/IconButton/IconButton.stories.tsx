import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Minus as MinusIcon,
  Plus as PlusIcon,
  Reply as ReplyIcon,
} from 'components/icons'
import { IconButton } from './IconButton'

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = args => (
  <IconButton {...args} />
)

export const Delete = Template.bind({})

Delete.args = {
  icon: <DeleteIcon />,
  label: 'Delete',
  color: 'softRed',
}

export const Edit = Template.bind({})

Edit.args = {
  icon: <EditIcon />,
  label: 'Edit',
  color: 'moderateBlue',
}

export const Minus = Template.bind({})

Minus.args = {
  icon: <MinusIcon />,
  color: 'moderateBlue',
}

export const Plus = Template.bind({})

Plus.args = {
  icon: <PlusIcon />,
  color: 'moderateBlue',
}

export const Reply = Template.bind({})

Reply.args = {
  icon: <ReplyIcon />,
  label: 'Reply',
  color: 'moderateBlue',
}
