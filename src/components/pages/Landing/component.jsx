import React from 'react'
import Main from '@/components/blocks/Main'
import StandardLayout from '@/components/layouts'
import RequestContacts from '../../blocks/RequestContacts'

const Landing = () => {
  return (
    <StandardLayout>
      <RequestContacts>
        <Main />
      </RequestContacts>
    </StandardLayout>
  )
}

export default Landing
