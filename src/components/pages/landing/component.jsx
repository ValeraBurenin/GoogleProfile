import React from 'react'
import Main from '@/components/blocks/Main'
import { PropTypes } from 'prop-types'
import { contactsPropType, userInfoPropType } from '@/prop-types'

const Layout = ({ userContacts, userInfo }) => {
  return (<Main
    contacts={userContacts}
    userInfo={userInfo} />
  )
}

Layout.propTypes = {
  userContacts: PropTypes.arrayOf(contactsPropType),
  userInfo: userInfoPropType,
}

Layout.defaultProps = {
  userInfo: {
    name: '',
    picture: '',
  },
}

export default Layout
