import React, { Component } from 'react'
import { LANDING_PAGE_PATH } from '@/constants'
import { NavLink } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { getUserInfo, getUserContacts, getUserToken, saveUserInfo, saveUserContacts } from '@/utils'
import { requestUserInfo, requestUserContacts } from '@/api/user'
import * as waterfall from 'promise-waterfall'
import H3 from './styles'

import StandardLayout from '@/components/layouts'
import Main from '@/components/blocks/Main'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: getUserToken(),
      userContacts: getUserContacts(),
      userInfo: getUserInfo(),
      auth: props.isAuth,
      error: false,
    }
  }

  UserInfoToState = response => {
    this.setState({ userInfo: response })
    saveUserInfo(response)
  }

  getUserContacts = () => {
    return requestUserContacts(this.state.userInfo.email)
  }

  UserContactsToState = user => {
    if (user) {
      this.setState({ userContacts: user })
      saveUserContacts(user)
    } else {
      this.setState({ userContacts: [] })
    }
  }

  componentDidMount () {
    waterfall([
      requestUserInfo,
      this.UserInfoToState,
      this.getUserContacts,
      this.UserContactsToState,
    ])
      .catch(() => {
        this.setState({ error: true })
      })
  }

  render () {
    const { logOut, isAuth } = this.props
    return this.state.auth && !this.state.error ? (
      <StandardLayout logOut={logOut} isAuth={isAuth}>
        <Main
          contacts={this.state.userContacts}
          userInfo={this.state.userInfo} />
      </StandardLayout>
    )
      : (
        <StandardLayout>
          <H3>
          Error in data request{' '}
            <NavLink to={LANDING_PAGE_PATH}>Update page?</NavLink>
          </H3>
        </StandardLayout>
      )
  }
}

Layout.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
}

export default Layout
