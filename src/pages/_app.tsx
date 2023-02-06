import '@/styles/globals.css'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
    const {toggleTheme} = useThemeOptions()   
  return (
        <ThemeProvider theme={toggleTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
