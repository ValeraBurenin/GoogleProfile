import {
  PUSH_ERROR,
  PULL_ERROR,
} from '@/constants'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case PUSH_ERROR: {
      return state.concat(
        {
          id: action.id,
          name: action.payload,
        },
      )
    }
    case PULL_ERROR: {
      return state.filter(error => {
        return error.id !== action.payload
      })
    }
    default: return state
  }
}
