import { connect } from 'react-redux'

import Friends from './component'

const mapStateToProps = state => {
  return {
    contacts: state.userData.userContacts,
  }
}

export default connect(mapStateToProps)(Friends)
