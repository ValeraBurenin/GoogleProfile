import React from 'react'
import { PropTypes } from 'prop-types'
import { contactsPropType, userInfoPropType } from '@/prop-types'

import User from '../User'
import Friends from '../Friends'

const Main = ({ contacts, userInfo: { name, picture } }) => (
  <main>
    <User name={name} picture={picture} />
    <Friends contacts={contacts} />
  </main>
)

Main.propTypes = {
  contacts: PropTypes.arrayOf(contactsPropType),
  userInfo: userInfoPropType,
}

Main.defaultProps = {
  userInfo: {
    name: '',
    picture: '',
  },
}

export default Main
