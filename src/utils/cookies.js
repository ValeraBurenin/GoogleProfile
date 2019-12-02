import { cleanAllData } from '@/utils'

export const checkAvaliableToken = () => {
  !document.cookie.includes('token') && cleanAllData()
}

export const saveUserToken = token => {
  const result = document.cookie = `token=${token._token.accessToken}token; max-age=7200`

  return result
}

export const getUserToken = () => {
  const cookie = document.cookie.substring(document.cookie.indexOf('token=') +
  6, document.cookie.lastIndexOf('token'))

  return cookie
}
