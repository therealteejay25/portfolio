"use client"
import React from 'react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    }
  }
}

const fadeInDelay = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay,
    }
  }
})

const Skills = () => {
  return (
    <motion.div
      className='bg-[#06010f] min-h-96 pt-28 p-10'
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <motion.h2 
        className="header text-5xl text-white leading-17 p-3 text-center tracking-wider"
        variants={fadeInDelay(0.1)}
              initial="hidden"
      whileInView="visible"
      >
        My Skills
      </motion.h2>
      <div className='flex w-full justify-center items-center'>
        <motion.img
          src="skills.png"
          className='lg:h-40 my-6'
          alt=""
          variants={fadeInDelay(0.2)}
                initial="hidden"
      whileInView="visible"
        />
      </div>
    </motion.div>
  )
}

export default Skills
