import { motion } from 'framer-motion';


import { Link } from 'react-router-dom';



import { FiMapPin } from "react-icons/fi";
import { FaBed,FaRegSquare, FaBath,FaMap, FaMapMarkerAlt, FaWhatsapp   } from "react-icons/fa";
const FilterCard = ({data}) => {
    const imageUrl = data.imageUrls[0];
  return (
    <>
   <motion.div 
              initial={{y:-22 ,opacity:0}}
              whileInView={{y:0,opacity:1 }}
              transition={{duration:0.8 ,delay:0.6}} 
      
      className="  justify-center rounded-xl border">
      <>
      <Link to={`/PropertieDetails/${data._id}`} >
        <div className=" rounded-xl mx-h-[340px]">
          <img
            src={imageUrl}
            alt=""
            className=" rounded-t-xl h-[300px]  w-full"
          />
        </div>
        <div className=" px-3 mt-5">
          <div className="flex items-center justify-between">
            <span className="text-3xl lg:text-4xl flex items-end truncate">
              ${data.regularPrice}/<p className="text-sm lg:text-lg ">month</p>
            </span>
            <span className="flex items-center  px-3 py-1 gap-3 rounded-xl">
              <div>
                <a
                  href={`https://wa.me/${data.userNumber}?text=Hello How Can I Get More Info About This ?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-black  bg-violet-100 px-3 py-3 rounded-3xl cursor-pointer"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </span>
          </div>
          <div className="pt-1">
            <h1 className="text-2xl lg:text-3xl mb-2 truncate">{data.title}</h1>
            <div className="flex items-center gap-2 text-sm lg:text-xl mb-3">
              <span>
                <FiMapPin />
              </span>
              <span className="text-base truncate">{data.address}</span>
            </div>
            <div className="h-[40px]">
              <h1 className=" pr-3 truncate text-sm lg:text-xl">{data.description}</h1>
            </div>
          </div>

          <div className="border bg-violet-100 w-12/12 rounded-xl  mb-4 lg:px-10 py-3 flex  items-center  justify-evenly">
            <div className='flex'>
              <FaBed className="text-2xl mx-1" />
              <span className="flex items-center  truncate text-sm">
                 {data.rooms}
              </span>
            </div>

            <div className="flex">
              <FaBath className="text-2xl mx-1" /> 
              <span className="flex items-center  truncate text-sm">
                {data.bathrooms}
              </span>
            </div>
            <div className="flex">
              <FaRegSquare className="text-2xl mx-1" />
              <span className="flex items-center  truncate text-sm">
                
                {data.area}{" "}
              </span>
            </div>
          </div>
        </div>
        </Link></>
    </motion.div> 
    </>

    
  )
}

export default FilterCard