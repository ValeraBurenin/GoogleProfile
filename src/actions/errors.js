import {
  INIT_ERROR,
  PUSH_ERROR,
  PULL_ERROR,
} from '@/constants'

export const initError = payload => ({ type: INIT_ERROR, payload })
export const pushError = payload => ({ type: PUSH_ERROR, payload })
export const pullError = () => ({ type: PULL_ERROR })
