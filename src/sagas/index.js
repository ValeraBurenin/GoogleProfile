import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_USER_DATA, SET_USER_AUTHENTICATED } from '@/constants'
import { requestUserInfo, requestUserContacts } from '@/api/user'
import { pushError, userInfoToStore, userContactsToStore, setAuthorization } from '@/actions'
import { saveUserToken } from '@/utils'

function * getUserData () {
  try {
    const userInfo = yield call(requestUserInfo)
    const userContacts = yield call(requestUserContacts)
    yield put(userInfoToStore(userInfo))
    yield put(userContactsToStore(userContacts))
  } catch (error) {
    yield put(pushError({ error: true, errorText: error }))
  }
}

function * setUserAuthenticated (token) {
  yield saveUserToken(token)
  yield localStorage.setItem('auth', true)
  yield put(setAuthorization(true))
}

function * rootSaga () {
  yield takeEvery(GET_USER_DATA, getUserData)
  yield takeEvery(SET_USER_AUTHENTICATED, setUserAuthenticated)
}

export default rootSaga
