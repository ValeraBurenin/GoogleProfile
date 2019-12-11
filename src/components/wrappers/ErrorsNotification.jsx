import React, { useEffect } from 'react'
import { notification, Icon } from 'antd'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { pullError } from '@/actions'

function ErrorsNotification ({ errors, openNotification }) {
  useEffect(() => {
    errors.length > 0 && openNotification(errors)
  })
  return null
}

const mapStateToProps = state => {
  return {
    errors: state.errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openNotification (errors) {
      notification.open({
        message: 'Oops...',
        description: errors[errors.push() - 1],
        icon: <Icon type="frown" />,
        onClose: () => dispatch(pullError()),
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsNotification)
