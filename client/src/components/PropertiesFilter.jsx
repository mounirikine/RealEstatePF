import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import CarCard from "./CarCard";
import ResidentCardCol from "./ResidentCardCol";
import OtherCard from "./OtherCard";
import OtherCardCol from "./OtherCardCol";

const PropertiesFilter = ({ catSlug, minPrice, country, maxPrice }) => {
  const [data, setData] = useState({ cars: [], reals: [], others: [] });
  const [loading, setLoading] = useState(false);

  console.log(catSlug, minPrice, country, maxPrice);

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
  }, [catSlug, minPrice, country, maxPrice]);

  const isEmpty = () => {
    return data.cars.length === 0 && data.reals.length === 0 && data.others.length === 0;
  };

  return (
    <section className="px-2 md:px-20 py-10 flex items-center justify-center min-h-screen">
      {loading ? (
        <span className="loading loading-spinner loading-lg text-black"></span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-20">
          {isEmpty() ? (
            <div className="flex items-center justify-center col-span-full">
              <h1 className="text-2xl font-bold text-center text-black">No items found</h1>
            </div>
          ) : (
            <>
              {catSlug && catSlug !== "car"
                ? data.reals.map((item) => {
                    if (catSlug === "house") {
                      return <ResidentCardCol key={item._id} data={item} catSlug="house" />;
                    } else if (catSlug === "villa") {
                      return <ResidentCardCol key={item._id} data={item} catSlug="villa" />;
                    } else if (catSlug === "apartment") {
                      return <ResidentCardCol key={item._id} data={item} catSlug="apartment" />;
                    } else if (catSlug === "office") {
                      return <ResidentCardCol key={item._id} data={item} catSlug="office" />;
                    } else if (catSlug === "Other Products") {
                      return null; // Skip rendering others here, will be handled below
                    } else {
                      return null;
                    }
                  })
                : data.cars.map((item) => <CarCard key={item._id} data={item} />)}

              {(catSlug === "bycicle" ||
                catSlug === "clothes" ||
                catSlug === "music" ||
                catSlug === "devices" ||
                catSlug === "furnishing") &&
                data.others.map((item) => <OtherCardCol key={item._id} data={item} />)}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default PropertiesFilter;
