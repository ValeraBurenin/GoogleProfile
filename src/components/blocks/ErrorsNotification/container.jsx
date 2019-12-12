import React from 'react'
import { connect } from 'react-redux'
import { notification, Icon } from 'antd'
import { pullError } from '@/actions'

import ErrorsNotification from './component'

const mapStateToProps = state => {
  return {
    errors: state.errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openNotification (errors) {
      const { id, name } = errors[errors.push() - 1]
      notification.open({
        message: 'Oops...',
        duration: null,
        description: name,
        key: id,
        icon: <Icon type="frown" />,
        onClose: () => dispatch(pullError(id)),
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsNotification)
