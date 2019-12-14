import { connect } from 'react-redux'
import { validateUserToken, logOut } from '@/actions'

import Header from './component'

const mapStateToProps = state => ({
  isAuth: state.userData.isAuth,
})

const mapDispatchToProps = dispatch => ({
  validateUserToken: () => dispatch(validateUserToken()),
  onLogOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
