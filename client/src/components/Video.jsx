import { Link } from "react-router-dom";
import realestateved from "../assets/realestateved.mp4";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
import { useState } from "react";
const Video = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <div className=" lg:flex justify-between  px-8 sm:px-6 lg:px-8 py-20 ">
      <div className="w-full lg:w-6/12">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className=" rounded-xl w-full  options px-4 sm:px-6 lg:px-8 py-2 md:py-10 "
        >
          <h1 className=" text-5xl font-semibold  uppercase ">
            Discover properties
          </h1>
          <h1 className="text-xl font-semibold  uppercase py-10 ">
            that will improve your life and that of your family
          </h1>

          <ScrollTrigger onEnter={()=> setCounterState(true)} onExit={()=> setCounterState(false)} >
      <div className="grid grid-cols-2 items-center gap-4 pt-5 pb-5 border  px-10 rounded-2xl">
                <span className="  p-2 ">
                  <h1 className="text-3xl font-bold py-3  text-center">
                    {counterState && (
                      <CountUp start={0} end={99} delay={0}></CountUp>
                    )}
                    %
                  </h1>
                  <h1 className=" font-semibold  text-center">
                  Satisfied customers
                  </h1>
                </span>
                <span className="p-2">
                  <h1 className="text-3xl font-bold py-3 text-center">
                    <CountUp start={0} end={25} delay={0}></CountUp>+
                  </h1> 
                  <h1 className="font-semibold text-center">
                  Years' experience
                  </h1>
                </span>
                <span className="p-2">
                  <h1 className="text-3xl font-bold py-3 text-center">
                    <CountUp start={0} end={35} delay={0.5}></CountUp>+
                  </h1>
                  <h1 className=" font-semibold text-center ">
                    Integration partners
                  </h1>
                </span>
                <span className="p-2">
                  <h1 className="text-3xl font-bold py-3  text-center">
                    <CountUp start={0} end={400} delay={0.7}></CountUp>
                  </h1>
                  <h1 className="font-semibold text-center ">Projects completed</h1>
                </span>
          </div>
      </ScrollTrigger>

          <div className="py-6">
            <Link
              to="/"
              className="mx-auto px-6 sm:px-8 py-3 mt-6 sm:mt-8 rounded-xl  border primary_text flex items-center justify-center button"
            >
              Browse more property
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-5/12 flex items-center justify-center ">
        <video
          className="w-full object-cover  shadow-md border rounded-xl mx-auto" 
          loop
          autoPlay
          muted // Add this attribute for autoplay to work in some browsers
          playsInline // This is important for responsive video on iOS devices
        >
          <source src={realestateved} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
