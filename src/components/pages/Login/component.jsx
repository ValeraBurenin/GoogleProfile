import React from 'react'
import PropTypes from 'prop-types'
import { Login, H3 } from './styles'

import StandardLayout from '@/components/layouts'
import SocialButton from '@/components/blocks/SocialButton'

const LoginPage = ({ isAuth, error }) => (
  <StandardLayout>
    <Login>
      {
        !isAuth && (
          <SocialButton>
              Sign in
          </SocialButton>
        )
      }
      {error && (<H3>Sorry, an error occurred on the server. Please repeat your request</H3>)}
    </Login>
  </StandardLayout>
)

LoginPage.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
}

export default LoginPage
