import React from 'react'
import Header from '@/components/blocks/global/Header'
import Footer from '@/components/blocks/global/Footer'
import { childrenPropType, boolPropType, funcPropType } from '@/prop-types'

const StandardLayout = ({ children, isAuth, changeAuth }) => (
  <>
    <Header isAuth={isAuth} changeAuth={changeAuth} />
    <main>{children}</main>
    <Footer />
  </>
)

StandardLayout.propTypes = {
  children: childrenPropType,
  isAuth: boolPropType,
  changeAuth: funcPropType,
}

export default StandardLayout
