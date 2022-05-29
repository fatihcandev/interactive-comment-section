import { useEffect } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { NewComment } from '@/components/NewComment'
import { Comment } from '@/components/Comment'
import type { Comment as CommentType } from '@/types'
import { getComments } from '@/utils'
import { supabase } from '@/utils/supabaseClient'

const Home: NextPage<{ comments: CommentType[] }> = ({ comments }) => {
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

  return (
    <Container>
      <Head>
        <title>Interactive Comment Section</title>
      </Head>
      {comments.length > 0 && (
        <Comments>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Comments>
      )}
      <StyledNewComment />
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f6fa;
  padding: 16px;
`

const Comments = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 732px;
  margin: 0 auto;
`

const StyledNewComment = styled(NewComment)`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
`

export const getServerSideProps: GetServerSideProps<{
  comments: CommentType[]
}> = async () => {
  const comments = await getComments()
  return {
    props: {
      comments,
    },
  }
}
