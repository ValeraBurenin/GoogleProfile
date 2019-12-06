import React from 'react'
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import { childrenPropType } from '@/prop-types'

const StandardLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

StandardLayout.propTypes = {
  children: childrenPropType.isRequired,
}

export default StandardLayout
