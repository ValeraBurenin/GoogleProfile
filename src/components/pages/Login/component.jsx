import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PROVIDER, APP_ID, KEY, SCOPE } from '@/constants'
import { Wrapper, H3 } from './styles'

import StandardLayout from '@/components/layouts'
import SocialButton from './SocialButton'
import { setUserAuthenticated, saveUserToken } from '@/utils'

export default function Login (props) {
  const [auth] = useState(props.isAuth)
  const [error, setError] = useState('')

  const onLoginSuccess = token => {
    const { history, logOut } = props
    saveUserToken(token)
    setUserAuthenticated(true)
    logOut(auth)
    history.push('/')
  }

  const onLoginFailure = () => {
    setError('An error occurred on the server. Please repeat your request')
  }

  return (
    <StandardLayout>
      <Wrapper>
        {
          auth
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
  history: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
  logOut: PropTypes.func,
}

Login.defaultProps = {
  logOut: function f () {},
}
