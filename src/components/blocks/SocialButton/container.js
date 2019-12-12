import { connect } from 'react-redux'
import { setUserAuthenticated, pushError } from '@/actions'

import Button from './component'

const mapDispatchToProps = dispatch => {
  return {
    onLoginSuccess: token => {
      dispatch(setUserAuthenticated(token))
    },
    onLoginFailure: error => {
      dispatch(pushError(error.message || error))
    },
  }
}

export default connect(null, mapDispatchToProps)(Button)
