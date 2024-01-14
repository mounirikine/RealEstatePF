import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Residential from "./Residential";

const FirstSection = () => {
  const [activeTab, setActiveTab] = useState("Residential");
  const [compSelected, setCompSelected] = useState(<Residential />);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'Residential':
        setCompSelected(<Residential />);
        break;
      case 'Commercial':
        setCompSelected('Not competent yet');
        break;
      case 'Apartments':
        setCompSelected('Not competent yet');
        break;
      case 'Office space':
        setCompSelected('Not competent yet');
        break;
      case 'Cars':
        setCompSelected('Not competent yet');
        break;
      case 'Outers':
        setCompSelected('Not competent yet');
        break;
      default:
        setCompSelected(null);
    }
  };

  return (
    <>
      <motion.section className="bg-white text-black py-10">
        <div className="flex item-center ">
          <h1 className="text-center mx-auto font-bold text-5xl">
            Find the category for you
          </h1>
        </div>
        <p className="text-center mx-auto py-7 w-9/12 text-lg text-gray-500 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus
          suscipit turpis sed vitae.
        </p>

        <div
          role="tablist"
          className="tabs tabs-lifted w-full md:w-6/12 mx-auto py-5 flex flex-wrap justify-center"
        >
          <Link
            onClick={() => handleTabClick("Residential")}
            role="tab"
            className={`tab font-semibold hover:text-violet-500 ${
              activeTab === "Residential" ? "tab-active text-[#7af065]" : ""
            }`}
          >
            Residential
          </Link>
          <Link
            onClick={() => handleTabClick("Commercial")}
            role="tab"
            className={`tab font-semibold hover:text-violet-500 ${
              activeTab === "Commercial" ? "tab-active text-[#7af065]" : ""
            }`}
          >
            Commercial
          </Link>
          <Link
            onClick={() => handleTabClick("Apartments")}
            role="tab"
            className={`tab font-semibold hover:text-violet-500 ${
              activeTab === "Apartments" ? "tab-active text-[#7af065]" : ""
            }`}
          >
            Apartments
          </Link>
          <Link
            onClick={() => handleTabClick("Office space")}
            role="tab"
            className={`tab font-semibold hover:text-violet-500 ${
              activeTab === "Office space" ? "tab-active text-[#7af065]" : ""
            }`}
          >
            Office space
          </Link>
          <Link
            onClick={() => handleTabClick("Cars")}
            role="tab"
            className={`tab font-semibold hover:text-violet-500 ${
              activeTab === "Cars" ? "tab-active text-[#7af065]" : ""
            }`}
          >
            Cars
          </Link>
          <Link
            onClick={() => handleTabClick("Outers")}
            role="tab"
            className={`tab font-semibold hover:text-violet-500 ${
              activeTab === "Outers" ? "tab-active text-[#7af065]" : ""
            }`}
          >
            Outers
          </Link>
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
          {compSelected || 'No Items Yet'}
        </motion.div>
      </motion.section>
    </>
  );
};

export default FirstSection;
