import React, { useEffect } from 'react'
import Main from '@/components/blocks/Main'
import { PropTypes } from 'prop-types'
import { errorPropType, userInfoPropType, contactsPropType } from '@/prop-types'
import { NavLink } from 'react-router-dom'
import { LANDING_PAGE_PATH, DEFAULT_LOGO } from '@/constants'
import H3 from './styles'

import StandardLayout from '@/components/layouts'

const Landing = ({
  getUserData,
  isAuth,
  requestError: {
    error,
    errorText,
  },
  userInfo,
  userContacts,
}) => {
  useEffect(() => {
    if (
      isAuth &&
      userContacts.length === 0 &&
      !userInfo.name
    ) {
      getUserData()
    }
  })
  return userInfo.picture && !error ? (
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

Landing.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  requestError: errorPropType.isRequired,
  getUserData: PropTypes.func.isRequired,
  userContacts: PropTypes.arrayOf(contactsPropType),
  userInfo: userInfoPropType,
}

Landing.defaultProps = {
  userContacts: [],
  userInfo: {
    name: '',
    picture: DEFAULT_LOGO,
  },
}

export default Landing
