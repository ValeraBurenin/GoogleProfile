import { connect } from 'react-redux'
import { PROVIDER, APP_ID, KEY, SCOPE } from '@/constants'
import { setUserAuthenticated, onLoginFailure } from '@/actions'

import Button from './component'

const mapStateToProps = () => {
  return {
    provider: PROVIDER,
    appId: APP_ID,
    key: KEY,
    scope: SCOPE,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginSuccess: token => {
      dispatch(setUserAuthenticated(token))
    },
    onLoginFailure: () => {
      dispatch(onLoginFailure())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
