import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";

const RelatedItems = ({ catSlug, idItem }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4000/api/real/RealEstats?catSlug=${catSlug}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const res = await response.json();

        // Filter data based on idItem
        const filteredData = res.filter((item) => item._id !== idItem);

        // Shuffle the array randomly
        const shuffledData = filteredData.sort(() => Math.random() - 0.5);

        // Slice the array to get the first 8 items
        const first8Items = shuffledData.slice(0, 8);

        setData(first8Items);
        console.log(first8Items);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [catSlug, idItem]);

  return (
    <>
      <section className="px-2 py-10 flex items-center justify-center">
        {loading && <span className="loading loading-spinner loading-lg text-primary"></span>}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-20">
            {data.map((item) => (
              <FilterCard key={item._id} data={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default RelatedItems;
