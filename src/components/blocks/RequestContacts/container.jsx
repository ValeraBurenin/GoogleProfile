import { connect } from 'react-redux'
import { getUserContacts } from '@/actions'

import Landing from './component'

const mapStateToProps = state => ({
  isAuth: state.userData.isAuth,
})

const mapDispatchToProps = dispatch => {
  return {
    getUserContacts: () => {
      dispatch(getUserContacts())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
