import { motion } from 'framer-motion';
import React from 'react'
import { useUserAuth } from '../../Contexts/AuthContext';

const ProfileDropdown = () => {
    const { user, logoutUser } = useUserAuth()
    const handleNavigateLogin = () => {
        window.location.href = 'login'
    }
    const handleNavigateRegister = () => {
        window.location.href = 'register'
    }
  return (
    <React.Fragment>
      <div className="flex flex-col gap-2">
        {user ? (
          <>
          <p className='font-semibold tracking-wider capitalize text-center'>@{user.username}</p>
            <motion.button
              onClick={logoutUser}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md shadow bg-cyan-50 border border-cyan-200 font-semibold"
            >
              Logout
            </motion.button>
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <motion.button
              onClick={handleNavigateLogin}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md shadow bg-cyan-50 border border-cyan-200 font-semibold"
            >
              Login
            </motion.button>
            <motion.button
              onClick={handleNavigateRegister}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md shadow bg-cyan-50 border border-cyan-200 font-semibold"
            >
              Register
            </motion.button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default ProfileDropdown
