import React from 'react'
import { PropTypes } from 'prop-types'
import Wrapper from './styles'
import { getList } from '@/utils'

const Friends = ({ contacts }) => (
  <Wrapper>
    {contacts.length === 0
      ? <h3>No any contacts</h3>
      : (
        <>
          <h3>Your contacts</h3>
          <ul>
            {getList(contacts).map(({ id, title, phone }) => (
              <li key={id}>{title} <p>{phone}</p></li>
            ))}
          </ul>
        </>
      )}
  </Wrapper>
)

Friends.propTypes = {
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
}

export default Friends
