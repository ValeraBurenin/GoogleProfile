import React from 'react'
import { PropTypes } from 'prop-types'
import { contactsPropType } from '@/prop-types'

import User from '../User'
import Friends from '../Friends'

const Main = ({ contacts, userInfo: { name, picture } }) => (
  <main>
    <User name={name} picture={picture} />
    <Friends contacts={contacts} />
  </main>
)

Main.propTypes = {
  contacts: contactsPropType,
  userInfo: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
  }),
}

Main.defaultProps = {
  userInfo: {
    name: '',
    picture: '',
  },
}

export default Main
