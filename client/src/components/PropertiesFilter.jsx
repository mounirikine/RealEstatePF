import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import CarCard from "./CarCard";
import ResidentCardCol from "./ResidentCardCol";
import OtherCard from "./OtherCard";
import OtherCardCol from "./OtherCardCol";

const PropertiesFilter = ({ catSlug ,minPrice,country,maxPrice}) => {
  const [data, setData] = useState({ cars: [], reals: [] ,others:[]});
  const [loading, setLoading] = useState(false);

     console.log(catSlug ,minPrice,country,maxPrice)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

  
      try {
   
        const response = await fetch(
          `http://localhost:4000/api/real/Listingsby?catSlug=${catSlug || ""}&country=${country || ""}&maxPrice=${maxPrice || ""}&minPrice=${minPrice || ""}`
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
        }, 500);
      }
    };
  
    fetchData();
  }, [catSlug ,minPrice,country,maxPrice]);
  return (
<section className="px-2 md:px-20 py-10 flex items-center justify-center min-h-screen">
  {loading ? (
    <span className="loading loading-spinner loading-lg text-black"></span>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-20">
      {catSlug && catSlug !== 'car' ? (
        data.reals.map((item) => {
          if (catSlug === "house") {
            return <ResidentCardCol key={item._id} data={item} catSlug="house" />;
          } else if (catSlug === "villa") {
            return <ResidentCardCol key={item._id} data={item} catSlug="villa" />;
          } else if (catSlug === "apartment") {
            return <ResidentCardCol key={item._id} data={item} catSlug="Apartment" />;
          } else if (catSlug === "Office space") {
            return <ResidentCardCol key={item._id} data={item} catSlug="Office" />;
          } else if (catSlug === "Other Products") {
            return null; // Skip rendering others here, will be handled below
          } else {
            return null;
          }
        })
      ) : (
        data.cars.map((item) => (
          <CarCard key={item._id} data={item} />
        ))
      )}
       {(catSlug === "bycicle" || catSlug === "clothes" || catSlug === "music" || catSlug === "devices" || catSlug === "furnishing") && data.others.map((item) => (
        <OtherCardCol key={item._id} data={item} />
      ))}
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