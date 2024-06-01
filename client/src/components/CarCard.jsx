import { motion } from 'framer-motion';
import { FaBath, FaBed, FaMapMarkerAlt } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { AiOutlineNodeIndex } from "react-icons/ai";

import { LuFuel } from "react-icons/lu";
import { IoIosBody } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";
import { useEffect, useState } from 'react';


const CarCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch("http://localhost:4000/api/car/Cars");
  
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
    }, [data]);
  return (
    <>
    {data.map((item)=>(
    <motion.div
        to={`PropertieDetails/${item._id}`} key={item._id}
        className="flex flex-col rounded-xl bg-white shadow-xl h-[450px] overflow-hidden p-4"
      
      >
        <Link to={`/cardDetails/${item._id}`} className="relative flex-shrink-0">
          <img
            className="rounded-t-xl w-full h-[240px] object-cover"
            src={item.imageUrls[0]}
            alt=""
          />
          <div className="absolute top-3 left-3">
            <span className="text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 bg-white rounded :bg-green-900 :text-green-500">
              {item.color}
            </span>
          </div>
        </Link>
        <div className="flex flex-col h-[320px] justify-between pt-5 pb-2 px-4">
          <div>
          <h1 className=" text-xl md:text-xl lg:text-2xl font-bold  truncate">
              ${item.price}
            </h1>
            <h1 className="text-lg md:text-xl lg:text-xl truncate font-semibold mb-1">
              {item.title}
            </h1>
            
            <p className="text-gray-500 text-sm truncate mb-2 ">{item.description}</p>
          </div>
          <div className="flex mb-1">
            <AiOutlineNodeIndex className=" " />
            <span className="flex items-center gap-0.5 truncate text-sm">
              {item.transmission}
            </span>
          </div>
          <div className="flex  justify-center border py-1 rounded-lg bg-violet-100 px-1 border-gray-200 pt-2">
            <div className='flex items-center'>
              <IoIosBody className="mx-1" /> 
              <span className="flex justify-between items-center gap-1 border-violet-500 pr-5">
                {item.body} 
              </span>
            </div>
            <div className='flex items-center'>
              <LuFuel className=" mx-1" />
              <span className="flex justify-between items-center gap-1 border-violet-500 pr-5">
                {item.fueltype}
              </span>
            </div>
            
          </div>
        </div>
      </motion.div>
))}
    </>
  )
}

export default CarCard