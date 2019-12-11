import {
  PUSH_ERROR,
  PULL_ERROR,
} from '@/constants'

const initialState = [

]

export default function (state = initialState, action) {
  switch (action.type) {
    case PUSH_ERROR: {
      const [...newState] = state
      newState.push(action.payload)
      return newState
    }
    case PULL_ERROR: {
      return []
    }
    default: return state
  }
}
