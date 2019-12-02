import React, { Component } from 'react'
import { LANDING_PAGE_PATH } from '@/constants'
import { NavLink } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { getUserInfo, getUserContacts, getUserToken, saveUserInfo, saveUserContacts } from '@/utils'
import { requestUserInfo, requestUserContacts } from '@/api/user'
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

  componentDidMount () {
    if (
      this.state.auth &&
      this.state.userContacts.length === 0 &&
      !this.state.userInfo.email
    ) {
      (async () => {
        try {
          const userInfo = await requestUserInfo()
          saveUserInfo(userInfo)
          this.setState({ userInfo: userInfo })

          const userContacts = await requestUserContacts(this.state.userInfo.email)

          if (userContacts.feed.entry) {
            this.setState({ userContacts: userContacts.feed.entry })
            saveUserContacts(userContacts.feed.entry)
          } else {
            this.setState({ userContacts: [] })
          }
        } catch (error) {
          this.setState({ error: true })
        }
      })()
    }

    // if (
    //   true
    //   // this.state.auth &&
    //   // this.state.userContacts.length === 0 &&
    //   // !this.state.userInfo.email
    // ) {
    //   requestUserInfo()
    //     .then(response => {
    //       saveUserInfo(response)
    //       this.setState({ userInfo: response })
    //     })
    //     .then(() => {
    //       return requestUserContacts(this.state.userInfo.email)
    //     })
    //     .then(user => {
    //       if (user.feed.entry) {
    //         this.setState({ userContacts: user.feed.entry })
    //         // saveUserContacts(user.feed.entry)
    //       } else {
    //         this.setState({ userContacts: [] })
    //       }
    //     })
    //     .catch(() => {
    //       this.setState({ error: false })
    //     })
    // }
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
