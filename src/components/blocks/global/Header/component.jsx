import React from 'react'
import { NavLink } from 'react-router-dom'
import { LANDING_PAGE_PATH } from '@/constants'
import { boolPropType, funcPropType } from '@/prop-types'
import Wrapper from './styles'

const Header = ({ isAuth, changeAuth }) => {
  const handleExit = () => {
    localStorage.clear()
    document.cookie = 'token=; path=/; expires=-1'
    changeAuth(false)
  }

  return (
    <Wrapper>
      <h1>
        <NavLink to={LANDING_PAGE_PATH} exact>Google Profile</NavLink>
      </h1>
      {
        isAuth
          ? (<NavLink to={LANDING_PAGE_PATH} onClick={handleExit}>Выйти</NavLink>)
          : (<NavLink to={LANDING_PAGE_PATH} exact>Войти</NavLink>)
      }
    </Wrapper>
  )
}

Header.propTypes = {
  isAuth: boolPropType,
  changeAuth: funcPropType,
}

Header.defaultPrors = {
  changeAuth: function f () {},
}

export default Header
