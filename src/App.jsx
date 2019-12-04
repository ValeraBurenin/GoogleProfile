import React from 'react'
import Router from '@/Router'
import { Provider } from 'react-redux'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import store from '@/store'

export default () => (
  <Provider store={store}>
    <ThemeProviderWrapper>
      <Router />
    </ThemeProviderWrapper>
  </Provider>
)
