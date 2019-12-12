import {
  PUSH_ERROR,
  PULL_ERROR,
} from '@/constants'

export const pushError = errorText => ({ type: PUSH_ERROR, payload: errorText })
export const pullError = errorId => ({ type: PULL_ERROR, payload: errorId })
