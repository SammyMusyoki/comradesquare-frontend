import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useUserAuth } from '../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
// import Notification from '../../components/Notification/Notification'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loginUser,} = useUserAuth()
      const handleNavigateRegister = () => {
        window.location.href = 'register'
    }
    const userInfo = {
      username: username,
      password: password
    }

    const navigate = useNavigate()

    const handleLogin = (e) => {
      e.preventDefault()
      loginUser(userInfo, navigate)
    }
  return (
    <React.Fragment>
      <section className="w-full isolate relative bg-white">
        <div className="mx-auto max-w-[1560px] px-6 py-6 h-screen">
          <div className="max-w-md mx-auto">
            <div className="text-center my-4 space-y-2">
              <h1 className="text-4xl font-bold">ComradesQuare</h1>
              <p className="text-md">
                Do not have an account?{" "}
                <button
                  onClick={handleNavigateRegister}
                  className="text-cyan-400"
                >
                  Register
                </button>{" "}
              </p>
            </div>
            <form
              action=""
              className="space-y-3 bg-cyan-50 border rounded-md  p-8"
            >
              <div className="flex flex-col">
                <label htmlFor="">Username</label>
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
                <label htmlFor="">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="w-full border p-2 px-3 rounded-md outline-none"
                  placeholder="password"
                />
              </div>
              <motion.button
                onClick={handleLogin}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 px-5 rounded-md shadow border border-cyan-300"
              >
                Login
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Login
