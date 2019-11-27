import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Login from '@/components/pages/Login'
import StandardLayout from '@/components/layouts'

export default function withSecure (Component) {
  return function SecureWrapper (props) {
    const [isAuth, setAuth] = useState(localStorage.getItem('auth') || false)
    const { ...rest } = props
    const TargetComponent = isAuth ? Component : Login

    const changeAuth = value => {
      setAuth(value)
    }

    return (
      <StandardLayout isAuth={isAuth} changeAuth={changeAuth}>
        <Route component={() => <TargetComponent
          isAuth={isAuth}
          changeAuth={changeAuth}
          {...rest} />} />
      </StandardLayout>
    )
  }
}
