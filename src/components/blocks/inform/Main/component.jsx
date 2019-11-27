import React from 'react'
import { stringPropType, arrayPropType } from '@/prop-types'
import { defaultLogo } from '@/constants'

import User from './User'
import Friends from './Friends'

const Main = ({ userContacts, userName, userPicture }) => {
  return (
    <main>
      <User userName={userName} userPicture={userPicture} />
      <Friends userContacts={userContacts} />
    </main>
  )
}

Main.propTypes = {
  userName: stringPropType,
  userContacts: arrayPropType,
  userPicture: stringPropType,
}

Main.defaultProps = {
  userName: 'Имя Фамилия',
  userPicture: defaultLogo,
}

export default Main
