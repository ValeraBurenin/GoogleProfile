import React, { Component } from 'react'
import SocialLogin from 'react-social-login'
import PropTypes from 'prop-types'
import { childrenPropType } from '@/prop-types'
import 'antd/dist/antd.css'
import { Button } from 'antd'

class SocialButton extends Component {
  render () {
    const { children, triggerLogin, triggerLogout, ...props } = this.props

    return (
      <Button type="primary" size="large" onClick={triggerLogin} {...props}>
        {children}
      </Button>
    )
  }
}

SocialButton.propTypes = {
  children: childrenPropType,
  triggerLogin: PropTypes.func,
  triggerLogout: PropTypes.func,
}

SocialButton.defaultProps = {
  triggerLogin: function f () {},
  triggerLogout: function f () {},
}

export default SocialLogin(SocialButton)
