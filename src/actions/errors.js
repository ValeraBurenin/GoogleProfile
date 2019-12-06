import {
  PUSH_ERROR,
  ON_LOGIN_FAILURE,
} from '@/constants'

export const pushError = payload => ({ type: PUSH_ERROR, payload })
export const onLoginFailure = () => ({ type: ON_LOGIN_FAILURE })
