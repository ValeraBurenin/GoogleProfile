import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects'
import {
  GET_USER_CONTACTS,
  SET_USER_AUTHENTICATED,
  VALIDATE_USER_TOKEN,
  LOG_OUT,
} from '@/constants'
import { requestUserContacts } from '@/api/user'
import {
  pushError,
  setUserContacts,
  setAuthorization,
  setUserInfo,
} from '@/actions'
import {
  saveUserInfo,
  isToken,
  getUserInfo,
  cleanCookies,
} from '@/utils'

function * getContacts () {
  try {
    const userContacts = yield call(requestUserContacts)
    yield put(setUserContacts(userContacts))
  } catch (error) {
    yield put(pushError(error.message || error))
  }
}

function * setUserAuthenticated (token) {
  saveUserInfo(token)
  yield put(setUserInfo(getUserInfo()))
  yield put(setAuthorization(true))
}

function * validateUserToken () {
  if (isToken()) {
    yield put(setAuthorization(true))
    yield put(setUserInfo(getUserInfo()))
  } else {
    yield put(setAuthorization(false))
  }
}

function * logOut () {
  cleanCookies()
  yield put(setAuthorization(false))
}

function * rootSaga () {
  yield takeEvery(GET_USER_CONTACTS, getContacts)
  yield takeEvery(SET_USER_AUTHENTICATED, setUserAuthenticated)
  yield takeEvery(VALIDATE_USER_TOKEN, validateUserToken)
  yield takeEvery(LOG_OUT, logOut)
}

export default rootSaga
