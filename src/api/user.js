import { getUserToken } from '@/utils'

const recieveUserInfo = token => {
  return 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token + '&alt=json'
}

export const requestUserInfo = () => {
  return fetch(recieveUserInfo(getUserToken()))
    .then(response => response.json())
}

export const requestUserContacts = value => {
  function recieveContacts () {
    function * getContacts () {
      yield 'https://www.google.com/m8/feeds/contacts/'
      yield value
      yield '/full?access_token='
      yield getUserToken() + '&alt=json'
    }
    const numberGenerator = getContacts()
    let result = ''
    for (const itterator of numberGenerator) {
      result += itterator
    }
    return result
  }

  return fetch(recieveContacts())
    .then(response => response.json())
}
