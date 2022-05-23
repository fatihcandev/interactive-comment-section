import { useEffect, useMemo, useState } from 'react'

import { supabase } from '@/utils/supabaseClient'
import { User } from '@/types'

type HookReturnType = { user: User }

export const useCurrentUser = (): HookReturnType => {
  const currentUserId = useMemo(() => supabase.auth.user()?.id, [])
  const [user, setUser] = useState<Partial<User>>({})

  useEffect(() => {
    if (!currentUserId) return

    supabase
      .from<User>('users')
      .select('*')
      .eq('id', currentUserId)
      .then(res => {
        if (res.data) setUser(res.data[0])
      })
  }, [currentUserId])

  return {
    user,
  } as HookReturnType
}
