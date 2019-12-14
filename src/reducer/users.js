import {
  SET_AUTH,
  SET_USER_CONTACTS,
  SET_USER_INFO,
} from '@/constants'

const initialState = {
  isAuth: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTH: return {
      ...state,
      isAuth: action.payload,
    }
    case SET_USER_CONTACTS: return {
      ...state,
      userContacts: action.payload,
    }
    case SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload,
      }
    }
    default: return state
  }
}
