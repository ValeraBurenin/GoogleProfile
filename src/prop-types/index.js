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

export const errorPropType = pt.shape({
  error: pt.bool.isRequired,
  errorText: pt.string.isRequired,
})

export const userInfoPropType = pt.shape({
  name: pt.string.isRequired,
  picture: pt.string.isRequired,
})
