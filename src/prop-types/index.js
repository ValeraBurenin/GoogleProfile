import pt from 'prop-types'

export const childrenPropType = pt.oneOfType([
  pt.string.isRequired,
  pt.element.isRequired,
])

export const contactsPropType = pt.arrayOf(pt.shape({
  id: pt.string.isRequired,
  title: pt.string.isRequired,
  phone: pt.string.isRequired,
}))
