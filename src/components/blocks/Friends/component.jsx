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
            {getList(contacts)}
          </ul>
        </>
      )}
  </Wrapper>
)

Friends.propTypes = {
  contacts: PropTypes.array,
}

export default Friends
