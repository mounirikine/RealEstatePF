import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { FaBed, FaBath } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResidentCard = ({ data }) => {
  const imageUrl = data.imageUrls[0]; // Using the first image URL

  return (
    <motion.Card
      to="/property-details"
      className="flex flex-col rounded-xl bg-white shadow-xl"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.8, delay: 0.75 }}
    >
      <>
      <Link  to="/property-details">
      <div className="relative flex items-center justify-center">
        <img
          className="rounded-xl w-full"
          src={imageUrl}
          alt=""
        />
        <div className="chat chat-start mb-3 px-4 absolute top-1 left-0">
          <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-500">For Buy</span>
        </div>
      </div>
      <div className="flex flex-col py-2 px-4 justify-center">
        <h1 className="text-xl md:text-2xl lg:text-2xl p">
          {data.title}
        </h1>
        <h1 className="text-[#782DF3] text-xl md:text-xl lg:text-xl pb-3">
          $ {data.regularPrice}
        </h1>
        <p className="text-gray-500 pb-3">{data.description}</p>
      </div>
      <div className="flex items-center px-4">
        <span className="flex items-center gap-0.5 py-2">
          <FaMapMarkerAlt className="text-violet-500" /> {data.address}, {data.city}, {data.country}
        </span>
      </div>
      <div className="flex justify-between items-center border py-1 mt-4 mb-1 rounded-lg px-2">
        <span className="flex justify-between items-center gap-1 border-violet-500 pr-5">
          <SlSizeFullscreen className="text-violet-500" /> {data.area} Sqft
        </span>
        <span className="flex justify-between items-center gap-1 border-violet-500 pr-5">
          <FaBed className="text-violet-500" /> {data.rooms} Bed
        </span>
        <span className="flex justify-between items-center gap-1 border-violet-500 pr-1">
          <FaBath className="text-violet-500" /> {data.bathrooms} Bath
        </span>
      </div></Link></>
    </motion.Card>
  );
};

export default ResidentCard;
