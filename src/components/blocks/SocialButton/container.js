import { connect } from 'react-redux'
import { setUserAuthenticated, initError } from '@/actions'

import Button from './component'

const mapDispatchToProps = dispatch => {
  return {
    onLoginSuccess: token => {
      dispatch(setUserAuthenticated(token))
    },
    onLoginFailure: error => {
      dispatch(initError(error))
    },
  }
}

export default connect(null, mapDispatchToProps)(Button)
