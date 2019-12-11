import React from 'react'
import { PropTypes } from 'prop-types'
import UserBlock from './styles'

const User = ({ picture, name }) => (
  <UserBlock>
    <img src={picture} alt="logo" />
    <div>
      <h2>{name}</h2>
    </div>
  </UserBlock>
)

User.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default User
