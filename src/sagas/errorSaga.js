import { takeEvery, put } from 'redux-saga/effects'
import { INIT_ERROR } from '@/constants'
import { pushError } from '@/actions'

function * initError (error) {
  error.payload.message
    ? yield put(pushError(error.payload.message))
    : yield put(pushError(error.payload))
}

function * errorSaga () {
  yield takeEvery(INIT_ERROR, initError)
}

export default errorSaga
