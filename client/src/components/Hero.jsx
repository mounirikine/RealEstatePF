import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import R1 from "../assets/r1.webp";
import R2 from "../assets/r2.webp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="hero min-h-screen pb-5 w-full mt-32 lg:mt-0">
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
              We help people to realize their dream property
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
              We are creative people who provide the best way to you who want to
              have a new comfortable and suitable place to live
            </motion.p>

            <motion.div
            variants={{
              hidden: { opacity: 0, x: -57 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, delay: 1 }}
             className="flex lg:mx-14 bg-white flex-col lg:flex-row items-center lg:items-end w-10/12 mx-auto lg:w-full py-3 px-4 mt-10 rounded-xl border-2 border-black justify-between">
              <div className="flex  items-center gap-2 mb-4 lg:mb-0 w-full lg:w-3/12">
                <span className="border rounded-xl bg-violet-100 px-3 py-3 ">
                  <FaMapMarkerAlt />
                </span>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm">
                    Location
                  </label>
                  <select
                    name=""
                    id=""
                    className="font-semibold outline-none px-2"
                  >
                    <option value="">Agadir </option>
                    {/* Add other options as needed */}
                  </select>
                </div>
              </div>

              <div className="flex items-center  gap-2 mb-4 lg:mb-0 w-full lg:w-3/12">
                <span className="border rounded-xl bg-violet-100 px-3 py-3">
                  <FaMapMarkerAlt />
                </span>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm">
                    Type of Property
                  </label>
                  <select
                    name=""
                    id=""
                    className="font-semibold outline-none px-2"
                  >
                    <option value="">Apartment </option>
                    {/* Add other options as needed */}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 lg:mb-0 w-full lg:w-3/12">
                <span className="border rounded-xl bg-violet-100 px-3 py-3">
                  <FaMapMarkerAlt />
                </span>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm">
                    Price
                  </label>
                  <select
                    name=""
                    id=""
                    className="font-semibold outline-none px-2"
                  >
                    <option value="">1000$-$1500 </option>
                    {/* Add other options as needed */}
                  </select>
                </div>
              </div>

              <button className="lg:ml-4 px-5 py-2 rounded-e-md hover:shadow-lg bg-black font-bold text-white w-full lg:w-3/12">
                Search
              </button>
            </motion.div>
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
