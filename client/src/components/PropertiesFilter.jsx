import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import CarCard from "./CarCard";

const PropertiesFilter = ({ catSlug }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response;
      try {
        if (catSlug === 'car') {
          response = await fetch(
            `http://127.0.0.1:4000/api/car/Cars`
          );
        } else {
          response = await fetch(
            `http://localhost:4000/api/real/RealEstats?catSlug=${catSlug}`
          );
        }

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
        }, 3000);
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
      {data.map((item) => (
        catSlug && catSlug !== 'car' ? (
          <FilterCard key={item._id} data={item} />
        ) : (
         <CarCard key={item._id} data={item} />
        )
      ))}
    </div>
  )}
</section>

  );
};

export default PropertiesFilter;
