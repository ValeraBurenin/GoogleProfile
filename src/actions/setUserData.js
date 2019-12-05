import { PUSH_ERROR, SET_AUTH, SET_USER_INFO, SET_USER_CONTACTS, GET_USER_DATA, SET_USER_AUTHENTICATED } from '@/constants'

export const pushError = payload => ({ type: PUSH_ERROR, payload })
export const setAuthorization = payload => ({ type: SET_AUTH, payload })
export const userInfoToStore = payload => ({ type: SET_USER_INFO, payload })
export const userContactsToStore = payload => ({ type: SET_USER_CONTACTS, payload })
export const getUserData = () => ({ type: GET_USER_DATA })
export const setUserAuthenticated = payload => ({ type: SET_USER_AUTHENTICATED, payload })
