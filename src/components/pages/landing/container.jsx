import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { getUserData } from '@/thunk'
import { getUserData } from '@/actions'
import { PropTypes } from 'prop-types'
import { statePropType } from '@/prop-types'
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
  return <Layout
    userContacts={userContacts}
    userInfo={userInfo}
    isAuth={isAuth}
    error={error}
    errorText={errorText} />
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
