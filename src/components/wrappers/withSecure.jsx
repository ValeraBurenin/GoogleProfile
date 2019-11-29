import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { getUserData } from '@/utils/common'
import Login from '@/components/pages/Login'

export default function withSecure (component) {
  return function SecureWrapper (props) {
    const [isAuth, setAuth] = useState(Boolean(getUserData('auth') || false))
    const { ...rest } = props
    const TargetComponent = isAuth ? component : Login

    const logOut = value => {
      setAuth(!value)
    }

    return (
      <Route component={() => <TargetComponent
        isAuth={isAuth}
        logOut={logOut}
        {...rest} />} />
    )
  }
}
