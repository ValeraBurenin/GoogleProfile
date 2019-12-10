import {
  SET_AUTH,
  SET_USER_INFO,
  SET_USER_CONTACTS,
  SET_STORAGE_CONTACTS,
  SET_STORAGE_USER_INFO,
} from '@/constants'

const initialState = {
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTH: {
      if (!action.payload) {
        return []
      } else {
        return {
          ...state, isAuth: action.payload,
        }
      }
    }
    case SET_USER_INFO: {
      return {
        ...state, userInfo: action.payload,
      }
    }
    case SET_USER_CONTACTS: return {
      ...state, userContacts: action.payload,
    }
    case SET_STORAGE_USER_INFO: return {
      ...state, userInfo: action.payload,
    }
    case SET_STORAGE_CONTACTS: return {
      ...state, userContacts: action.payload,
    }
    default: return state
  }
}
