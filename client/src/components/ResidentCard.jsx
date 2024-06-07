import { motion } from "framer-motion";
import { FaMap, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { FaBed, FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ResidentCard = ({ data }) => {
  const imageUrl = data.imageUrls[0]; // Using the first image URL
  const [t, i18n] = useTranslation("global");
  return (
    <motion.div

      to={`/PropertieDetails/${data._id}`}
      className="card  lg:card-side bg-gray-100 shadow-xmd border border-violet-200 p-5"
    >
      <img
        src={imageUrl}
        alt=""
        className={`h-[350px]  w-2/6 rounded-t-lg hover:scale-105 transition-all md:rounded-none md:rounded-l-lg object-cover`}
      />
      <div className="flex flex-col  justify-between w-4/6 p-6 ">
        <div className="flex   justify-between">
          <span className="text-xl lg:text-3xl flex text-black font-meduim  items-center">
            ${data.regularPrice}<p className="text-sm"></p>
          </span>
          <span className="flex items-center  gap-3">
            <div className="avatar">
              <div className="w-14 mask mask-hexagon">
                {data.userRef && data.userRef.avatar ? (
                  <img src={data.userRef.avatar} />
                ) : (
                  // Provide a fallback if data.userRef or data.userRef.avatar is null or undefined
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyT-7zkjvBAJX2Nh9OhmF2B5HgLHTZgNgfSXNCPi3m35AEo4CHNC4TiLzXHhPwHTQnASU&usqp=CAU" alt="default avatar" />
                )}
              </div>
            </div>
            <div>
              <h1 className="text-black">Edwin Martins</h1>
            </div>
            <div>
              <a
                href={`https://wa.me/${data.userNumber}?text=Hello How Can I Get More Info About This ?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-black bg-green-600 px-3 py-3 rounded-3xl cursor-pointer"
              >
                <FaWhatsapp className="text-xl text-white font-bold" />
              </a>
            </div>
          </span>
        </div>

        <h1 className="text-3xl text-black mb-4 truncate">{data.title}</h1>
        <div className="flex items-center gap-2 text-xl mb-2">
          <span>
            <FiMapPin className="text-violet-500" />
          </span>
          <span className="text-black text-base">{data.address}</span>
        </div>

        <span className=" w-5/6 truncate clear-start  mb-5 text-gray-500">{data.description}</span>

        <div className="bg-violet-200  w-full  rounded-xl px-6 py-2 flex flex-wrap text-black lg:flex-wrap items-center justify-center lg:justify-between">
          <span className="w-3/12 flex flex-col items-center justify-center">
            <h1 className="text-sm">{t('Bedrooms')}</h1>
            <h1 className="flex items-center gap-2 justify-center text-xl">
              <FaBed className="text-2xl text-violet-700" /> {data.rooms}
            </h1>
          </span>
          <span className="w-3/12 flex flex-col items-center justify-center">
            <h1 className="text-sm">{t('Bathrooms')}</h1>
            <h1 className="flex items-center gap-2 justify-center text-xl">
              <FaBath className="text-2xl text-violet-700" /> {data.bathrooms}
            </h1>
          </span>
          <span className="w-3/12 flex flex-col items-center justify-center">
            <h1 className="text-sm">{t('Square Area')}</h1>
            <span className="flex items-center gap-2 justify-center text-lg">
              <FaRegSquare className="text-xl text-violet-700" />
              {data.area}m²{" "}
            </span>
          </span>
          <span className="w-3/12 flex flex-col items-center justify-center">
            <h1 className="text-sm">{t('Kitchen')}</h1>
            <h1 className="flex items-center gap-2 justify-center text-xl">
              <TbToolsKitchen3 className="text-2xl text-violet-700" /> {data.kitchen}
            </h1>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ResidentCard;
