import { motion } from "framer-motion";
import { FaMap, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";

import { FaBed, FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";

const ResidentCard = ({ data }) => {
  const imageUrl = data.imageUrls[0]; // Using the first image URL

  return (
    <>
      <motion.div
        initial={{ y: -22, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex  justify-center rounded-xl border w-10/12 mx-auto"
      >
        <div className="w-5/12 rounded-xl mx-w-[400px]">
          <img
            src={imageUrl}
            alt=""
            className=" rounded-s-xl h-[365px] mx-w-[400px] min-w-[400px]"
          />
        </div>
        <div className="w-7/12 px-5 mt-5">
          <div className="flex items-center justify-between">
            <span className="text-xl lg:text-5xl flex items-end">
              ${data.regularPrice}/<p className="text-lg">month</p>
            </span>
            <span className="flex items-center border px-3 py-1 gap-3 rounded-xl">
              <div className="avatar">
                <div className="w-14 mask mask-hexagon">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <h1>Edwin Martins</h1>
              </div>
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
          <div className="pt-10">
            <h1 className="text-5xl mb-4 truncate">{data.title}</h1>
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

          <div className="bg-violet-100 rounded-xl px-6 py-4 flex items-center justify-center">
            <span className="w-3/12 flex flex-col items-center justify-center">
              <h1>Bedrooms</h1>
              <h1 className="flex items-center gap-2 justify-center text-xl">
                <FaBed className="text-2xl" /> {data.rooms}
              </h1>
            </span>
            <span className="w-3/12 flex flex-col items-center justify-center">
              <h1>Bathrooms</h1>
              <h1 className="flex items-center gap-2 justify-center text-xl">
                <FaBath className="text-2xl" /> {data.bathrooms}
              </h1>
            </span>
            <span className="w-3/12 flex flex-col items-center justify-center">
              <h1>Square Area</h1>
              <h1 className="flex items-center gap-2 justify-center text-xl">
                <FaRegSquare className="text-2xl" />
                {data.area}m²{" "}
              </h1>
            </span>
            <span className="w-3/12 flex flex-col items-center justify-center">
              <h1>Kitchen</h1>
              <h1 className="flex items-center gap-2 justify-center text-xl">
                <TbToolsKitchen3 className="text-2xl" /> {data.kitchen}
              </h1>
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default ResidentCard;
