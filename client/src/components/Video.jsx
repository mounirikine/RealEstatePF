import { Link } from "react-router-dom";
import realestateved from "../assets/realestateved.mp4";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
import img from '../assets/newhero.svg'

import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi2";

import { useState } from "react";
const Video = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <>

    <section className="flex flex-row lg:flex-col items-center pt-56 pb-72 lg:py-1 justify-center relative px-10">
      <img src={img} alt="img"  className="w-[900px]" />
      <div className=" absolute flex-col lg:flex  w-[80%] mx-auto  ">
        <div className="w-full g:w-6/12 pt-5">
          <motion.h1                   variants={{
            hidden: { opacity: 0,x:-33  },
            show: { opacity: 1,x:0  },
          }}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.25 }}  className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left w-full">Comfort Is Our Top Priority For You</motion.h1>
          <motion.p                    variants={{
            hidden: { opacity: 0,x:-33  },
            show: { opacity: 1,x:0  },
          }}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.75 }} className="lg:text-lg text-sm mt-3 mb-5 text-center lg:text-left">We guarantee that the products we sell will make our customers happy because we are very concerned about our consumer satisfaction</motion.p>
        </div>
        <div className=" w-full g:w-6/12">
          <motion.div 
                  variants={{
            hidden: { opacity: 0,x:-33  },
            show: { opacity: 1,x:0  },
          }}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex mb-4 gap-3 items-center border bg-white py-5 px-5 rounded-xl border-black"> 
            <div><RiMoneyDollarCircleFill className="text-5xl" /></div>
            <div>
              <h1 className="text-2xl font-bold">Affordable Price</h1>
              <h1>We provide the best for you. The price we offer accordance with the quality we provide</h1>
            </div>
          </motion.div>
          <motion.div                   variants={{
            hidden: { opacity: 0,x:33  },
            show: { opacity: 1,x:0  },
          }}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.25 }} className="flex mb-4 gap-3 items-center border bg-white py-5 px-5 rounded-xl border-black"> 
            <div><BiLike className="text-5xl" /></div>
            <div>
              <h1 className="text-2xl font-bold">Clear Legality</h1>
              <h1>Put your trust in us. We are a legal entity with official legality in the relevant government</h1>
            </div>
          </motion.div>
          <motion.div                   variants={{
            hidden: { opacity: 0,x:33  },
            show: { opacity: 1,x:0  },
          }}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.25 }} className="flex mb-4 gap-3 items-center border bg-white py-5 px-5 rounded-xl border-black"> 
            <div><HiOutlineUserGroup className="text-5xl" /></div>
            <div>
              <h1 className="text-2xl font-bold">Experienced Agent</h1>
              <h1>We always work wih agents in their fields so that we can provide the best quality</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
    </>



  );
};

export default Video;
