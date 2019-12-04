import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PROVIDER, APP_ID, KEY, SCOPE } from '@/constants'
import { Wrapper, H3 } from './styles'
import { setUserAuthenticated, saveUserToken } from '@/utils'

import StandardLayout from '@/components/layouts'
import SocialButton from './SocialButton'

function Login ({ isAuth, onSetAuthorization }) {
  const [error, setError] = useState('')

  const onLoginSuccess = token => {
    onSetAuthorization(true)
    saveUserToken(token)
    setUserAuthenticated(true)
  }

  const onLoginFailure = () => {
    setError('An error occurred on the server. Please repeat your request')
  }

  return (
    <StandardLayout>
      <Wrapper>
        {
          isAuth
            ? (<h3>Please log out of your current account.</h3>)
            : (
              <SocialButton
                provider={PROVIDER}
                appId={APP_ID}
                key={KEY}
                scope={SCOPE}
                onLoginSuccess={onLoginSuccess}
                onLoginFailure={onLoginFailure}
              >
                Sign in
              </SocialButton>
            )
        }
        {error && (<H3>{error}</H3>)}
      </Wrapper>
    </StandardLayout>
  )
}

Login.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  onSetAuthorization: PropTypes.func.isRequired,
}

export default Login
