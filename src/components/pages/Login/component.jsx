import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { provider, appId, key, scope } from '@/constants'
import { Wrapper, H3 } from './styles'

import StandardLayout from '@/components/layouts'
import SocialButton from './SocialButton'
import { saveUserData } from '@/utils/common'

export default function Login (props) {
  const [auth] = useState(props.isAuth)
  const [error, setError] = useState('')

  const onLoginSuccess = user => {
    const { history, logOut } = props
    saveUserData(`token=${user._token.accessToken}token`)
    saveUserData('auth', true)
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
                provider={provider}
                appId={appId}
                key={key}
                scope={scope}
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
