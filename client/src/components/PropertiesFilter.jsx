import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import CarCard from "./CarCard";

const PropertiesFilter = ({ catSlug }) => {
  const [data, setData] = useState({ cars: [], reals: [] });
  const [loading, setLoading] = useState(false);


  

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');
    const catSlug = urlParams.get('catSlug');
    const priceRangeString = urlParams.get('price'); // Get the string value
    const priceRange = JSON.parse(priceRangeString); // Parse the string into an object
    const minPrice = priceRange.min;
    const maxPrice = priceRange.max;
    console.log(country,minPrice)
    const fetchData = async () => {
      setLoading(true);
      let response;
      try {
     
       
          response = await fetch(
            `http://localhost:4000/api/real/Listingsby?country=${country}&catSlug=${catSlug}&minPrice=${minPrice}&maxPrice=${maxPrice}`
          );
     

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Simulate a delay of 3 seconds before setting loading to false
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [catSlug]);

  return (
<section className="px-2 md:px-20 py-10 flex items-center justify-center">
  {loading ? (
    <span className="loading loading-spinner loading-lg text-black"></span>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-20 ">
      {data?.reals?.map((item) => (
           
              <FilterCard key={item._id} data={item} />
            
          ))}
          {data?.cars?.map((item) => (
           
              <CarCard key={item._id} data={item} />
           
          ))}
    </div>
  )}
</section>

  );
};

export default PropertiesFilter;
