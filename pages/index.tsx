import { useEffect, useState } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { NewComment } from '@/components/NewComment'
import { Comment } from '@/components/Comment'
import type { Comment as CommentType } from '@/types'
import { getComments } from '@/utils'
import { supabase } from '@/utils/supabaseClient'
import { Button } from '@mantine/core'
import { showNotification } from '@mantine/notifications'

const Home: NextPage<{ fetchedComments: CommentType[] }> = ({
  fetchedComments,
}) => {
  const [comments, setComments] = useState<CommentType[]>(fetchedComments)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const { push } = useRouter()

  useEffect(() => {
    const authSubscription = supabase.auth.onAuthStateChange(
      (_event, sessionInfo) => {
        if (!sessionInfo) {
          push('/login')
        }
      }
    )

    return () => {
      authSubscription.data?.unsubscribe()
    }
  }, [push])

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showNotification({
        title: 'Something went wrong',
        message: error.error_description || error.message,
        color: 'red',
      })
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <Container>
      <Head>
        <title>Interactive Comment Section</title>
      </Head>
      <LogoutContainer>
        <Button type="submit" loading={isLoggingOut} onClick={handleLogout}>
          Logout
        </Button>
      </LogoutContainer>
      {comments.length > 0 && (
        <Comments>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Comments>
      )}
      <StyledNewComment
        onCommentAdded={addedComment => {
          setComments(prev => [...prev, addedComment])
        }}
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 100vh;
  background-color: #f5f6fa;
  padding: 16px;
`

const LogoutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 732px;
  height: 100%;
  max-height: calc(100vh - 280px);
  margin: 0 auto;
  overflow-y: auto;
`

const StyledNewComment = styled(NewComment)`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
`

export const getServerSideProps: GetServerSideProps<{
  fetchedComments: CommentType[]
}> = async () => {
  const fetchedComments = await getComments()
  return {
    props: {
      fetchedComments,
    },
  }
}
