import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { FaBed, FaBath } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResidentCard = ({ data }) => {
  const imageUrl = data.imageUrls[0]; // Using the first image URL

  return (
    <motion.div
    to={`/PropertieDetails/${data._id}`}
    className="flex flex-col rounded-xl bg-white shadow-xl h-[450px] overflow-hidden"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }}
    initial='hidden'
    animate='visible'
    transition={{ duration: 0.8, delay: 0.75 }}
  >
    <>
      <Link to={`/PropertieDetails/${data._id}`} >
        <div className="relative flex-shrink-0">
          <img
            className="rounded-t-xl w-full h-[244px] object-cover"
            src={imageUrl}
            alt=""
          />
          <div className="absolute top-2 left-2">
            <span className={`${data.type === 'sale' ? 'bg-red-200' : 'bg-green-100'} text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-green-900 dark:text-green-500`}>For {data.type}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between  py-4 px-4">
          <div>
            <h1 className="text-lg md:text-xl lg:text-xl font-bold mb-1">
              {data.title}
            </h1>
            <h1 className="text-[#782DF3] text-xl md:text-xl lg:text-xl font-bold pb-1">
              ${data.regularPrice}
            </h1>
            <p className="text-gray-500 text-sm truncate">{data.description}</p>
          </div><div className='flex mb-1'>
                  <FaMapMarkerAlt className="text-violet-500" />
                     <span className="flex items-center  truncate text-sm">
                       {data.country} - {data.city} - {data.address}
                      </span>
                  </div>
          <div className="flex flex-wrap justify-between border-t border-gray-200 pt-2">
                  
                  <div className='flex'>
                    <SlSizeFullscreen className="text-violet-500  mx-1" />
                  <span className="flex items-center  truncate text-sm">
                     {data.area} Sqft
                  </span>
                  </div>
                  <div className='flex'>
                    <FaBed className="text-violet-500 mx-1"  />
                <span className="flex items-center  truncate text-sm">
                   {data.rooms} Bed
                </span></div>
                <div className='flex'>
                  <FaBath className="text-violet-500 mx-1" />
                <span className="flex items-center truncate text-sm">
                   {data.bathrooms} Bath
                </span></div>
          </div>
        </div>
      </Link>
    </>
  </motion.div>
  
  
  );
};

export default ResidentCard;
