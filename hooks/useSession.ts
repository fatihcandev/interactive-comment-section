import { useEffect, useState } from 'react'

import { supabase } from '@/utils/supabaseClient'
import { Session } from '@supabase/supabase-js'

type UseSession = () => {
  session: Session | null | boolean
}

const useSession: UseSession = () => {
  const [session, setSession] = useState<Session | null | boolean>(null)

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      subscription.data?.unsubscribe()
    }
  }, [])

  useEffect(() => {
    setSession(supabase.auth.session())
  }, [])

  return { session }
}

export default useSession
