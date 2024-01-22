import { Link } from 'react-router-dom';
import ResidentCard from './ResidentCard';
import { FaArrowRight } from "react-icons/fa6";

const Residential = () => {
  return (
    <div>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12">
        <ResidentCard />
        <ResidentCard />
        <ResidentCard />
        <ResidentCard />
        <ResidentCard />
        <ResidentCard />
      </main>
      <div className='w-full flex items-center justify-center py-10'>
      <Link className='bg-[#7af065] px-14 py-4 rounded-xl flex items-center gap-2 text-[#782DF3] '>Load More Listing  <FaArrowRight /> </Link>

      </div>
    </div>
  );
};

export default Residential;
