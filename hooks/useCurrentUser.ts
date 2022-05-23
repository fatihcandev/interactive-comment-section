import { useEffect, useMemo, useState } from 'react'

import { supabase } from '@/utils/supabaseClient'
import { User } from '@/types'

export const useCurrentUser = (): {
  user: User
} => {
  const currentUserId = useMemo(() => supabase.auth.user()?.id, [])
  const [user, setUser] = useState<User>({
    id: '',
    username: '',
    email: '',
    avatar_url: '',
  })

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
  }
}
