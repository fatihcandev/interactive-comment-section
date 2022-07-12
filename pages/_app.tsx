import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

import { theme } from '@/theme'
import { supabase } from '@/utils/supabaseClient'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      fetch('/api/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ event, session }),
      })
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </ThemeProvider>
  )
}

export default MyApp
