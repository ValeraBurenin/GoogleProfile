import { getListContacts, getUserToken } from '@/utils'
import { USER_INFO_API, USER_CONTACTS_API } from '@/constants'
import { pushError } from '@/actions'

export const requestUserInfo = () => {
  return fetch(`${USER_INFO_API}${getUserToken()}`)
    .then(response => response.json())
    .catch(error => pushError(error.message ||
      'Sorry, the user\'s information was not received. Please try later.'))
}

export const requestUserContacts = () => {
  return fetch(`${USER_CONTACTS_API}${getUserToken()}`)
    .then(response => response.json())
    .then(response => getListContacts(response.feed.entry))
    .catch(error => pushError(error.message ||
      'Sorry, the user\'s contacts was not recieved. Please try later.'))
}
