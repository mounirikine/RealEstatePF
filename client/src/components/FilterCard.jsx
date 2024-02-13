import { motion } from 'framer-motion';
import { FaBath, FaBed, FaMapMarkerAlt, FaRegSquare } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const FilterCard = ({data}) => {
    const imageUrl = data.imageUrls[0];
  return (
    <>
  <motion.Card
      to={`PropertieDetails/${data._id}`}
      className="flex flex-col rounded-xl bg-white shadow-xl h-[450px]"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.8, delay: 0.75 }}
    >
      <>
      <Link  to={`/PropertieDetails/${data._id}`} >
      <div className="relative flex items-center justify-center ">
        <img
          className="rounded-xl w-full h-[280px]  transition ease-in-out delay-150  duration-300"
          src={imageUrl}
          alt=""
        />
        <div className="chat chat-start mb-3 px-4 absolute top-1 left-0">
          <span className={`${data.type === 'sale' ?'bg-red-200' :'bg-green-100'} text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-500`}>For {data.type}</span>
        </div>
      </div>
      <div className="flex flex-col py-2 px-4 justify-center">
      <h1 className=" truncate text-xl md:text-xl lg:text-2xl pb-1">
          ${data.regularPrice}
        </h1>
        <h1 className="text-lg md:text-xl lg:text-2xl truncate ">
          {data.title}
        </h1>
        
        <p className="text-gray-500 text-sm truncate w-full">{data.description}</p>
      </div>
      <div className="flex items-center px-4">
        <span className="flex items-center gap-0.5 truncate  text-sm">
          <FaMapMarkerAlt className="text-sm" /> {data.address}, {data.city}, {data.country}
        </span>
      </div>
      <div className="flex justify-between items-center border bg-violet-100  mt-2 py-0.5 mx-3 rounded-lg text-sm px-2">
        <span className="flex justify-between items-center gap-1 -violet-500 pr-5">
          <FaRegSquare className="" /> {data.area} Sqft
        </span>
        <span className="flex justify-between items-center gap-1  pr-5">
          <FaBed className="0" /> {data.rooms} Bed
        </span>
        <span className="flex justify-between items-center gap-1  pr-1">
          <FaBath className="" /> {data.bathrooms} Bath
        </span>
      </div></Link></>
    </motion.Card> 
    </>

    
  )
}

export default FilterCard