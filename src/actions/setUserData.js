import { SET_REQUEST_ERROR, SET_AUTH, SET_USER_INFO, SET_USER_CONTACTS } from '@/constants'

export const sendErrorToState = payload => ({ type: SET_REQUEST_ERROR, payload })
export const setAuthorization = payload => ({ type: SET_AUTH, payload })
export const userInfoToStore = payload => ({ type: SET_USER_INFO, payload })
export const userContactsToStore = payload => ({ type: SET_USER_CONTACTS, payload })
