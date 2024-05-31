import React from "react";
import { FaEdit, FaMapMarkerAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

import R1 from "../assets/r1.webp";
import R2 from "../assets/r2.webp";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import icon from '../assets/ic.png'
import {useTranslation} from 'react-i18next'
const Hero = () => {
  const [t,i18n]=useTranslation('global')
  return (
    <>
      <section className="hero min-h-screen pb-5 w-full  lg:mt-0 pt-20 ">
        <main className="flex flex-col lg:flex-row items-center w-full   px-4 lg:px-0 ">
          <div className=" lg:w-7/12   mb-8 lg:mb-0   relative">
            <motion.h1
              variants={{
                hidden: { opacity: 0, x: -57 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.25 }}
              className="text-5xl lg:px-24 lg:text-7xl font-bold mb-5 w-full text-center lg:text-left text-white " 
            >
              {t('Title')}
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -57 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2, delay: 0.75 }}
              className=" lg:px-24  text-gray-300 text-center lg:text-left"
            >
              {t('description')}
            </motion.p>

            <motion.button
            variants={{
              hidden: { opacity: 0, x: -57 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
             className=" w-full flex items-center gap-1 justify-center lg:justify-start  sm:px-24 py-10">
                  <Link to='/create' className="px-11 py-2  transition-all  bg-white text-black rounded-full flex items-center justify-center gap-2"><span>{t('button')}</span> </Link>
                  <Link to='/create' className=" p-3 hover:scale-105 transition-all  bg-white text-black rounded-full flex items-center justify-center gap-2 -rotate-45 hover:rotate-0 "> <IoArrowForward  /></Link>

            </motion.button>
          </div>
          
          
        </main>
      </section>
    </>
  );
};

export default Hero;
