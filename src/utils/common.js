import { cleanLocalStorage, setLocalStorage } from '@/utils'

export const getListContacts = array => {
  if (array === undefined) {
    return []
  }

  const contactsData = array.map(({ id, title, gd$phoneNumber }) => (
    { id: id.$t, title: title.$t, phone: gd$phoneNumber[0].$t }
  ))

  return contactsData
}

export const cleanAllData = () => {
  cleanLocalStorage()
  document.cookie = 'token=; path=/; expires=-1'
}

export const getUserAuthenticated = () => {
  const auth = Boolean(localStorage.getItem('auth'))

  return auth || false
}

export const saveUserContacts = value => {
  setLocalStorage('contacts', JSON.stringify(value))
}

export const getUserContacts = () => {
  try {
    const storage = JSON.parse(localStorage.getItem('contacts'))
    return storage || []
  } catch (error) {
    return new Error(error)
  }
}

export const saveUserInfo = value => {
  setLocalStorage('userData', JSON.stringify(value))
}

export const getUserInfo = () => {
  try {
    const storage = JSON.parse(localStorage.getItem('userData'))
    return storage || {}
  } catch (error) {
    return new Error(error)
  }
}
