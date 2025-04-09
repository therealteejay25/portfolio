"use client"
import React from 'react'
import { motion } from 'framer-motion'

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

const Contact = () => {
  return (
    <div
      id='contact'
      className='bg-[#06010f] min-h-screen pt-28 px-5 md:px-10'
    >
      <motion.h2 
        className="text-4xl md:text-5xl text-white font-bold leading-tight text-center tracking-wide mb-2"
        variants={fadeInDelay(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className='text-white text-center mb-10'
        variants={fadeInDelay(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Need A Website or a design? I’m just a rocket away.
      </motion.p>

      <motion.form
        className='w-full max-w-xl mx-auto flex flex-col gap-6'
        onSubmit={(e) => e.preventDefault()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.input 
          type="text" 
          placeholder='Name...'
          className='shadow text-white placeholder:text-neutral-500 outline-0 backdrop-blur-lg rounded-md border-[#812DFF] w-full border p-3 bg-transparent'
          variants={fadeInDelay(0.2)}
        />

        <motion.input 
          type="email" 
          placeholder='Email...'
          className='shadow text-white placeholder:text-neutral-500 outline-0 backdrop-blur-lg rounded-md border-[#812DFF] w-full border p-3 bg-transparent'
          variants={fadeInDelay(0.3)}
        />

        <motion.input 
          type="number" 
          placeholder='Number...'
          className='shadow text-white placeholder:text-neutral-500 outline-0 backdrop-blur-lg rounded-md border-[#812DFF] w-full border p-3 bg-transparent'
          variants={fadeInDelay(0.4)}
        />

        <motion.textarea
          placeholder='Message...'
          rows={6}
          className='shadow text-white placeholder:text-neutral-500 outline-0 backdrop-blur-lg rounded-md border-[#812DFF] w-full border p-3 bg-transparent'
          variants={fadeInDelay(0.5)}
        />

        <motion.button
          type="submit"
          className='py-3 px-10 font-semibold text-[#812DFF] border-2 border-[#812DFF] rounded-md hover:text-white bg-transparent hover:bg-[#812DFF] transition-colors duration-300 cursor-pointer self-center'
          variants={fadeInDelay(0.6)}
        >
          Send
        </motion.button>
      </motion.form>
    </div>
  )
}

export default Contact
