import { useEffect } from 'react'

export default function ErrorsNotification ({ errors, openNotification }) {
  useEffect(() => {
    errors.length > 0 && openNotification(errors)
  })
  return null
}
