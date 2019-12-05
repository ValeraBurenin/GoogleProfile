import { connect } from 'react-redux'
import { setUserAuthenticated } from '@/actions'

import Login from './component'

const mapStateToProps = state => {
  return {
    isAuth: state.userData.isAuth,
  }
}

const mapDispatchToProps = dispatch => ({
  onSetUserAuthenticated: token => {
    dispatch(setUserAuthenticated(token))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
