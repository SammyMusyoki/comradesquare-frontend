import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserAuth } from '../Contexts/AuthContext'

const PrivateRoutes = () => {
    const { user } = useUserAuth()

    if (!user) {
        return <Navigate to="/login"/>
    }
  return <Outlet/>
}

export default PrivateRoutes
