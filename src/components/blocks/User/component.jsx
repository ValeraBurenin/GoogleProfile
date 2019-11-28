import React from 'react'
import { PropTypes } from 'prop-types'
import Wrapper from './styles'
import { defaultLogo } from '@/constants'

const User = ({ picture, name }) => (
  <Wrapper>
    <img src={picture} alt="logo" />
    <div>
      <h2>{name}</h2>
    </div>
  </Wrapper>
)

User.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
}

User.defaultProps = {
  picture: defaultLogo,
}

export default User
