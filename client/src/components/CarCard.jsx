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
    <motion.div
        to={`PropertieDetails/${data._id}`}
        className="flex flex-col rounded-xl bg-white shadow-xl h-[450px] overflow-hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.8, delay: 0.75 }}
      >
        <Link to={`/cardDetails/${data._id}`} className="relative flex-shrink-0">
          <img
            className="rounded-t-xl w-full h-[244px] object-cover"
            src={imageUrl}
            alt=""
          />
          <div className="absolute top-1 left-1">
            <span className="text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 bg-white rounded dark:bg-green-900 dark:text-green-500">
              {data.color}
            </span>
          </div>
        </Link>
        <div className="flex flex-col justify-between py-4 px-4">
          <div>
            <h1 className="text-lg md:text-xl lg:text-xl font-bold mb-1">
              {data.title}
            </h1>
            <h1 className="text-[#782DF3] text-xl md:text-xl lg:text-xl font-bold pb-1">
              ${data.price}
            </h1>
            <p className="text-gray-500 text-sm truncate">{data.description}</p>
          </div>
          <div className="flex mb-1">
            <FaMapMarkerAlt className="text-violet-500 mx-1" />
            <span className="flex items-center gap-0.5 truncate text-sm">
              {data.transmission}
            </span>
          </div>
          <div className="flex flex-wrap justify-between border-t border-gray-200 pt-2">
            <div className='flex'>
              <IoIosBody className="text-violet-500 mx-1" /> 
              <span className="flex justify-between items-center gap-1 border-violet-500 pr-5">
                {data.body} 
              </span>
            </div>
            <div className='flex'>
              <LuFuel className="text-violet-500 mx-1" />
              <span className="flex justify-between items-center gap-1 border-violet-500 pr-5">
                {data.fueltype}
              </span>
            </div>
            <div className='flex'>
              <FaCalendarDays className="text-violet-500 mx-1" />
              <span className="flex justify-between items-center gap-1 border-violet-500 pr-1">
                {data.year} 
              </span>
            </div>
          </div>
        </div>
      </motion.div>

    </>
  )
}

export default CarCard