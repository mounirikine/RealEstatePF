import { useEffect, useState } from "react";
import FilterCard from "./FilterCard"


const PropertiesFilter = ({catSlug}) => {

    const [data,setData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/api/real/RealEstats?catSlug=${catSlug}`);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const res = await response.json();
           
            setData(res);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [catSlug]);
    
  return (
    <section className="px-2 md:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-20 ">
            {
                data.map(item=>(
                    <FilterCard key={item._id} data={item} />
                ))
            }
            
        </div>
    </section>
  )
}

export default PropertiesFilter