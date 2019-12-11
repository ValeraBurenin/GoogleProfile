import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { LANDING_PAGE_PATH } from '@/constants'
import Wrapper from './styles'

const Header = ({ isAuth, onLogOut, validateUserToken }) => {
  const handleExit = () => {
    onLogOut()
  }

  useEffect(() => { validateUserToken() })

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
  onLogOut: PropTypes.func.isRequired,
  validateUserToken: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
}

export default Header
