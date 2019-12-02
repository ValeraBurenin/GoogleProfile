import React from 'react'
import { PropTypes } from 'prop-types'

import User from '../User'
import Friends from '../Friends'

const Main = ({ contacts, userInfo: { name, picture } }) => {
  return (
    <main>
      <User name={name} picture={picture} />
      <Friends contacts={contacts} />
    </main>
  )
}

Main.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.shape({
      $t: PropTypes.string.isRequired,
    }),
    title: PropTypes.shape({
      $t: PropTypes.string.isRequired,
    }),
    gd$phoneNumber: PropTypes.arrayOf(PropTypes.shape({
      $t: PropTypes.string.isRequired,
    })),
  })),
  userInfo: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
  }),
}

Main.defaultProps = {
  name: '',
  picture: '',
}

export default Main
