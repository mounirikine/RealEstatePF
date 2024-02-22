import React from "react";
import { FaEdit, FaMapMarkerAlt } from "react-icons/fa";
import R1 from "../assets/r1.webp";
import R2 from "../assets/r2.webp";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
const Hero = () => {
  const [t,i18n]=useTranslation('global')
  return (
    <>
      <section className="hero min-h-screen pb-5 w-full  lg:mt-0">
        <main className="flex flex-col lg:flex-row items-center w-full justify-center  px-4 lg:px-0 ">
          <div className=" lg:w-6/12  mb-8 lg:mb-0   relative">
            <motion.h1
              variants={{
                hidden: { opacity: 0, x: -57 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.25 }}
              className="text-5xl lg:px-24 lg:text-6xl font-bold mb-2 w-full text-center lg:text-left"
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
              className="text-xl lg:px-24 lg:text-2xl text-gray-500 text-center lg:text-left"
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
            transition={{ duration: 1.2, delay: 1 }}
             className=" w-full flex items-center justify-center lg:justify-start  sm:px-24 py-10">
                  <Link to='/create' className="px-20 py-3 hover:translate-x-1  bg-black text-white rounded-lg flex items-center justify-center gap-2"><span>{t('button')}</span> <FaEdit /> </Link>
            </motion.button>
          </div>

          <div className="w-full hidden lg:flex lg:w-6/12  gap-2 items-center justify-center">
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 1}}
            >
              <img
                className="w-[120px] md:w-[190px] lg:w-[300px] -translate-y-6 lg:-translate-y-20"
                src={R1}
                alt=""
              />
            </motion.span>
            <motion.span 
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 1.2 }}
            > 
            <img
              className="w-[120px] md:w-[190px] lg:w-[300px] "
              src={R2}
              alt=""
            />
            </motion.span>
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;
