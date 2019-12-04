import pt from 'prop-types'

export const childrenPropType = pt.oneOfType([
  pt.string.isRequired,
  pt.element.isRequired,
])

export const contactsPropType = pt.shape({
  id: pt.string.isRequired,
  title: pt.string.isRequired,
  phone: pt.string.isRequired,
})

export const userInfoPropType = pt.shape({
  name: pt.string,
  picture: pt.string,
})

export const statePropType = {
  requestError: pt.shape({
    error: pt.bool.isRequired,
    errorText: pt.string.isRequired,
  }),
  isAuth: pt.bool.isRequired,
  userContacts: pt.arrayOf(contactsPropType),
  userInfo: userInfoPropType,
}
