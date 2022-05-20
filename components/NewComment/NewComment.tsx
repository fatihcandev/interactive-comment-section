import { FormEventHandler, useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { Input } from '../Input'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { mockComment } from '@/mocks'
import { Comment, User } from '@/types'
import { getMediaQuery, sendNewComment, sendReply } from '@/utils'

export type NewCommentProps = {
  replyingTo?: string
}

export const NewComment: React.FC<NewCommentProps> = ({ replyingTo = '' }) => {
  // todo: get the current user session
  const user: User = useMemo(
    () => ({
      id: '1',
      username: 'fatihcan',
      email: 'fatihcan@gmail.com',
      avatarUrl: '',
    }),
    []
  )
  const avatar = useMemo(
    () => <StyledAvatar src={user.avatarUrl} alt={user.username} />,
    [user]
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
        ...mockComment,
        content,
        user,
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
    [replyingTo, user]
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
