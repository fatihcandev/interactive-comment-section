import { useEffect, useState } from 'react'

import { supabase } from '@/utils/supabaseClient'
import { User } from '@/types'

type HookReturnType = { currentUser: User | null }

const useCurrentUser = (): HookReturnType => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase
      .from<User>('users')
      .select('*')
      .eq('id', supabase.auth.user()?.id)
      .then(res => {
        if (res.data) setUser(res.data[0])
      })
  }, [])

  return {
    currentUser: user,
  } as HookReturnType
}

export default useCurrentUser
