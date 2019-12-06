import { cleanLocalStorage, setLocalStorage } from '@/utils'

export const getListContacts = (array = []) => {
  const contactsData = array.map(({ id, title, gd$phoneNumber }) => (
    { id: id.$t, title: title.$t, phone: gd$phoneNumber[0].$t }
  ))

  return contactsData
}

export const logOut = () => {
  cleanLocalStorage()
  document.cookie = 'token=; path=/; expires=-1'
}

export const storageAuthenticated = () => {
  const auth = Boolean(localStorage.getItem('auth'))

  return auth || false
}

export const ContactsToStorage = value => {
  setLocalStorage('contacts', JSON.stringify(value))
}

export const storageContacts = () => {
  try {
    const storage = JSON.parse(localStorage.getItem('contacts'))
    return storage || []
  } catch (error) {
    return new Error(error)
  }
}

export const userInfoToStorage = value => {
  setLocalStorage('userData', JSON.stringify(value))
}

export const storageUserInfo = () => {
  try {
    const storage = JSON.parse(localStorage.getItem('userData'))
    return storage || {}
  } catch (error) {
    return new Error(error)
  }
}
