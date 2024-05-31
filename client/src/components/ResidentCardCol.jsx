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
        className="justify-center rounded-xl  mb-10"
      >
        <Link to={`/PropertieDetails/${data._id}`}>
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
          <div className="px-3 mt-2">
            <div className="pt-1">
              <h1 className="text-lg lg:text-2xl mb-1 text-black font-medium truncate">
                {data.title}
              </h1>
              <div className="flex items-center gap-1 text-lg lg:text-xl mb-3">
                <span>
                  <FiMapPin className="text-violet-500 text-2xl " />
                </span>
                <span className="text-gray-500 truncate text-lg">
                  {data.address}
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
