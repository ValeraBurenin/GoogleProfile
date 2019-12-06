import {
  PUSH_ERROR,
  ON_LOGIN_FAILURE,
  SET_AUTH,
} from '@/constants'

const initialState = {
  fetchError: false,
  loginErrror: false,
  errorText: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PUSH_ERROR: return {
      ...state, requestError: action.payload,
    }
    case ON_LOGIN_FAILURE: return {
      ...state, loginErrror: true,
    }
    case SET_AUTH: {
      if (!action.payload) {
        return {
          ...state,
          loginErrror: false,
        }
      } else {
        return state
      }
    }
    default: return state
  }
}
