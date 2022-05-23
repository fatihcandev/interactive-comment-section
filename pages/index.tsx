import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button } from '@mantine/core'

import { supabase } from '@/utils/supabaseClient'
import { NewComment } from '@/components/NewComment'

const Home: NextPage = () => {
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
    <div>
      <Head>
        <title>Interactive Comment Section</title>
      </Head>
      <h1>Home</h1>
      <Button onClick={() => supabase.auth.signOut()}>Log out</Button>
      <NewComment />
    </div>
  )
}

export default Home
