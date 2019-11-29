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
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  userInfo: PropTypes.objectOf(contactsPropType).isRequired,
}

export default Main
