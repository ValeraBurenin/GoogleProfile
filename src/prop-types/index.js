import pt from 'prop-types'

export const funcPropType = pt.func
export const stringPropType = pt.string
export const arrayPropType = pt.array
export const childrenPropType = pt.oneOfType([
  pt.string.isRequired,
  pt.element.isRequired,
])
export const boolPropType = pt.oneOfType([
  pt.string,
  pt.bool,
])
