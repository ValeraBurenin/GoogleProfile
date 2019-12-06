import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { LANDING_PAGE_PATH } from '@/constants'
import { cleanAllData } from '@/utils'
import Wrapper from './styles'

const Header = ({ isAuth, onSetAuthorization, onCheckAvaliableToken }) => {
  const handleExit = () => {
    onSetAuthorization(false)
    cleanAllData()
  }

  useEffect(() => { onCheckAvaliableToken() })
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
  onSetAuthorization: PropTypes.func.isRequired,
  onCheckAvaliableToken: PropTypes.func.isRequired,
}

export default Header
