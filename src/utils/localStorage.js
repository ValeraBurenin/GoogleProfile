export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, value)
}

export const getLocalStorage = value => {
  const storage = JSON.parse(localStorage.getItem(value))

  return storage
}

export const cleanLocalStorage = () => {
  return localStorage.clear()
}
