import React from 'react'
import { Route } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import Login from '@/components/pages/Login'

export default function withSecure (component) {
  function SecureWrapper ({ isAuth }) {
    const TargetComponent = isAuth ? component : Login

    return (
      <Route component={() => <TargetComponent />} />
    )
  }

  const mapStateToProps = state => {
    return {
      isAuth: state.userData.isAuth,
    }
  }

  SecureWrapper.propTypes = {
    isAuth: PropTypes.bool.isRequired,
  }

  return connect(mapStateToProps)(SecureWrapper)
}
