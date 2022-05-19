import { FormEventHandler, useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { Input } from '../Input'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Comment } from '@/types'
import { getMediaQuery, sendNewComment, sendReply } from '@/utils'

export type NewCommentProps = {
  replyingTo?: string
}

export const initialComment: Comment = {
  id: new Date().getTime(),
  content: '',
  createdAt: new Date(),
  score: 0,
  user: {
    email: 'fatih@gmail.com',
    username: 'fatih',
  },
  replies: [],
}

export const NewComment: React.FC<NewCommentProps> = ({ replyingTo = '' }) => {
  const avatar = useMemo(
    () => (
      <StyledAvatar
        src={initialComment.user.avatarUrl}
        alt={initialComment.user.username}
      />
    ),
    []
  )
  const button = useMemo(
    () => (
      <StyledButton type="submit">{replyingTo ? 'reply' : 'send'}</StyledButton>
    ),
    [replyingTo]
  )
  const input = useMemo(
    () => (
      <StyledInput
        name="content"
        placeholder={replyingTo ? `@${replyingTo}` : 'Add a comment...'}
        required
      />
    ),
    [replyingTo]
  )

  const handleSend: FormEventHandler<HTMLFormElement> = useCallback(
    e => {
      e.preventDefault()
      const formData = new FormData(e.target as HTMLFormElement)
      const content = formData.get('content') as string
      const comment: Comment = {
        ...initialComment,
        content,
      }

      try {
        if (replyingTo) {
          return sendReply({
            replyingTo,
            reply: {
              ...comment,
              replyingTo,
            },
          })
        }

        sendNewComment(comment)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        e.target.reset()
      } catch (error) {
        console.log(error)
        // todo: show error in toast
      }
    },
    [replyingTo]
  )

  return (
    <Container onSubmit={handleSend}>
      {avatar}
      {input}
      {button}
    </Container>
  )
}

const Container = styled.form`
  ${props => props.theme.baseCommentStyle}
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: flex-start;

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

const StyledButton = styled(Button)`
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
