import { useEffect, useState } from 'react'

import { supabase } from '@/utils/supabaseClient'
import { User } from '@/types'

type HookReturnType = { user: User | null; currentUserId?: string }

export const useUser = (id?: string): HookReturnType => {
  const currentUserId = supabase.auth.user()?.id
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (!currentUserId) return

    supabase
      .from<User>('users')
      .select('*')
      .eq('id', id || currentUserId)
      .then(res => {
        if (res.data) setUser(res.data[0])
      })
  }, [id, currentUserId])

  return {
    user,
    currentUserId,
  } as HookReturnType
}
