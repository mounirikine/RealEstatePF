import { Link } from 'react-router-dom';
import realestateved from '../assets/realestateved.mp4';
import {motion} from 'framer-motion'
const Video = () => {
  return (
    <div className="relative px-8 sm:px-6 lg:px-8 py-20 ">
      <video
        className="w-full object-cover rounded-md shadow-md"
        loop
        autoPlay
        muted // Add this attribute for autoplay to work in some browsers
        playsInline // This is important for responsive video on iOS devices
      >
        <source src={realestateved} type="video/mp4" />
      </video>
      <motion.div
      variants={{
        hidden:{opacity:0 },
        
      }}
      initial='hidden'
     
      whileInView={{opacity:1}}
      transition={{duration:0.5 ,delay:0.25}}
       className="absolute rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-5/6 md:w-2/3 lg:w-5/12 options px-4 sm:px-6 lg:px-8 py-10 bg-white">
        <h1 className='text-violet-500 text-4xl font-semibold'>Discover properties</h1>
        <h1 className='text-4xl font-semibold text-black py-3'>that will improve your life and that of your family</h1>

        <p className='text-gray-500 font-semibold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed adipiscing.</p>

        <div className='py-6'>
          <Link to='/' className="mx-auto px-6 sm:px-8 py-3 mt-6 sm:mt-8 rounded-xl font-semibold secondary_color">Browse more property</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Video;
