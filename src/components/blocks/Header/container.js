import { connect } from 'react-redux'
import { setAuthorization, validateUserToken, validateStorage } from '@/actions'

import Header from './component'

const mapStateToProps = state => ({
  isAuth: state.userData.isAuth,
})

const mapDispatchToProps = dispatch => ({
  onSetAuthorization: isAuth => dispatch(setAuthorization(isAuth)),
  validateUserToken: () => dispatch(validateUserToken()),
  validateStorage: () => dispatch(validateStorage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
