import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllStores = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const getStores = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/store/Stores");
        const data = await res.json();
        setStores(data);

        console.log(stores);
      } catch (err) {
        console.log(err);
      }
    };
    getStores();
  }, []);
  return <>

  <div className="flex flex-col gap-1">
    <h1 className="py-5 font-bold px-2 rounded-lg bg-violet-50 mb-4">Most Stores</h1>
    {
        stores && stores.map((item,index)=>(
            <Link to={`/SingleStore/${item._id}`} key={index}>
                <span className="flex items-center gap-2 -b rounded-lg py-1 bg-gray-50">
                    <img src={item.BrandImg} className="h-10 rounded-full" alt=""  />
                    <h1>{item.title}</h1>
                </span>
                <hr className="py-1" />
            </Link>
        ))
    }
  </div>
  
  </>;
};

export default AllStores;
