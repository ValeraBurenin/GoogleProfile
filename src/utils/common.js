import { cleanLocalStorage, setLocalStorage } from '@/utils'

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
  const storage = JSON.parse(localStorage.getItem('contacts'))

  return storage || []
}

export const saveUserInfo = value => {
  setLocalStorage('userData', JSON.stringify(value))
}

export const getUserInfo = () => {
  const storage = JSON.parse(localStorage.getItem('userData'))

  return storage || {}
}
