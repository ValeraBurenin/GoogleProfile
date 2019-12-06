import React from 'react'
import { PropTypes } from 'prop-types'
import Wrapper from './styles'

const User = ({ picture, name }) => (
  <Wrapper>
    <img src={picture} alt="logo" />
    <div>
      <h2>{name}</h2>
    </div>
  </Wrapper>
)

User.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default User
