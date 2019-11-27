import React from 'react'
import { arrayPropType } from '@/prop-types'
import Wrapper from './styles'

const Friends = ({ userContacts }) => (
  <Wrapper>
    <h3>Мои контакты</h3>
    {userContacts && (
      <ul>
        {userContacts.map(({ id, title, gd$phoneNumber }) => (
          <li key={id.$t}>{title.$t} <p>{gd$phoneNumber[0].$t}</p></li>
        ))}
      </ul>
    )}
  </Wrapper>
)

Friends.propTypes = {
  userContacts: arrayPropType,
}

export default Friends
