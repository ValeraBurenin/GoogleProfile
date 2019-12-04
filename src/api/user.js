import { getListContacts, getUserToken } from '@/utils'
import { USER_INFO_API, USER_CONTACTS_API } from '@/constants'

export const requestUserInfo = () => {
  return fetch(`${USER_INFO_API}${getUserToken()}`)
    .then(response => response.json())
    .catch(() => {
      throw new Error("An error occurred while processing the user's data.")
    },
    )
}

export const requestUserContacts = () => {
  return fetch(`${USER_CONTACTS_API}${getUserToken()}`)
    .then(response => response.json())
    .then(response => response.feed.entry ? getListContacts(response.feed.entry) : [],
    )
    .then(response => {
      return response
    })
    .catch(() => {
      throw new Error("An error occurred while processing the user's contacts.")
    })
}
