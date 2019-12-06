import {
  SET_AUTH,
  SET_USER_INFO,
  SET_USER_CONTACTS,
  GET_USER_DATA,
  SET_USER_AUTHENTICATED,
  VALIDATE_USER_TOKEN,
} from '@/constants'

export const setAuthorization = payload => ({ type: SET_AUTH, payload })
export const userInfoToStore = payload => ({ type: SET_USER_INFO, payload })
export const userContactsToStore = payload => ({ type: SET_USER_CONTACTS, payload })
export const getUserData = () => ({ type: GET_USER_DATA })
export const setUserAuthenticated = payload => ({ type: SET_USER_AUTHENTICATED, payload })
export const validateUserToken = () => ({ type: VALIDATE_USER_TOKEN })
