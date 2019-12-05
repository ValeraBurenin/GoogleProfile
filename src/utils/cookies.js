export const isToken = () => (document.cookie.match(/(token)(.+)\1/))

export const saveUserToken = token => {
  const result = document.cookie = `token=${token.payload._token.accessToken}token; max-age=7200`

  return result
}

export const getUserToken = () => {
  const cookie = document.cookie.substring(document.cookie.indexOf('token=') +
  6, document.cookie.lastIndexOf('token'))

  return cookie
}

export const token = getUserToken()
