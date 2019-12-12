import {
  getListContacts,
  getUserToken,
} from '@/utils'
import { USER_CONTACTS_API } from '@/constants'

export const requestUserContacts = () => {
  return fetch(`${USER_CONTACTS_API}${getUserToken()}`)
    .then(response => response.json())
    .then(response => getListContacts(response.feed.entry))
}
