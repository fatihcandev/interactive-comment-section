import { FormEventHandler, useState } from 'react'
import { Button } from '@mantine/core'
import styled from 'styled-components'

import { Avatar } from '../Avatar'
import { Input } from '../Input'
import { useUser } from '@/hooks'
import { Comment, CommentPayload } from '@/types'
import { getMediaQuery, sendNewComment } from '@/utils'

export type NewCommentProps = React.ComponentPropsWithoutRef<'form'> & {
  replyingTo?: string
  onCommentAdded: (comment: Comment) => void
}

export const NewComment: React.FC<NewCommentProps> = ({
  replyingTo = '',
  onCommentAdded,
  ...props
}) => {
  const [isAddingComment, setIsAddingComment] = useState(false)
  const { user } = useUser()

  const handleSend: FormEventHandler<HTMLFormElement> = async e => {
    if (!user) return

    setIsAddingComment(true)
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const content = formData.get('content') as string
    const comment: CommentPayload = {
      content,
      user,
    }

    // if (replyingTo) {
    //   return sendReply({
    //     replyingTo,
    //     reply: {
    //       ...comment,
    //       replyingTo,
    //     },
    //   })
    // }

    const { addedComment } = await sendNewComment(comment)
    if (!addedComment) return
    onCommentAdded(addedComment)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    e.target.reset()
    setIsAddingComment(false)
  }

  return (
    <Container onSubmit={handleSend} {...props}>
      <StyledAvatar src={user?.avatarUrl} alt={user?.username} />
      <StyledInput
        name="content"
        placeholder={replyingTo ? `@${replyingTo}` : 'Add a comment...'}
        required
      />
      <StyledButton type="submit" loading={isAddingComment}>
        {replyingTo ? 'reply' : 'send'}
      </StyledButton>
    </Container>
  )
}

const Container = styled.form`
  ${props => props.theme.baseCommentStyle}
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
  max-width: 732px;

  ${getMediaQuery({
    breakpoint: 'sm',
    minMax: 'max',
    styles: `
      grid=template-columns: 1fr auto;
      grid-template-rows: 1fr auto;
    `,
  })}
`

const StyledAvatar = styled(Avatar)`
  ${getMediaQuery({
    breakpoint: 'sm',
    minMax: 'max',
    styles: `
      grid-row: 2 / 3;
    `,
  })}
`

const StyledButton: typeof Button = styled(Button)`
  text-transform: uppercase;
  ${getMediaQuery({
    breakpoint: 'sm',
    minMax: 'max',
    styles: `
      grid-row: 2 / 3;
    `,
  })}
`

const StyledInput = styled(Input)`
  ${getMediaQuery({
    breakpoint: 'sm',
    minMax: 'max',
    styles: `
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    `,
  })}
`
