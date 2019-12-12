import React, { Component } from 'react'
import Button from './styles'
import SocialLogin from 'react-social-login'
import PropTypes from 'prop-types'
import { childrenPropType } from '@/prop-types'

class SocialButton extends Component {
  render () {
    const { children, triggerLogin } = this.props

    return (
      <Button onClick={triggerLogin}>
        {children}
      </Button>
    )
  }
}

SocialButton.propTypes = {
  children: childrenPropType.isRequired,
  triggerLogin: PropTypes.func.isRequired,
}

export default SocialLogin(SocialButton)
