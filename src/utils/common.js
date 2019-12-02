import { cleanLocalStorage, setLocalStorage } from '@/utils'

export const getListContacts = array => {
  const contactsData = array.map(({ id, title, gd$phoneNumber }) => (
    { id: id.$t, title: title.$t, phone: gd$phoneNumber[0].$t }
  ))

  return contactsData
}

export const cleanAllData = () => {
  cleanLocalStorage()
  document.cookie = 'token=; path=/; expires=-1'
}

export const setUserAuthenticated = value => {
  return localStorage.setItem('auth', value)
}

export const getUserAuthenticated = () => {
  const auth = Boolean(localStorage.getItem('auth'))

  return auth
}

export const saveUserContacts = value => {
  setLocalStorage('contacts', JSON.stringify(value))
}

export const getUserContacts = () => {
  try {
    const storage = JSON.parse(localStorage.getItem('contacts'))
    return storage || []
  } catch {
    return new Error("error in obtaining user's information")
  }
}

export const saveUserInfo = value => {
  setLocalStorage('userData', JSON.stringify(value))
}

export const getUserInfo = () => {
  try {
    const storage = JSON.parse(localStorage.getItem('userData'))
    return storage || {}
  } catch {
    return new Error("error in obtaining user's contacts")
  }
}
