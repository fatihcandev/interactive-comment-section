import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button } from '@mantine/core'

import { supabase } from '@/utils/supabaseClient'

const Home: NextPage = () => {
  const { push } = useRouter()

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, sessionInfo) => {
      if (!sessionInfo) {
        push('/login')
      }
    })
  }, [push])

  return (
    <div>
      <Head>
        <title>Interactive Comment Section</title>
      </Head>
      <h1>Home</h1>
      <Button onClick={() => supabase.auth.signOut()}>Log out</Button>
    </div>
  )
}

export default Home
