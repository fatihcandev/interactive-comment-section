import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

import { theme } from '@/theme'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
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
