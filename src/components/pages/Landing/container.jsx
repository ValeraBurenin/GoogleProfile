import { connect } from 'react-redux'
import { getUserData } from '@/actions'
import Landing from './component'

const mapStateToProps = state => {
  return {
    isAuth: state.userData.isAuth,
    userName: state.userData.userInfo.name,
    fetchError: state.errors.fetchError,
    errorText: state.errors.errorText,
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
