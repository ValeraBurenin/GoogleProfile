import React, { Component } from 'react'
import { LANDING_PAGE_PATH, indentToTotek } from '@/constants'
import { NavLink } from 'react-router-dom'
import { boolPropType } from '@/prop-types'
import H3 from './styles'

import Main from '@/components/blocks/inform/Main'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: document.cookie.includes('token=id')
        ? document.cookie.substring(
          document.cookie.search('token=id') + indentToTotek,
          document.cookie.search('tokenend'),
        )
        : '',
      userContacts: JSON.parse(localStorage.getItem('contacts')) || [],
      userInfo: JSON.parse(localStorage.getItem('userData')) || [],
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
          localStorage.setItem('userData', JSON.stringify(response))
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
          console.log(user)
          user.feed.entry
            ? localStorage.setItem('contacts', JSON.stringify(user.feed.entry))
            : this.setState({ userContacts: user.feed.entry })

          this.setState({ userContacts: user.feed.entry })
        })
        .catch(() => {
          this.setState({ error: true })
        })
    }
  }

  render () {
    return this.state.auth && !this.state.error ? (
      <Main
        userContacts={this.state.userContacts}
        userName={this.state.userInfo.name}
        userPicture={this.state.userInfo.picture} />
    )
      : (
        <H3>
          Ошибка в запросе на получение данных.{' '}
          <NavLink to={LANDING_PAGE_PATH}>Обновить страницу?</NavLink>
        </H3>
      )
  }
}

Layout.propTypes = {
  isAuth: boolPropType,
}

export default Layout
