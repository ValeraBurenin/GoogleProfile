import React, { Component } from 'react'
import Wrapper from './styles'
import SocialLogin from 'react-social-login'
import PropTypes from 'prop-types'
import { childrenPropType } from '@/prop-types'

class Button extends Component {
  render () {
    const { children, triggerLogin, triggerLogout, ...props } = this.props

    return (
      <Wrapper>
        <button onClick={triggerLogin} {...props}>
          {children}
        </button>
      </Wrapper>
    )
  }
}

Button.propTypes = {
  children: childrenPropType,
  triggerLogin: PropTypes.func,
  triggerLogout: PropTypes.func,
}

export default SocialLogin(Button)
