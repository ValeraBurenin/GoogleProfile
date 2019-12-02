import React from 'react'
import { contactsPropType } from '@/prop-types'
import Wrapper from './styles'

const Friends = ({ contacts }) => (
  <Wrapper>
    {contacts.length === 0
      ? <h3>No any contacts</h3>
      : (
        <>
          <h3>Your contacts</h3>
          <ul>
            {contacts.map(({ id, title, phone }) => (
              <li key={id}>{title} <p>{phone}</p></li>
            ))}
          </ul>
        </>
      )}
  </Wrapper>
)

Friends.propTypes = {
  contacts: contactsPropType,
}

export default Friends
