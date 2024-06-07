import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBuilding, FaRandom } from "react-icons/fa";
import { MdOutlineVilla, MdOutlineApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import Residential from "./Residential";
import CarCard from "./CarCard";
import {useTranslation} from 'react-i18next'
import OtherCard from "./OtherCard";

const FirstSection = () => {
  const [activeTab, setActiveTab] = useState("Residential");
  
  const [loading, setLoading] = useState(true);
  const [t,i18n]=useTranslation('global')

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  

 

  return (
    <motion.section className="py-10 md:py-10 px-5">
      <div className="flex items-center">
        <h1 className="text-center mt-3 mx-auto font-bold text-2xl text-black px-5 md:text-3xl uppercase pt-20 md:pt-0">
          {t('FirstSectionTitle')}
        </h1>
      </div>
      <p className="text-center mx-auto py-7 lg:w-9/12 text-gray-500">
        {t('FirstSectionDes')}
      </p>

      <div className="w-12/12 flex items-center justify-center">
        <ul className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 flex-wrap text-sm font-medium text-center mx-auto text-gray-500 :text-gray-400   py-1 rounded-2xl">
          {[
            { tab: t("Residential"), icon: <FaBuilding className="text-xl"/> },
            { tab: t("Villa"), icon: <MdOutlineVilla className="text-xl" /> },
            { tab: t("Apartment"), icon: <MdOutlineApartment className="text-xl" /> },
            { tab: t("OfficeSpace"), icon: <GiOfficeChair className="text-xl" /> },
            { tab: t("Cars"), icon: <IoCarSport className="text-xl" /> },
            { tab: t("Other"), icon: <FaRandom className="text-xl" /> },
          ].map((item) => (
            <li key={item.tab} className="me-2">
              <Link
                onClick={() => handleTabClick(item.tab)}
                role="tab"
                className={`px-5 py-2 rounded-xl flex items-center gap-2 border :hover:bg-gray-800 :hover:text-white ${
                  activeTab === item.tab ? "tab-active button text-base" : "text-base bg-violet-100"
                }`}
              >
                <span className="bg-white text-black p-1 rounded-full">{item.icon}</span>
                <span className="flex flex-col items-center justify-center text-sm"><span>{item.tab}</span>  </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        className=" lg:px-10 py-10"
    
      >
        {activeTab === "Residential" && <Residential catSlug="house" />}
        {activeTab === "Villa" && <Residential catSlug="villa" />}
        {activeTab === "Apartment" && <Residential catSlug="apartment" />}
        {activeTab === "OfficeSpace" && <Residential catSlug="Office" />}
        {activeTab === "Other" && <OtherCard catSlug="product" />}
        {activeTab === "Cars" && (
  <div className="grid grid-cols-1 md:px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
   
      <CarCard  />
   
  </div>
)}

      </motion.div>
    </motion.section>
  );
};

export default FirstSection;
