import React, { useState } from 'react'
import {IoMdCart, IoMdSearch, IoMdPerson } from 'react-icons/io'
import { motion } from "framer-motion";
import ProfileDropdown from '../../Dropdowns/ProfileDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <React.Fragment>
    <nav className="w-full relative bg-white">
        <div className="mx-auto max-w-[1560px] px-6 py-6">
            <div className='flex items-center justify-between'>
                <Link to='/' className='text-2xl font-bold tracking-wider'>ComradesQuare</Link>
                <div className="flex gap-6">
                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    className='p-2 rounded-md shadow border border-cyan-300'><IoMdSearch size={24} color=''/></motion.button>
                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    className='p-2 rounded-md shadow border border-cyan-300'><IoMdCart size={24}/></motion.button>
                    <motion.button 
                    onClick={handleToggle}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    className='p-2 rounded-md shadow border border-cyan-300'><IoMdPerson size={24}/></motion.button>
                </div>
            </div>
            <div className={`${isOpen ? '' : 'hidden'}`}>
              <div
              className="absolute w-64 p-3 z-50 bg-cyan-100 right-2 mr-4 top-20 rounded-md border-2">
                <ProfileDropdown/>
              </div>
            </div>

            {/* Useful Customer Links */}
            <div className='border py-3 mt-3 shadow-lg rounded-lg bg-[#08c5d1] text-gray-50 flex items-center'>
                  <ul className='w-full flex items-center justify-center gap-5'>
                    <li className='font-semibold'>
                      <Link to='/'>Best Sellers</Link>
                    </li>
                    <li className='font-semibold'>
                      <Link to='/'>New Releases</Link>
                    </li>
                    <li className='font-semibold'>
                      <Link to='/'>Top Rated</Link>
                    </li>
                    <li className='font-semibold'>
                      <Link to='/'>Top Purchases</Link>
                    </li>
                    <li className='font-semibold'>
                      <Link to='/'>Trending</Link>
                    </li>
                  </ul>
            </div>
        </div>
    </nav>
    </React.Fragment>
  )
}

export default Header
