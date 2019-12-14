import {
  SET_AUTH,
  SET_USER_CONTACTS,
  GET_USER_CONTACTS,
  SET_USER_AUTHENTICATED,
  VALIDATE_USER_TOKEN,
  SET_USER_INFO,
  LOG_OUT,
} from '@/constants'

export const setAuthorization = bool => ({ type: SET_AUTH, payload: bool })
export const logOut = () => ({ type: LOG_OUT })
export const setUserInfo = userInfo => ({ type: SET_USER_INFO, payload: userInfo })
export const setUserContacts = contacts => ({ type: SET_USER_CONTACTS, payload: contacts })
export const setUserAuthenticated = bool => ({ type: SET_USER_AUTHENTICATED, payload: bool })
export const getUserContacts = () => ({ type: GET_USER_CONTACTS })
export const validateUserToken = () => ({ type: VALIDATE_USER_TOKEN })
