import { connect } from 'react-redux'
import { setAuthorization, validateUserToken } from '@/actions'

import Header from './component'

const mapStateToProps = state => {
  return {
    isAuth: state.userData.isAuth,
  }
}

const mapDispatchToProps = dispatch => ({
  onSetAuthorization: isAuth => dispatch(setAuthorization(isAuth)),
  validateUserToken: () => dispatch(validateUserToken()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
