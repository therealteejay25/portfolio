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

const About = () => {
  return (
    <motion.div
      className='bg-[#06010f] min-h-screen pt-28 px-6 sm:px-10 md:px-16'
      viewport={{ once: true }}
      variants={fadeIn}
      id='about'
    >
      <motion.h2 
        className="header text-3xl sm:text-4xl lg:text-5xl text-white text-center tracking-wide leading-tight lg:leading-[4rem] mb-10"
        variants={fadeInDelay(0.1)}
        initial="hidden"
        whileInView="visible"
      >
        Who I Am
      </motion.h2>

      <div className='w-full flex flex-col lg:flex-row items-center lg:space-x-8 gap-y-10'>
        {/* 🧑🏽‍💻 Text content */}
        <motion.div
          className='lg:w-2/3 w-full'
          variants={fadeInDelay(0.2)}
          initial="hidden"
          whileInView="visible"
        >
          <motion.p 
            className='text-[15px] sm:text-base lg:text-lg text-white text-center lg:text-left mb-6'
            variants={fadeInDelay(0.3)}
            initial="hidden"
            whileInView="visible"
          >
            I'm Ariyo Eyitayo, a passionate frontend developer and designer with a keen
            eye for creativity, innovation, and seamless user experiences. With
            expertise in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS,
            I craft modern, responsive, and visually engaging web applications.
            Beyond coding, I have a strong design background, using tools like
            Figma, Photoshop, and Canva to bring ideas to life. Whether it's designing
            intuitive UI, optimizing performance, or mentoring aspiring
            developers, I thrive on pushing boundaries and creating impactful
            digital experiences.
          </motion.p>

          {/* Stats */}
          <div className='w-full hidden lg:flex space-x-6'>
            <motion.div
              className='w-1/2 h-40 border p-5 border-[#812DFF] rounded-xl'
              variants={fadeInDelay(0.4)}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className='text-4xl font-semibold py-4 text-white'>4+</h3>
              <p className='text-[#BDBCBC]'>Years of Experience</p>
            </motion.div>
            <motion.div
              className='w-1/2 h-40 border p-5 border-[#812DFF] rounded-xl'
              variants={fadeInDelay(0.5)}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className='text-4xl font-semibold py-4 text-white'>15+</h3>
              <p className='text-[#BDBCBC]'>Projects Completed</p>
            </motion.div>
          </div>
        </motion.div>

        {/* 🖼️ Image */}
        <motion.div
          className='w-full h-72 lg:w-1/3 h-60 sm:h-80 lg:h-96 rounded-3xl overflow-hidden'
          variants={fadeInDelay(0.6)}
          initial="hidden"
          whileInView="visible"
        >
          <img src="img.png" className='w-full h-full object-cover' alt="profile" />
        </motion.div>
      </div>

      {/* Mobile Stats */}
       </motion.div>
  )
}

export default About
