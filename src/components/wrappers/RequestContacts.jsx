import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserContacts } from '@/actions'
import { PropTypes } from 'prop-types'

export default function RequestContacts (Landing) {
  function LandingWrapper ({ isAuth, getUserContacts }) {
    useEffect(() => {
      isAuth && getUserContacts()
    })

    return <Landing />
  }

  const mapStateToProps = state => ({
    isAuth: state.userData.isAuth,
  })

  const mapDispatchToProps = dispatch => {
    return {
      getUserContacts: () => {
        dispatch(getUserContacts())
      },
    }
  }

  LandingWrapper.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    getUserContacts: PropTypes.func.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(LandingWrapper)
}
