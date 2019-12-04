import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUserData } from '@/thunk/'
import { PropTypes } from 'prop-types'
import { statePropType } from '@/prop-types'
import { LANDING_PAGE_PATH } from '@/constants'
import H3 from './styles'

import StandardLayout from '@/components/layouts'
import Layout from '@/components/pages/landing/component'

const LayoutWrapper = ({
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
      <Layout
        userContacts={userContacts}
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

const mapStateToProps = state => {
  return {
    state: state.userData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => {
      dispatch(getUserData())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutWrapper)

LayoutWrapper.propTypes = {
  state: PropTypes.shape(statePropType),
  getUserData: PropTypes.func.isRequired,
}
