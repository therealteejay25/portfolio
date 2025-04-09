"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "About", "Projects", "Contact"];

const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  margin: 0,
  listStyle: "none",
  // marginBottom: 20,
  cursor: "pointer",
  color: "#fff",
  fontWeight: 600,
  fontSize: "15px",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div>/      
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="fixed lg:w-[70vw] lg:my-5 lg:rounded-lg w-full lg:mx-[15vw] z-50 bg-[#06010f]/85 backdrop-blur-md shadow-xl shadow-black/40 px-5 md:px-10 py-4 md:rounded-b-xl"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.img
          src="logo.png"
          alt="logo"
          className="h-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
        />

        {/* Desktop Nav Links */}
        <div className="hidden gap-6 md:flex mx-10">
          {navItems.map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 + index * 0.2 }}
              style={linkStyle}
            >
              <a
                href={`#${text.toLowerCase().replace(" ", "")}`}
                style={{ ...linkStyle, marginBottom: 0 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#812DFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              >
                {text}
              </a>
            </motion.div>
          ))}
        </div>

        {/* CV Button */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          href="/resume.pdf"
          download
          className="hidden md:block"
        >
          <button className="cursor-pointer px-3 border-2 border-[#812DFF] hover:bg-transparent transition flex p-2 bg-[#812DFF] gap-2 text-white font-semibold justify-between items-center rounded-md">
            Get Cv
            <img src="download.svg" className="h-4" alt="download" />
          </button>
        </motion.a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1 z-[100]"
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[2px] bg-white rounded origin-center"
          />
          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[2px] bg-white rounded"
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -4 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[2px] bg-white rounded origin-center"
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:hidden mt-4 space-y-4"
        >
          {navItems.map((text, index) => (
            <motion.div
              key={text}
              style={linkStyle}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="text-center"
            >
              <a
                href={`#${text.toLowerCase().replace(" ", "")}`}
                onClick={() => setIsOpen(false)}
                style={{ color: "#fff", fontWeight: 600, textAlign: "center" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#812DFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                className="text-center mb-5"
              >
                {text}
              </a>
            </motion.div>
          ))}

          <a href="/resume.pdf" download>
            <button className="cursor-pointer mx-auto px-3 border-2 border-[#812DFF] hover:bg-transparent transition flex p-2 bg-[#812DFF] gap-2 text-white font-semibold justify-center items-center rounded-md w-1/2">
              Get Cv
              <img src="download.svg" className="h-4" alt="download" />
            </button>
          </a>
        </motion.div>
      )}
    </motion.nav>
    // </div>
  );
};

export default Navbar;
