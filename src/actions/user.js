import {
  SET_AUTH,
  SET_USER_CONTACTS,
  GET_USER_CONTACTS,
  SET_USER_AUTHENTICATED,
  VALIDATE_USER_TOKEN,
  SET_USER_INFO,
  LOG_OUT,
} from '@/constants'

export const setAuthorization = payload => ({ type: SET_AUTH, payload })
export const logOut = () => ({ type: LOG_OUT })
export const userInfoToStore = payload => ({ type: SET_USER_INFO, payload })
export const contactsToStore = payload => ({ type: SET_USER_CONTACTS, payload })
export const setUserAuthenticated = payload => ({ type: SET_USER_AUTHENTICATED, payload })
export const getUserContacts = () => ({ type: GET_USER_CONTACTS })
export const validateUserToken = () => ({ type: VALIDATE_USER_TOKEN })
