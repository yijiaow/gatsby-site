import React from 'react'
import { ThemeProvider } from 'styled-components'
import { IdentityProvider } from './src/contexts/auth'
import theme from './src/constants/theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <IdentityProvider>{element}</IdentityProvider>
  </ThemeProvider>
)
