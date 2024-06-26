import { motion } from "framer-motion";
import { FaMap, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { FaBed, FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";


const OtherCardCol = ({ data }) => {
  const imageUrl = data.imageUrls[0]; //
  return (
    <>
      <motion.div 
              initial={{y:-22 ,opacity:0}}
              whileInView={{y:0,opacity:1 }}
              transition={{duration:0.8 ,delay:0.6}} 
      key={data._id}
      className="  justify-center rounded-xl border">
        <Link to={`/OthersDetails/${data._id}`} >
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
              ${data.price}
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
              <span className="text-base truncate">{data.city}-{data.country}</span>
            </div>
            <div className="h-[40px]">
              <h1 className=" pr-3 truncate text-sm lg:text-xl">{data.description}</h1>
            </div>
          </div>

        </div>
        </Link>
      </motion.div>
    </>
  );
};

export default OtherCardCol;
