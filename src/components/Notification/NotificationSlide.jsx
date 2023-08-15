import React from 'react'
import { useUserAuth } from '../../Contexts/AuthContext'

const NotificationSlide = () => {
    const { Notifications } = useUserAuth()
    const {errorMessage, successMessage} = Notifications
  return (
    <div>
      
    </div>
  )
}

export default NotificationSlide
