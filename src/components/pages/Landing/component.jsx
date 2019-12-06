import React, { useEffect } from 'react'
import Main from '@/components/blocks/Main'
import { PropTypes } from 'prop-types'
import { NavLink } from 'react-router-dom'
import { LANDING_PAGE_PATH } from '@/constants'
import H3 from './styles'

import StandardLayout from '@/components/layouts'

const Landing = ({
  getUserData,
  isAuth,
  fetchError,
  errorText,
  userName,
}) => {
  useEffect(() => {
    if (
      isAuth &&
      !userName
    ) {
      getUserData()
    }
  })
  return userName && !fetchError ? (
    <StandardLayout>
      <Main />
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
  fetchError: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  userName: PropTypes.string,
}

Landing.defaultProps = {
  userName: '',
}

export default Landing
