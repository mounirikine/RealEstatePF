import { motion } from 'framer-motion';
import { FaBath, FaBed, FaMapMarkerAlt } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { Link } from 'react-router-dom';

import { LuFuel } from "react-icons/lu";
import { IoIosBody } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";


const CarCard = ({data}) => {
    const imageUrl = data.imageUrls[0];
  return (
    <>
  <motion.Card
      to={`PropertieDetails/${data._id}`}
      className="flex flex-col rounded-xl bg-white shadow-xl h-[450px]"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.8, delay: 0.75 }}
    >
      <>
      <Link  to={`/PropertieDetails/${data._id}`} >
      <div className="relative flex items-center justify-center ">
        <img
          className="rounded-xl w-full h-[280px]  transition ease-in-out delay-150  duration-300"
          src={imageUrl}
          alt=""
        />
        <div className="chat chat-start mb-3 px-4 absolute top-1 left-0">
          <span className={` text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 bg-white  rounded dark:bg-green-900 dark:text-green-500`}>{data.color}</span>
        </div>
      </div>
      <div className="flex flex-col py-2 px-4 justify-center">
        <h1 className="text-lg md:text-xl lg:text-xl ">
          {data.title}
        </h1>
        <h1 className="text-[#782DF3] truncate text-xl md:text-xl lg:text-xl pb-1">
          ${data.price}
        </h1>
        <p className="text-gray-500 text-sm truncate w-full">{data.description}</p>
      </div>
      <div className="flex items-center px-4">
        <span className="flex items-center gap-0.5 truncate  text-sm">
          <FaMapMarkerAlt className="text-violet-500 text-sm" /> {data.transmission}
        </span>
      </div>
      <div className="flex justify-between items-center border  mt-2 py-0.5 mx-3 rounded-lg text-sm px-2">
        <span className="flex justify-between items-center gap-1 border-violet-500 pr-5">
          <IoIosBody className="text-violet-500" /> {data.body} 
        </span>
        <span className="flex justify-between items-center gap-1 border-violet-500 pr-5">
          <LuFuel className="text-violet-500" /> {data.fueltype}
        </span>
        <span className="flex justify-between items-center gap-1 border-violet-500 pr-1">
          <FaCalendarDays className="text-violet-500" /> {data.year} 
        </span>
      </div></Link></>
    </motion.Card> 
    </>
  )
}

export default CarCard