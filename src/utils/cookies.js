function getCookie (value) {
  const cookie =
    document.cookie.substring(document.cookie.indexOf(`${value}=`) +
    value.length + 1, document.cookie.lastIndexOf(value))

  return cookie
}

function saveCookie (value, key) {
  const cookie = document.cookie = `${value}=${key}${value}; max-age=7200`

  return cookie
}

function deleteCookie (value) {
  const cookie = document.cookie = `${value}=; path=/; expires=-1`

  return cookie
}

export const cleanCookies = () => {
  deleteCookie('token')
  deleteCookie('name')
  deleteCookie('picture')
}

export const saveUserInfo = value => {
  const token = saveCookie('token', value.payload._token.accessToken)
  const userName = saveCookie('name', value.payload._profile.name)
  const picture = saveCookie('picture', value.payload._profile.profilePicURL)
  return [token, userName, picture]
}

export const getUserInfo = () => {
  const name = getCookie('name')
  const picture = getCookie('picture')

  return { name, picture }
}

export const getUserToken = () => getCookie('token')

export const isToken = () => (document.cookie.match(/(token)(.+)\1/))
