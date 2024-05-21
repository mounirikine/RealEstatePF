import { motion } from "framer-motion";
import { FaMap, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { FaBed, FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";


const ResidentCardCol = ({ data }) => {
  const imageUrl = data.imageUrls[0]; //
  return (
    <>
      <motion.div 

      
      className="  justify-center rounded-xl shadow- bg-gray-100  ">
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
            <span className="text-lg lg:text-2xl flex items-center truncate text-black font-medium">
              ${data.regularPrice}/<p className="text-sm lg:text-sm ">month</p>
            </span>
            <span className="flex items-center  px-3  gap-3 rounded-xl">
              <div>
                <a
                  href={`https://wa.me/${data.userNumber}?text=Hello How Can I Get More Info About This ?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white  bg-green-600 px-3 py-3 rounded-3xl cursor-pointer"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </span>
          </div>
          <div className="pt-1">
            <h1 className="text-lg lg:text-2xl mb-2 text-black font-medium truncate">{data.title}</h1>
            <div className="flex items-center gap-2 text-sm lg:text-xl mb-3">
              <span>
                <FiMapPin className="text-violet-500" />
              </span>
              <span className="text-gray-500 truncate text-sm">{data.address}</span>
            </div>
            <div className="h-[40px]">
              <h1 className=" pr-3 truncate   text-gray-500 text-sm">{data.description}</h1>
            </div>
          </div>

          <div className="border bg-violet-200 text-black w-12/12 rounded-xl  mb-4 lg:px-10 py-3 flex  items-center justify-between ">
            <div className='flex'>
              <FaBed className="text-2xl mx-1 text-violet-700" />
              <span className="flex items-center  truncate text-sm">
                 {data.rooms}
              </span>
            </div>

            <div className="flex">
              <FaBath className="text-2xl mx-1 text-violet-700" /> 
              <span className="flex items-center  truncate text-sm">
                {data.bathrooms}
              </span>
            </div>
            <div className="flex">
              <FaRegSquare className="text-2xl mx-1 text-violet-700" />
              <span className="flex items-center  truncate text-sm">
                
                {data.area}{" "}
              </span>
            </div>
          </div>
        </div>
        </Link>
      </motion.div>
    </>
  );
};

export default ResidentCardCol;
