import { all } from 'redux-saga/effects'

import userSaga from './userSaga'
import errorSaga from './errorSaga'

function * rootSaga () {
  yield all([
    userSaga(),
    errorSaga(),
  ])
}

export default rootSaga
