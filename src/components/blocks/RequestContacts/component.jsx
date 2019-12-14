import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { childrenPropType } from '@/prop-types'

const LandingPage = ({ isAuth, getUserContacts, children }) => {
  useEffect(() => {
    isAuth && getUserContacts()
  })

  return (
    <>
      {children}
    </>
  )
}

LandingPage.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  getUserContacts: PropTypes.func.isRequired,
  children: childrenPropType.isRequired,
}

export default LandingPage
