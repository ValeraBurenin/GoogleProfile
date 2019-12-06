import { PUSH_ERROR, SET_AUTH, SET_USER_INFO, SET_USER_CONTACTS } from '@/constants'
import { getUserAuthenticated } from '@/utils/common'

const initialState = {
  requestError: {
    error: false,
    errorText: '',
  },
  isAuth: getUserAuthenticated(),
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PUSH_ERROR: return {
      ...state, requestError: action.payload,
    }
    case SET_AUTH: return {
      ...state, isAuth: action.payload,
    }
    case SET_USER_INFO: return {
      ...state, userInfo: action.payload,
    }
    case SET_USER_CONTACTS: return {
      ...state, userContacts: action.payload,
    }
    default: return state
  }
}
