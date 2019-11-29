export const setCookie = value => {
  const cookie = document.cookie = `${value}; max-age=7200`
  return cookie
}

export const getCookie = value => {
  const cookie = document.cookie.substring(document.cookie.indexOf(`${value}=`) +
  value.length + 1, document.cookie.lastIndexOf(`${value}`))

  return cookie
}
