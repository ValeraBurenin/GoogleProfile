import { connect } from 'react-redux'
import { getUserData } from '@/actions'
import Landing from './component'

const mapStateToProps = state => {
  return {
    isAuth: state.userData.isAuth,
    requestError: state.userData.requestError,
    userInfo: state.userData.userInfo,
    userContacts: state.userData.userContacts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => {
      dispatch(getUserData())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
