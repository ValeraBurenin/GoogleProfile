import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_USER_DATA, SET_USER_AUTHENTICATED, VALIDATE_USER_TOKEN } from '@/constants'
import { requestUserInfo, requestUserContacts } from '@/api/user'
import { pushError, userInfoToStore, userContactsToStore, setAuthorization } from '@/actions'
import { saveUserToken, logOut, isToken, userInfoToStorage, ContactsToStorage } from '@/utils'

function * getUserData () {
  try {
    const userInfo = yield call(requestUserInfo)
    const userContacts = yield call(requestUserContacts)
    userInfoToStorage(userInfo)
    ContactsToStorage(userContacts)
    yield put(userInfoToStore(userInfo))
    yield put(userContactsToStore(userContacts))
  } catch (error) {
    yield put(pushError({ error: true, errorText: error }))
  }
}

function * setUserAuthenticated (token) {
  yield saveUserToken(token)
  yield put(setAuthorization(true))
}

function * validateUserToken () {
  yield isToken() ? put(setAuthorization(true)) : logOut()
}

function * rootSaga () {
  yield takeEvery(GET_USER_DATA, getUserData)
  yield takeEvery(SET_USER_AUTHENTICATED, setUserAuthenticated)
  yield takeEvery(VALIDATE_USER_TOKEN, validateUserToken)
}

export default rootSaga
