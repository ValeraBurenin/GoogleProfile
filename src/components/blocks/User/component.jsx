import React from 'react'
import { PropTypes } from 'prop-types'
import { Wrapper, AntAvatar } from './styles'
import { DEFAULT_LOGO } from '@/constants'
// import { Avatar } from 'antd'

const User = ({ picture, name }) => (
  <Wrapper>
    <AntAvatar className="avatar" src={picture} />
    <div>
      <h2>{name}</h2>
    </div>
  </Wrapper>
)

User.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

User.defaultProps = {
  picture: DEFAULT_LOGO,
  name: '',
}

export default User
