import { combineReducers } from 'redux'

import userData from './users'
import errors from './errors'

export default combineReducers({
  userData, errors,
})
