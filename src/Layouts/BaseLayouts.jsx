import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import { AnimatePresence } from 'framer-motion'
import Notification from '../components/Notification/Notification'
import { useUserAuth } from '../Contexts/AuthContext'


const BaseLayouts = () => {
  const { successMessage, errorMessage } = useUserAuth()
  return (
    <React.Fragment>
      <Header />
      <div className="flex fixed top-5 right-5 z-50 pointer-events-none">
        <AnimatePresence>
          {successMessage && (
            <Notification
              children={successMessage}
              className="bg-green-300 border-green-500"
            />
          )}
          {errorMessage && (
            <Notification
              children={errorMessage}
              className="bg-red-300 border-red-500"
            />
          )}
        </AnimatePresence>
      </div>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default BaseLayouts
