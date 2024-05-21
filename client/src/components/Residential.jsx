import { Link } from 'react-router-dom';
import ResidentCard from './ResidentCard';
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import ResidentCardCol from './ResidentCardCol';

const Residential = ({ catSlug }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/real/RealEstats?catSlug=${catSlug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const rawData = await response.json();
        const shuffledData = rawData.sort(() => 0.5 - Math.random());
        const slicedData = shuffledData.slice(0, 4);
      
        setData(slicedData); 
   
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [catSlug]);

  return (
    <div>
      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4  sm:px-6 md:px-8 lg:px-20 ">
        {data.length > 0 && (
          <>
            <Link to={`/PropertieDetails/${data[0]._id}`} className="lg:grid grid-cols-1  hidden ">
              <ResidentCard key={data[0]._id} data={data[0]} />
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4  mx-auto">
              {data.slice(1).map((item) => (
                <ResidentCardCol key={item._id} data={item} />
              ))}
            </div>
          </>
        )}
      </main>
      <div className='w-full flex items-center justify-center py-5'>
        <Link to='/properties' className=' px-14 py-4 text-lg hover:translate-x-1 rounded-xl flex items-center gap-2 text-black transition-all '>Load More Listing  <FaArrowRight /> </Link>
      </div>
    </div>
  );
};

export default Residential;
