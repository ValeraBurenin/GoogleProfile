import { connect } from 'react-redux'
import { getUserData } from '@/actions'
import Landing from './component'

const mapStateToProps = state => {
  return {
    state: state.userData,
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
