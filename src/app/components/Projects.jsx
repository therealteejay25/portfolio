"use client"
import React from 'react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const fadeInDelay = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  },
})

const Projects = () => {
  return (
    <motion.div
      id='projects'
      className='bg-[#06010f] min-h-screen pt-28 p-6 lg:p-10'
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <motion.h2
        className="text-3xl lg:text-5xl text-white leading-10 lg:leading-[4.5rem] text-center tracking-wider font-bold mb-10"
        variants={fadeInDelay(0.1)}
        initial="hidden"
        whileInView="visible"
      >
        My Projects
      </motion.h2>

      {/* Wrapper */}
      <div className="flex flex-col gap-16">

        {/* Project 1 */}
        <motion.div
          className='flex flex-col lg:flex-row items-center lg:justify-between gap-8'
          variants={fadeInDelay(0.2)}
          initial="hidden"
          whileInView="visible"
        >
          <img src="/base.png" className='w-full lg:w-[40%] rounded-md' alt="Base Wall Of Fame" />
          <div className='w-full lg:w-[55%]'>
            <motion.h3 className='text-white font-bold text-2xl' variants={fadeInDelay(0.3)} initial="hidden" whileInView="visible">
              Base Wall Of Fame
            </motion.h3>
            <motion.p className='text-white py-5' variants={fadeInDelay(0.4)} initial="hidden" whileInView="visible">
              A digital recognition platform that highlights top achievers in various fields. Built with React and Firebase.
            </motion.p>
            <div className='flex flex-wrap gap-4'>
              <motion.button className='py-3 px-6 bg-[#812DFF] text-white font-semibold border-2 border-[#812DFF] rounded-md flex items-center gap-2' variants={fadeInDelay(0.5)} initial="hidden" whileInView="visible">
                <img src="/githubw.svg" className='h-6' alt="GitHub" />
                View Code
              </motion.button>
              <motion.button className='py-3 px-6 text-[#812DFF] font-semibold border-2 border-[#812DFF] rounded-md flex items-center gap-2' variants={fadeInDelay(0.6)} initial="hidden" whileInView="visible">
                <img src="/web.svg" className='h-6' alt="Live Site" />
                Visit Site
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className='flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-8'
          variants={fadeInDelay(0.7)}
          initial="hidden"
          whileInView="visible"
        >
          <img src="/zurvey.png" className='w-full lg:w-[40%] rounded-md' alt="Zurvey" />
          <div className='w-full lg:w-[55%]'>
            <motion.h3 className='text-white font-bold text-2xl' variants={fadeInDelay(0.8)} initial="hidden" whileInView="visible">
              Zurvey
            </motion.h3>
            <motion.p className='text-white py-5' variants={fadeInDelay(0.9)} initial="hidden" whileInView="visible">
              A survey creation and analysis tool for gathering insights and feedback. Developed using Next.js and Supabase.
            </motion.p>
            <div className='flex flex-wrap gap-4'>
              <motion.button className='py-3 px-6 bg-[#812DFF] text-white font-semibold border-2 border-[#812DFF] rounded-md flex items-center gap-2' variants={fadeInDelay(1.0)} initial="hidden" whileInView="visible">
                <img src="/githubw.svg" className='h-6' alt="GitHub" />
                View Code
              </motion.button>
              <motion.button className='py-3 px-6 text-[#812DFF] font-semibold border-2 border-[#812DFF] rounded-md flex items-center gap-2' variants={fadeInDelay(1.1)} initial="hidden" whileInView="visible">
                <img src="/web.svg" className='h-6' alt="Live Site" />
                Visit Site
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className='flex flex-col lg:flex-row items-center lg:justify-between gap-8'
          variants={fadeInDelay(1.2)}
          initial="hidden"
          whileInView="visible"
        >
          <img src="/lixt.png" className='w-full lg:w-[40%] rounded-md' alt="Lixt" />
          <div className='w-full lg:w-[55%]'>
            <motion.h3 className='text-white font-bold text-2xl' variants={fadeInDelay(1.3)} initial="hidden" whileInView="visible">
              Lixt
            </motion.h3>
            <motion.p className='text-white py-5' variants={fadeInDelay(1.4)} initial="hidden" whileInView="visible">
              A productivity-focused to-do list app with category-based task management, built with Vite and Firebase.
            </motion.p>
            <div className='flex flex-wrap gap-4'>
              <motion.button className='py-3 px-6 bg-[#812DFF] text-white font-semibold border-2 border-[#812DFF] rounded-md flex items-center gap-2' variants={fadeInDelay(1.5)} initial="hidden" whileInView="visible">
                <img src="/githubw.svg" className='h-6' alt="GitHub" />
                View Code
              </motion.button>
              <motion.button className='py-3 px-6 text-[#812DFF] font-semibold border-2 border-[#812DFF] rounded-md flex items-center gap-2' variants={fadeInDelay(1.6)} initial="hidden" whileInView="visible">
                <img src="/web.svg" className='h-6' alt="Live Site" />
                Visit Site
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default Projects
