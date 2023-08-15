import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useUserAuth } from '../../Contexts/AuthContext'
import { useNavigate } from "react-router-dom";
// import Notification from '../../components/Notification/Notification'


const Registration = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const { registerUser} = useUserAuth()
  const navigate = useNavigate()

  const userInfo = {
    username,
    password,
    email,
    confirm_password: confirmPassword,
  }

  const handleRegister = (e) => {
      e.preventDefault()
      registerUser(userInfo, navigate)
  }


  const handleNavigateLogin = () => {
    window.location.href = '/login'
  }
  return (
    <React.Fragment>
      <section className="w-full isolate relative bg-white">
        <div className="mx-auto max-w-[1560px] px-6 py-6 h-screen">
          <div className="max-w-md mx-auto">
            <div className="text-center my-4 space-y-2">
              <h1 className="text-4xl font-bold">ComradesQuare</h1>
              <p className="text-md">
                Already have an account?{" "}
                <button onClick={handleNavigateLogin} className="text-cyan-400">
                  Login
                </button>{" "}
              </p>
            </div>
            <form
              action=""
              className="space-y-3 bg-cyan-50 border rounded-md  p-8"
            >
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name="username"
                  id="username"
                  className="w-full border p-2 px-3 rounded-md outline-none"
                  placeholder="john.doe"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full border p-2 px-3 rounded-md outline-none"
                  placeholder="john.doe@gmail.com"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="w-full border p-2 px-3 rounded-md outline-none"
                  placeholder="password"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirm_password">Confirm Password </label>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  className="w-full border p-2 px-3 rounded-md outline-none"
                  placeholder="password"
                />
              </div>
              <motion.button
                onClick={handleRegister}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 px-5 rounded-md shadow border border-cyan-300"
              >
                Register
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Registration
