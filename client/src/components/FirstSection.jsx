import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineVilla, MdOutlineApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import Residential from "./Residential";
import CarCard from "./CarCard";

const FirstSection = () => {
  const [activeTab, setActiveTab] = useState("Residential");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:4000/api/car/Cars");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  return (
    <motion.section className="py-10 md:py-5">
      <div className="flex items-center">
        <h1 className="text-center mt-8 mx-auto font-bold text-3xl px-5 md:text-5xl uppercase pt-20 md:pt-0">
          Find the category for you
        </h1>
      </div>
      <p className="text-center mx-auto py-7 w-9/12">
        Here you can find your categories that you are simply looking for and be the first to take them
      </p>

      <div className="w-12/12 flex">
        <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 flex-wrap text-sm font-medium text-center mx-auto text-gray-500 dark:text-gray-400 primary_color px-7 py-1 rounded-2xl">
          {[
            { tab: "Residential", icon: <FaBuilding /> },
            { tab: "Villa", icon: <MdOutlineVilla /> },
            { tab: "Apartment", icon: <MdOutlineApartment /> },
            { tab: "Office space", icon: <GiOfficeChair /> },
            { tab: "Cars", icon: <IoCarSport /> },
          ].map((item) => (
            <li key={item.tab} className="me-2">
              <Link
                onClick={() => handleTabClick(item.tab)}
                role="tab"
                className={`px-4 py-3 rounded-xl flex items-center gap-1 border dark:hover:bg-gray-800 dark:hover:text-white ${
                  activeTab === item.tab ? "tab-active button text-white" : ""
                }`}
              >
                <span className="bg-white text-black p-1 rounded-full">{item.icon}</span>
                <span>{item.tab}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        className="px-10 py-10"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {activeTab === "Residential" && <Residential catSlug="house" />}
        {activeTab === "Villa" && <Residential catSlug="villa" />}
        {activeTab === "Apartment" && <Residential catSlug="Apartment" />}
        {activeTab === "Office space" && <Residential catSlug="Office" />}
        {activeTab === "Cars" && (
  <div className="grid grid-cols-1 md:px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
    {data.map((item, index) => (
      <CarCard key={index} data={item} />
    ))}
  </div>
)}

      </motion.div>
    </motion.section>
  );
};

export default FirstSection;
