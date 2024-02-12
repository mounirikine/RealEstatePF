import { motion } from "framer-motion";
import { FaMap, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";

import { FaBed, FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";

const ResidentCardCol = ({ data }) => {
  const imageUrl = data.imageUrls[0]; //
  return (
    <>
      <motion.div 
              initial={{scale:0 ,opacity:0}}
              whileInView={{scale:1,opacity:1 }}
              transition={{duration:0.8 ,delay:0.6}} 
      
      className="  justify-center rounded-xl border">
        <div className=" rounded-xl mx-h-[340px]">
          <img
            src={imageUrl}
            alt=""
            className=" rounded-xl h-[300px]  w-full"
          />
        </div>
        <div className=" px-3 mt-5">
          <div className="flex items-center justify-between">
            <span className="text-5xl flex items-end">
              ${data.regularPrice}/<p className="text-lg">month</p>
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
          <div className="pt-2">
            <h1 className="text-4xl mb-2 ">{data.title}</h1>
            <div className="flex items-center gap-2 text-xl mb-5">
              <span>
                <FiMapPin />
              </span>
              <span>{data.address}</span>
            </div>
            <div className="h-[40px]">
              <h1 className=" pr-3 truncate">{data.description}</h1>
            </div>
          </div>

          <div className="border bg-violet-100 w-12/12 rounded-xl  mb-4 px-10 py-4 flex  items-center  justify-center">
            <span className="w-4/12 flex items-center justify-center">
              <h1 className="text-sm"></h1>
              <h1 className="flex items-center gap-2 justify-center text-lg">
                <FaBed className="text-2xl" /> {data.rooms}
              </h1>
            </span>
            <span className="w-4/12 flex items-center justify-center">
              <h1 className="text-sm"></h1>
              <h1 className="flex items-center gap-2 justify-center text-lg">
                <FaBath className="text-2xl" /> {data.bathrooms}
              </h1>
            </span>
            <span className="w-4/12 flex items-center justify-center">
              <h1 className="text-sm"></h1>
              <h1 className="flex items-center gap-2 justify-center text-lg">
                <FaRegSquare className="text-2xl" />
                {data.area}{" "}
              </h1>
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ResidentCardCol;
