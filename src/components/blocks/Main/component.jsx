import React from 'react'
import { PropTypes } from 'prop-types'
import { contactsPropType, userInfoPropType } from '@/prop-types'

import User from '@/components/blocks/User'
import Friends from '@/components/blocks/Friends'

const Main = ({ contacts, userInfo: { name, picture } }) => (
  <main>
    <User name={name} picture={picture} />
    <Friends contacts={contacts} />
  </main>
)

Main.propTypes = {
  contacts: PropTypes.arrayOf(contactsPropType).isRequired,
  userInfo: userInfoPropType.isRequired,
}

export default Main
