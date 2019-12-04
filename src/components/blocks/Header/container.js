import { connect } from 'react-redux'

import { setAuthorization } from '@/actions'

import Header from './component'

const mapStateToProps = state => {
  return {
    isAuth: state.userData.isAuth,
  }
}

const mapDispatchToProps = dispatch => ({
  onSetAuthorization: isAuth => dispatch(setAuthorization(isAuth)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
