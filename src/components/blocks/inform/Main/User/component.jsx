import React from 'react'
import { stringPropType } from '@/prop-types'
import Wrapper from './styles'

const User = ({ userPicture, userName }) => (
  <Wrapper>
    <img src={userPicture} alt="logo" />
    <div>
      <h2>{userName}</h2>
    </div>
  </Wrapper>
)

User.propTypes = {
  userPicture: stringPropType,
  userName: stringPropType,
}

export default User
