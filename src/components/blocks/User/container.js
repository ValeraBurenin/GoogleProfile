import { connect } from 'react-redux'

import User from './component'

const mapStateToProps = state => {
  return {
    name: state.userData.userInfo.name,
    picture: state.userData.userInfo.picture,
  }
}

export default connect(mapStateToProps)(User)
