import { requestUserInfo, requestUserContacts } from '@/api/user'
import { sendErrorToState, userInfoToStore, userContactsToStore } from '@/actions'
import { saveUserInfo, saveUserContacts } from '@/utils'

export const getUserData = () => dispatch => {
  Promise.all([
    requestUserInfo(),
    requestUserContacts(),
  ])
    .then(response => {
      const [userInfo, userContacts] = response
      dispatch(userInfoToStore(userInfo))
      dispatch(userContactsToStore(userContacts))
      saveUserInfo(userInfo)
      saveUserContacts(userContacts)
    })
    .catch(error => {
      dispatch(sendErrorToState({ error: true, errorText: error }))
    })
}
