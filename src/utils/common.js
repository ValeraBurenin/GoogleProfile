import { cleanLocalStorage, setCookie, getCookie, setLocalStorage, getLocalStorage } from '@/utils'

export const cleanAllData = () => {
  cleanLocalStorage()
  setCookie('token=; path=/; expires=-1')
}

export const saveUserData = (value, key) => {
  key ? setLocalStorage(value, key) : setCookie(value)
}

export const getUserData = value => {
  const result = document.cookie.includes(value)
    ? getCookie(value)
    : getLocalStorage(value)

  return result
}
