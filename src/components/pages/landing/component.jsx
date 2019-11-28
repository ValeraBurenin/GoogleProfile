import React, { Component } from 'react'
import { LANDING_PAGE_PATH, indentToToken } from '@/constants'
import { NavLink } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import H3 from './styles'

import StandardLayout from '@/components/layouts'
import Main from '@/components/blocks/Main'
import { getLocalStorage, setLocalStorage } from '@/utils'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: document.cookie.includes('token=id')
        ? document.cookie.substring(
          document.cookie.search('token=id') + indentToToken,
          document.cookie.search('tokenend'),
        )
        : '',
      userContacts: JSON.parse(getLocalStorage('contacts')) || [],
      userInfo: JSON.parse(getLocalStorage('userData')) || {},
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
      const firstFetch = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + this.state.token + '&alt=json'

      fetch(firstFetch)
        .then(response => response.json())
        .then(response => {
          setLocalStorage('userData', JSON.stringify(response))
          this.setState({ userInfo: response })
        })
        .then(() => {
          if (this.state.userInfo.email) {
            const secondFetch = 'https://www.google.com/m8/feeds/contacts/' + this.state.userInfo.email + '/full?access_token=' + this.state.token + '&alt=json'

            return fetch(secondFetch, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
          }
        },
        )
        .then(user => user.json())
        .then(user => {
          if (user.feed.entry) {
            this.setState({ userContacts: user.feed.entry })
            setLocalStorage('contacts', JSON.stringify(user.feed.entry))
          } else {
            this.setState({ userContacts: [] })
          }
        })
        .catch(() => {
          this.setState({ error: true })
        })
    }
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
  isAuth: PropTypes.bool,
  logOut: PropTypes.func,
}

export default Layout
