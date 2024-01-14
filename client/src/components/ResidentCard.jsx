import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { FaBed, FaBath } from 'react-icons/fa';

const ResidentCard = () => {
  return (
    <motion.Link to="/property-details" className="flex flex-col p-1 rounded-xl border shadow-xl"
    variants={{
      hidden:{opacity:0 },
      visible:{opacity:1 }
    }}
    initial='hidden'
    animate='visible'
    transition={{duration:0.8 ,delay:0.75}}
    >
      <div className="relative flex items-center justify-center">
        <img
          className="rounded-xl w-full"
          src="https://assets-global.website-files.com/65536c2335f1d63e21d653f2/65536c2335f1d63e21d6554f_house5-p-1080.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col py-3 px-4 justify-center">
        <h1 className="text-violet-500 font-bold text-xl md:text-2xl lg:text-3xl py-1">
          360,000.00 MAD
        </h1>
        <p className="font-bold text-gray-500">/Per Month</p>
      </div>
      <div className="flex items-center px-4">
        <span className="flex items-center gap-0.5 py-2">
          <FaMapMarkerAlt className="text-violet-500" /> 123 Street, New York, USA
        </span>
      </div>
      <div className="chat chat-start mb-3 px-4">
        <div className="chat-bubble chat-bubble-primary-content">For Rent</div>
      </div>
      <hr className="w-11/12 mx-auto" />

      <div className="flex flex-wrap justify-between items-center border  py-1 mb-1 rounded-lg px-10">
        <span className="flex justify-between items-center font-semibold gap-1  border-violet-500 pr-5">
          <SlSizeFullscreen className="text-violet-500" /> 1000 Sqft
        </span>
        <span className="flex justify-between items-center font-semibold gap-1  border-violet-500 pr-5">
          <FaBed className="text-violet-500" /> 3 Bed
        </span>
        <span className="flex justify-between items-center font-semibold gap-1 border-violet-500 pr-1">
          <FaBath className="text-violet-500" /> 2 Bath
        </span>
      </div>
    </motion.Link>
  );
};

export default ResidentCard;
