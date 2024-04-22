import { motion } from "framer-motion";
import { FaMap, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

import { FiMapPin } from "react-icons/fi";

const OtherCards = ({ data }) => {
  const imageUrl = data.imageUrls[0]; // Using the first image URL

  return (
    <motion.div
    initial={{ y: -22, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    to={`/OthersDetails/${data._id}`}
    className="card  lg:card-side bg-base-100 shadow-xl"
  >
    <img
      src={imageUrl}
      alt=""
      className={`h-72 md:h-auto w-2/6 rounded-t-lg md:rounded-none md:rounded-l-lg object-cover`}
    />
    <div className="flex flex-col  justify-between w-4/6 p-6 ">
      <div className="flex   justify-between">
          <span className="text-xl lg:text-5xl flex  items-end">
            ${data.price}
          </span>
              <span className="flex items-center  gap-3">
                <div className="avatar">
                          <div className="w-14 mask mask-hexagon">
                           <img src={data.userRef.avatar} />
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
                      className="flex items-center gap-1 text-black bg-violet-100 px-3 py-3 rounded-3xl cursor-pointer"
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>
                  </div>
              </span>
      </div>

      <h1 className="text-5xl mb-4 truncate">{data.title}</h1>
      <div className="flex items-center gap-2 text-xl mb-5">
        <span>
          <FiMapPin />
        </span>
        <span>{data.city}-{data.country}</span>
      </div>
    
        <span className=" w-6/6 truncate ">{data.description}</span>
   


  </div>
  </motion.div>
  
  );
};

export default OtherCards;
