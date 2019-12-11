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
  contactsToStore,
  setAuthorization,
  userInfoToStore,
  initError,
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
    yield put(contactsToStore(userContacts))
  } catch (error) {
    yield put(initError(error))
  }
}

function * setUserAuthenticated (token) {
  yield saveUserInfo(token)
  yield put(userInfoToStore(getUserInfo()))
  yield put(setAuthorization(true))
}

function * validateUserToken () {
  if (isToken()) {
    yield put(setAuthorization(true))
    yield put(userInfoToStore(getUserInfo()))
  }
}

function * logOut () {
  yield cleanCookies()
  yield put(setAuthorization(false))
}

function * userSaga () {
  yield takeEvery(GET_USER_CONTACTS, getContacts)
  yield takeEvery(SET_USER_AUTHENTICATED, setUserAuthenticated)
  yield takeEvery(VALIDATE_USER_TOKEN, validateUserToken)
  yield takeEvery(LOG_OUT, logOut)
}

export default userSaga
