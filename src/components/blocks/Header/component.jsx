import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { LANDING_PAGE_PATH } from '@/constants'
import { PropTypes } from 'prop-types'
import Wrapper from './styles'
import { cleanAllData } from '@/utils'

const Header = ({ isAuth, logOut }) => {
  const handleExit = () => {
    cleanAllData()
    logOut(true)
  }

  useEffect(() => {
    !document.cookie.includes('token') && cleanAllData()
  })

  return (
    <Wrapper>
      <h1>
        <NavLink to={LANDING_PAGE_PATH}>Google Profile</NavLink>
      </h1>
      {
        isAuth
          ? (<NavLink to={LANDING_PAGE_PATH} onClick={handleExit}>Exit</NavLink>)
          : (<NavLink to={LANDING_PAGE_PATH}>Sign in</NavLink>)
      }
    </Wrapper>
  )
}

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logOut: PropTypes.func,
}

Header.defaultPrors = {
  logOut: function f () {},
}

export default Header
