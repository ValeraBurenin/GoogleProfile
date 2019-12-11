import React from 'react'
import { Login } from './styles'
import { PROVIDER, APP_ID, KEY, SCOPE } from '@/constants'

import StandardLayout from '@/components/layouts'
import SocialButton from '@/components/blocks/SocialButton'

const LoginPage = () => (
  <StandardLayout>
    <Login>
      <SocialButton
        provider={PROVIDER}
        appId={APP_ID}
        key={KEY}
        scope={SCOPE}
      >
          Sign in
      </SocialButton>
    </Login>
  </StandardLayout>
)

export default LoginPage
