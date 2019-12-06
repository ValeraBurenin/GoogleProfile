import { SET_AUTH, SET_USER_INFO, SET_USER_CONTACTS } from '@/constants'
import { storageAuthenticated, storageUserInfo, storageContacts } from '@/utils'

const initialState = {
  isAuth: storageAuthenticated(),
  userInfo: storageUserInfo(),
  userContacts: storageContacts(),
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTH: {
      if (!action.payload) {
        return {
          ...state,
          isAuth: action.payload,
          userInfo: { ...state.userInfo, name: '', picture: '' },
          userContacts: [],
        }
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
    default: return state
  }
}
