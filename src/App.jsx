import React from 'react'
import Router from '@/Router'
import { Provider } from 'react-redux'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import ErrorsNotification from '@/components/wrappers/ErrorsNotification'
import store from '@/store'

export default () => (
  <Provider store={store}>
    <ThemeProviderWrapper>
      <ErrorsNotification />
      <Router />
    </ThemeProviderWrapper>
  </Provider>
)
