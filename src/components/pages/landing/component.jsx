import React from 'react'
import Main from '@/components/blocks/Main'
import { PropTypes } from 'prop-types'
import { contactsPropType, userInfoPropType } from '@/prop-types'
import { NavLink } from 'react-router-dom'
import { LANDING_PAGE_PATH } from '@/constants'
import H3 from './styles'

import StandardLayout from '@/components/layouts'

const Layout = ({ userContacts, userInfo, isAuth, error, errorText }) => {
  return isAuth && !error ? (
    <StandardLayout>
      <Main
        contacts={userContacts}
        userInfo={userInfo} />
    </StandardLayout>
  )
    : (
      <StandardLayout>
        <H3>
          {errorText}{' '}
          <NavLink to={LANDING_PAGE_PATH}>Update page?</NavLink>
        </H3>
      </StandardLayout>
    )
}

Layout.propTypes = {
  userContacts: PropTypes.arrayOf(contactsPropType),
  userInfo: userInfoPropType,
  isAuth: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
}

Layout.defaultPorps = {
  errorText: '',
}

export default Layout
