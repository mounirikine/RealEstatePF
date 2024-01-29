import { Link } from 'react-router-dom';
import ResidentCard from './ResidentCard';
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const Residential = ({catSlug}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/real/RealEstats?catSlug=${catSlug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12">
        {data.map(item => (
          <ResidentCard key={item._id} data={item} />
        ))}
      </main>
         <div className='w-full flex items-center justify-center py-10'>
      <Link className='bg-[#7af065] px-14 py-4 rounded-xl flex items-center gap-2 text-[#782DF3] '>Load More Listing  <FaArrowRight /> </Link>

      </div>
    </div>
  );
};

export default Residential;
