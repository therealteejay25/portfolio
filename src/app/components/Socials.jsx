"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Socials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.6 }}
      className='flex flex-col lg:left-10 left-5 space-y-3 fixed lg:top-56 top-[21rem] z-50'
    >
      <motion.a 
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 1.0 }}
      target='_blank' href="mailto:therealteejay25@gmail.com" className='p-2 rounded-full flex justify-center items-center bg-[#812DFF]'>
        <img src="mail.svg" className='h-4' alt="" />
      </motion.a>
      <motion.a 
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 1.2 }}
      target='_blank' href="https://instagram.com/therealteejay25/" className='p-2 rounded-full flex justify-center items-center bg-[#812DFF]'>
        <img src="instagram.svg" className='h-4' alt="" />
      </motion.a>
      {/* <motion.a 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.6 }}
      target='_blank' href="#" className='p-2 rounded-full flex justify-center items-center bg-[#812DFF]'>
          <img src="linkedin.svg"3className='h-5' alt="" />
      </motion.a> */}
      <motion.a 
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 1.4 }}
      target='_blank' href="https://x.com/therealteejay25/" className='p-2 rounded-full flex justify-center items-center bg-[#812DFF]'>
        <img src="x.svg" className='h-4' alt="" />
      </motion.a>
      <motion.a 
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 1.6 }}
      target='_blank' href="https://web.facebook.com/profile.php?id=61566776733802" className='p-2 rounded-full flex justify-center items-center bg-[#812DFF]'>
        <img src="facebook.svg" className='h-4' alt="" />
      </motion.a>
    </motion.div>
  )
}

export default Socials
