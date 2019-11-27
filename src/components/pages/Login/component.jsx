import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { boolPropType, funcPropType } from '@/prop-types'
import { provider, appId, key, scope } from '@/constants'
import { Wrapper, H3 } from './styles'

import SocialButton from './SocialButton'

export default function Login (props) {
  const [auth] = useState(props.isAuth)
  const [error, setError] = useState('')

  const onLoginSuccess = user => {
    const { history, changeAuth } = props
    document.cookie = `token=id${user._token.accessToken}tokenend; max-age=7200`
    localStorage.setItem('auth', true)
    changeAuth(true)
    history.push('/')
  }

  const onLoginFailure = () => {
    setError('Произошла ошибка на сервере. Пожалуйста, повторите ваш запрос.')
  }

  return (
    <Wrapper>
      {
        auth
          ? (<h3>Пожалуйста, выйдите из текущего аккаунта</h3>)
          : (
            <SocialButton
              provider={provider}
              appId={appId}
              key={key}
              scope={scope}
              onLoginSuccess={onLoginSuccess}
              onLoginFailure={onLoginFailure}
            >
              Авторизоваться
            </SocialButton>
          )
      }
      {error && (<H3>{error}</H3>)}
    </Wrapper>
  )
}

Login.propTypes = {
  history: PropTypes.object,
  changeAuth: funcPropType,
  isAuth: boolPropType,
}

Login.defaultProps = {
  changeAuth: function f () {},
}
