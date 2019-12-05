import { connect } from 'react-redux'
import { setAuthorization, checkAvaliableToken } from '@/actions'

import Header from './component'

const mapStateToProps = state => {
  return {
    isAuth: state.userData.isAuth,
  }
}

const mapDispatchToProps = dispatch => ({
  onSetAuthorization: isAuth => dispatch(setAuthorization(isAuth)),
  onCheckAvaliableToken: () => dispatch(checkAvaliableToken()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
