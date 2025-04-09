"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Socials from './Socials'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const tagY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const paraY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div ref={ref} className='hero bg-[#06010f] max-h-screen overflow-hidden relative'>
      <Socials />

      {/* 🔆 Radial Glow */}
      <motion.div
        className='-top-1/3 absolute z-0 w-full h-72 bg-radial from-[#812DFF]/50 to-[#1B0F04]/10 rounded-full blur-3xl'
        style={{ y: glowY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* 📄 Content */}
      <div className='pt-32 md:pt-40 flex flex-col justify-center items-center text-center z-10 relative px-4 sm:px-8 md:px-16'>
        
        {/* 🏷️ Name tag */}
        <motion.div
          className='border-2 border-[#812DFF] font-semibold rounded-full py-1 px-4 text-sm sm:text-base text-[#812DFF]'
          style={{ y: tagY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Tee Jay
        </motion.div>

        {/* 🧑🏽‍🚀 Header */}
        <motion.h2
          className="text-white text-4xl header sm:text-5xl lg:text-6xl font-bold leading-tight tracking-wide mt-4"
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Ariyo <br /> Eyitayo
        </motion.h2>

        {/* ✍🏽 Bio Text */}
        <motion.p
          className='text-[#959595] font-medium mt-4 text-sm sm:text-base max-w-2xl md:max-w-3xl lg:max-w-4xl px-2 sm:px-6'
          style={{ y: paraY }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Frontend Web Developer based in Nigeria with 4 years of experience and an eye for perfection.
        </motion.p>

        {/* 🌍 Earth Image */}
        <motion.img
          src="earth.png"
          className='w-48 sm:w-56 md:w-72 lg:w-96 mt-10 relative z-10'
          alt="earth"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        />
      </div>
    </div>
  )
}

export default Hero
