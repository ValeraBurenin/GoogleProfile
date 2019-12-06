import React, { useEffect } from 'react'
import Main from '@/components/blocks/Main'
import { PropTypes } from 'prop-types'
import { statePropType } from '@/prop-types'
import { NavLink } from 'react-router-dom'
import { LANDING_PAGE_PATH } from '@/constants'
import H3 from './styles'

import StandardLayout from '@/components/layouts'

const Landing = ({
  getUserData,
  state: {
    isAuth,
    requestError: { error, errorText },
    userInfo,
    userContacts,
  },
}) => {
  useEffect(() => {
    if (
      isAuth &&
      userContacts.length === 0 &&
      !userInfo.email
    ) {
      getUserData()
    }
  })
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

Landing.propTypes = {
  state: PropTypes.shape(statePropType),
  getUserData: PropTypes.func.isRequired,
}

Landing.defaultPorps = {
  errorText: '',
}

export default Landing
