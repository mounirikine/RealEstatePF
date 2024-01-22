import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Residential from "./Residential";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";
import { MdOutlineApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";


const FirstSection = () => {
  const [activeTab, setActiveTab] = useState("Residential");
  const [compSelected, setCompSelected] = useState(<Residential />);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case "Residential":
        setCompSelected(<Residential />);
        break;
      case "Villa":
        setCompSelected("Not competent yet");
        break;
      case "Apartments":
        setCompSelected("Not competent yet");
        break;
      case "Office space":
        setCompSelected("Not competent yet");
        break;
      case "Cars":
        setCompSelected("Not competent yet");
        break;
      case "Outers":
        setCompSelected("Not competent yet");
        break;
      default:
        setCompSelected(null);
    }
  };

  return (
    <>
      <motion.section className=" py-10">
        <div className="flex item-center ">
          <h1 className="text-center mt-8 mx-auto font-bold text-5xl uppercase primary_text">
            Find the category for you
          </h1>
        </div>
        <p className="text-center mx-auto py-7 w-9/12  primary_text ">
          Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus
          suscipit turpis sed vitae.
        </p>


        <div className="w-12/12 flex ">
          <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 flex-wrap text-sm font-medium text-center mx-auto text-gray-500 dark:text-gray-400 primary_color px-7 py-1 rounded-2xl">
            <li className="me-2">
              <Link
                onClick={() => handleTabClick("Residential")}
                role="tab"
                className={` px-4 py-3 rounded-xl flex items-center gap-1 border dark:hover:bg-gray-800 dark:hover:text-white ${
                  activeTab === "Residential" ? "tab-active bg-[#7af065] text-black" : ""
                }`}
              >
               <span className=" bg-white text-black p-1 rounded-full"><FaBuilding  /></span> <span>Residential</span>
              </Link>
            </li>
            <li className="me-2">
              <Link
                onClick={() => handleTabClick("Villa")}
                role="tab"
                className={` flex items-center gap-1 px-4 py-3 rounded-xl border dark:hover:bg-gray-800 dark:hover:text-white ${
                  activeTab === "Villa" ? "tab-active bg-[#7af065] text-black" : ""
                }`}
              >
              <span className=" bg-white text-black p-1 rounded-full"><MdOutlineVilla  /></span> <span>Villa</span>

              </Link>
            </li>

            <li className="me-2">
              <Link
                onClick={() => handleTabClick("Apartments")}
                role="tab"
                className={` px-4 py-3 rounded-xl flex items-center gap-1 border  dark:hover:bg-gray-800 dark:hover:text-white ${
                  activeTab === "Apartments" ? "tab-active bg-[#7af065] text-black" : ""
                }`}
              >
                  <span className=" bg-white text-black p-1 rounded-full"><MdOutlineApartment  /></span> <span>Apartments</span>
              </Link>
            </li>
            <li className="me-2">
              <Link
                onClick={() => handleTabClick("Office space")}
                role="tab"
                className={` px-4 py-3 rounded-xl flex items-center gap-1 border dark:hover:bg-gray-800 dark:hover:text-white ${
                  activeTab === "Office space" ? "tab-active bg-[#7af065] text-black" : ""
                }`}
              >
                              <span className=" bg-white text-black p-1 rounded-full"><GiOfficeChair  /></span> <span>Office space</span>
              </Link>{" "}
            </li>
            <li>
              <Link
                onClick={() => handleTabClick("Cars")}
                role="tab"
                className={`rounded-xl flex items-center gap-1 px-4 py-3 border  dark:hover:bg-gray-800 dark:hover:text-white ${
                  activeTab === "Cars" ? "tab-active bg-[#7af065] text-black" : ""
                }`}
              >
              <span className=" bg-white text-black p-1 rounded-full"><IoCarSport  /></span> <span>Cars</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleTabClick("Outers")}
                role="tab"
                className={` px-4 py-3 rounded-xl flex items-center gap-1 border ml-2 dark:hover:bg-gray-800 dark:hover:text-white ${
                  activeTab === "Outers" ? "tab-active bg-[#7af065] text-black" : ""
                }`}
              >
              <span className=" bg-white text-black p-1 rounded-full"><CiCircleMore  /></span> <span>Outers</span>
              </Link>
            </li>
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
          {compSelected || "No Items Yet"}
        </motion.div>
      </motion.section>
    </>
  );
};

export default FirstSection;
