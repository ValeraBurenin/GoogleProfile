import React, { Component } from 'react'
import Wrapper from './styles'
import SocialLogin from 'react-social-login'
import PropTypes from 'prop-types'
import { childrenPropType } from '@/prop-types'

class Button extends Component {
  render () {
    const { children, triggerLogin, triggerLogout, ...props } = this.props

    return (
      <Wrapper onClick={triggerLogin} {...props}>
        {children}
      </Wrapper>
    )
  }
}

Button.propTypes = {
  children: childrenPropType,
  triggerLogin: PropTypes.func,
  triggerLogout: PropTypes.func,
}

Button.defaultProps = {
  triggerLogin: function f () {},
  triggerLogout: function f () {},
}

export default SocialLogin(Button)
