import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { Link, useParams } from "react-router-dom";

const List = ({ userInfo }) => {
  const { id } = useParams();
  const [data, setData] = useState({ cars: [], reals: [] });
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    console.log(id)
    setLoading(true);
 
    try {
      const response = await fetch(`http://localhost:4000/api/real/sellerListing/${id}`,{
        method: 'GET',
     }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const res = await response.json();
      setData(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [id]);


  const handleDeleteReal = async (productId) => {
    console.log(productId)
    const access_token = document.cookie.split('; ').find(row => row.startsWith('access_token=')).split('=')[1];
    try {
      const response = await fetch(`http://localhost:4000/api/real/delete-real/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({

          access_token
        }),
      });
  console.log(access_token)
      const data = await response.json();
 console.log(data)
      

    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const handleDeleteCar = async (productId) => {
    console.log(productId);
    const access_token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      .split('=')[1];
    try {
      const response = await fetch(
        `http://localhost:4000/api/car/delete-car/${productId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_token,
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to delete car: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  
  // Console log the combined data
console.log(data)


  return (
    <>
      <Header userInfo={userInfo} />
      <section className="bg-white min-h-screen">
        <main className="py-10 px-10">
          <h1 className="py-10 text-xl lg:text-5xl font-bold text-center">Your List Property</h1>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Property Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PUB DATE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Map over cars */}
                {data.cars.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.title}
                    </td>
                    <td className="px-6 py-4">{item.createdAt}</td>
                    <td className="px-6 py-4">Car</td>
                    <td className="px-6 py-4">{`$ ${item.price}`}</td>
                    <td className="px-6 py-4 flex items-center gap-2">
               
                            <button 
                              onClick={() => handleDeleteCar(item._id)}
                              className="font-medium py-3 rounded-full bg-violet-200 px-3 dark:text-blue-500 hover:underline"
                            >
                              <FaRegTrashAlt className="text-black text-lg" />
                            </button>
                            <Link
                              to={`/Update/${item._id}`}
                              className="font-medium py-3 px-3 rounded-full bg-black text-white dark:text-blue-500 hover:underline"
                            >
                              <FaEdit className=" text-lg" />
                            </Link>
                       
                    </td>
                  </tr>
                ))}
                {/* Map over reals */}
                {data.reals.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.title}
                    </td>
                    <td className="px-6 py-4">{item.createdAt}</td>
                    <td className="px-6 py-4">Real Estate</td>
                    <td className="px-6 py-4">{`$ ${item.regularPrice}`}</td>
                    <td className="px-6 py-4 flex items-center gap-2">

                                            
                         
                            <button 
                              onClick={() => handleDeleteReal(item._id)}
                              className="font-medium py-3 rounded-full bg-green-600 px-3 dark:text-blue-500 hover:underline"
                            >
                              <FaRegTrashAlt className="text-black text-lg" />
                            </button>
                            <Link
                              to={`/Update0/${item._id}`}
                              className="font-medium py-3 px-3 rounded-full bg-red-500 dark:text-blue-500 hover:underline"
                            >
                              <FaEdit className="text-black text-lg" />
                            </Link>
                      
                   

                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default List;
