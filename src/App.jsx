import React from 'react'
import Router from '@/Router'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'

export default () => (
  <ThemeProviderWrapper>
    <Router />
  </ThemeProviderWrapper>
)
