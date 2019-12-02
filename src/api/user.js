import { getUserToken, getListContacts } from '@/utils'
import { USER_INFO_URL, PARAM_JSON, USER_CONTACTS_URL, PARAM_ACCESS_TOKEN } from '@/constants'

const getUserInfoUrl = token => {
  return USER_INFO_URL + token + PARAM_JSON
}

export const requestUserInfo = () => {
  return fetch(getUserInfoUrl(getUserToken()))
    .then(response => response.json())
    .catch(error => {
      throw new Error(error)
    })
}

export const requestUserContacts = value => {
  function getUserContactsUrl () {
    return USER_CONTACTS_URL + value + PARAM_ACCESS_TOKEN + getUserToken() + PARAM_JSON
  }

  return fetch(getUserContactsUrl())
    .then(response => response.json())
    .then(response => {
      if (response.feed.entry) {
        return getListContacts(response.feed.entry)
      } else {
        return []
      }
    })
    .catch(error => {
      throw new Error(error)
    })
}
