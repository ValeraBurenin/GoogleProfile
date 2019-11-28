import React from 'react'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import { PropTypes } from 'prop-types'
import { childrenPropType } from '@/prop-types'

const StandardLayout = ({ children, isAuth, logOut }) => (
  <>
    <Header isAuth={isAuth} logOut={logOut} />
    <main>{children}</main>
    <Footer />
  </>
)

StandardLayout.propTypes = {
  children: childrenPropType,
  isAuth: PropTypes.bool,
  logOut: PropTypes.func,
}

export default StandardLayout
