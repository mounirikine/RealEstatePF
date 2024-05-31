import { Link } from "react-router-dom";
import realestateved from "../assets/realestateved.mp4";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
import img from "../assets/newhero.svg";

import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

import { useState } from "react";
const Video = () => {
  const [counterState, setCounterState] = useState(false);
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <section className="flex flex-row lg:flex-col items-center pt-56 pb-72 text-black lg:py-1 justify-center relative px-10">
        <img src={img} alt="img" className="w-[900px]" />
        <div className=" absolute flex-col lg:flex  w-[80%] mx-auto  ">
          <div className="w-full g:w-6/12 pt-5">
            <motion.h1 className="text-center mt-3 mx-auto font-bold text-2xl text-black px-5 md:text-3xl uppercase pt-20 md:pt-0">
              {t("OfferesTitle")}
            </motion.h1>
            <motion.p className="lg:text-lg text-sm mt-3 text-gray-500 mb-5 text-center w-11/12 mx-auto">
              {t("OfferesDesc")}
            </motion.p>
          </div>
          <div className=" w-full g:w-6/12">
            <motion.div className="flex mb-4 gap-3 items-center border bg-white text-black py-5 px-5 rounded-xl border-black">
              <div>
                <RiMoneyDollarCircleFill className="text-5xl text-violet-700" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-violet-700">
                {t("Affordable_Price")}
                </h1>
                <h1>
                  {t("desc1")}
                </h1>
              </div>
            </motion.div>
            <motion.div className="flex mb-4 gap-3 items-center border bg-white py-5 px-5 rounded-xl border-black">
              <div>
                <BiLike className="text-5xl text-violet-700" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-violet-700">
                  {t("Clear_Legality")}
                </h1>
                <h1>
                  {t("desc2")}
                </h1>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex mb-4 gap-3 items-center border bg-white py-5 px-5 rounded-xl border-black"
            >
              <div>
                <HiOutlineUserGroup className="text-5xl text-violet-700 " />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-violet-700">
                  {t('Experienced_Agent')}
                </h1>
                <h1>
              {t('desc3')}
                </h1>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
