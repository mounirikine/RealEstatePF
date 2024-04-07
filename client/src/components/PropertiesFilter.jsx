import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import CarCard from "./CarCard";
import ResidentCardCol from "./ResidentCardCol";

const PropertiesFilter = ({ catSlug }) => {
  const [data, setData] = useState({ cars: [], reals: [] });
  const [loading, setLoading] = useState(false);
console.log(data)
     
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
    // const urlParams = new URLSearchParams(window.location.search);
    // const countryParam = urlParams.get("country") || null;
    // const catSlugParam = urlParams.get("catSlug") || null;
    // const minPrice = urlParams.get("minPrice") || null;
    // const maxPrice = urlParams.get("maxPrice") || null;
  
      try {
   
        const response = await fetch(
          `http://localhost:4000/api/real/Listingsby?catSlug=${catSlug || ""}`
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
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
     
     {catSlug && catSlug !== 'car' ? (
  data.reals.map((item) => (
    (catSlug === "house" && <ResidentCardCol key={item._id} data={item} catSlug="house" />) ||
    (catSlug === "villa" && <ResidentCardCol key={item._id} data={item} catSlug="villa" />) ||
    (catSlug === "Apartment" && <ResidentCardCol key={item._id} data={item} catSlug="Apartment" />) ||
    (catSlug === "Office space" && <ResidentCardCol key={item._id} data={item} catSlug="Office" />) 
  ))
) : (
  data.cars.map((item) => (
    <CarCard key={item._id} data={item} />
  ))
)}

      
    </div>
  )}
</section>

  );
};

export default PropertiesFilter;
 //  useEffect(() => {
      //    const fetchData = async () => {
      //      setLoading(true);
      //      let response;
      //      try {
      //        if (catSlug === 'car') {
      //          response = await fetch(
      //            `http://127.0.0.1:4000/api/car/Cars`
      //          );
      //        } else {
      //          response = await fetch(
      //            `http://localhost:4000/api/real/RealEstats?catSlug=${catSlug}`
      //          );
      //        }
            //
      //        if (!response.ok) {
      //          throw new Error("Failed to fetch data");
      //        }
      //        const res = await response.json();
      //        setData(res);
      //      } catch (error) {
      //        console.error("Error fetching data:", error);
      //      } finally {
      //        // Simulate a delay of 3 seconds before setting loading to false
      //        setTimeout(() => {
      //          setLoading(false);
      //        }, 3000);
      //      }
      //    };
        //
      //    fetchData();
      //  }, [catSlug]);