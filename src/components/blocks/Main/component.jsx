import React from 'react'
import { PropTypes } from 'prop-types'

import User from '../User'
import Friends from '../Friends'

const Main = ({ contacts, userInfo }) => (
  <main>
    <User name={userInfo.name} picture={userInfo.picture} />
    <Friends contacts={contacts} />
  </main>
)

Main.propTypes = {
  contacts: PropTypes.array,
  userInfo: PropTypes.object,
}

export default Main
