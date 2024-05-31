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
      
      className="  justify-center rounded-xl ">
      <>
      <Link to={`/PropertieDetails/${data._id}`} >
      <div className="rounded-xl max-h-[430px] relative overflow-hidden">
            <img
              src={imageUrl}
              alt=""
              className="rounded-xl h-[350px] hover:scale-105 w-full transition-all object-cover"
            />
            <span className="absolute right-3 bottom-3 bg-black bg-opacity-50 backdrop-blur-sm text-white text-lg lg:text-2xl font-medium px-10 py-1 rounded-md">
              ${data.regularPrice}
            </span>
          </div>
        <div className=" px-3 mt-5">
          <div className="flex items-center justify-between">
          
            
          </div>
          <div className="pt-1">
            <h1 className="text-2xl lg:text-3xl mb-2 truncate">{data.title}</h1>
            <div className="flex items-center gap-2 text-sm lg:text-xl mb-3">
              <span>
                <FiMapPin />
              </span>
              <span className="text-base truncate">{data.address}</span>
            </div>
          
          </div>


        </div>
        </Link></>
    </motion.div> 
    </>

    
  )
}

export default FilterCard