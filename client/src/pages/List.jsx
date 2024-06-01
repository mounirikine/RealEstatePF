import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const List = ({ userInfo }) => {
  const { id } = useParams();
  const [data, setData] = useState({ cars: [], reals: [] });
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {

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

const { t } = useTranslation('global');

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

      const data = await response.json();
 
      

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
  
  


  return (
    <>
      <Header userInfo={userInfo} />
      <section className="hero min-h-screen text-white pt-44">
        <main className="py-10 px-10 ">
          <h1 className="py-10 text-xl lg:text-5xl font-bold text-center">{t('Your List Property')}</h1>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 :text-gray-400">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    {t('Property Name')}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t('PUB DATE')}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t('Category')}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t('Price')}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t('Action')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Map over cars */}
                {data.cars.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd::bg-gray-900 even:bg-gray-50 even::bg-gray-800 border-b :border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                      {item.title}
                    </td>
                    <td className="px-6 py-4">{item.createdAt}</td>
                    <td className="px-6 py-4">Car</td>
                    <td className="px-6 py-4">{`$ ${item.price}`}</td>
                    <td className="px-6 py-4 flex items-center gap-2">
               
                            <button 
                              onClick={() => handleDeleteCar(item._id)}
                              className="font-medium py-3 rounded-full  px-3 :text-blue-500 hover:underline"
                            >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                            </button>
                            <Link
                              to={`/Update/${item._id}`}
                              className="font-medium py-3 px-3 rounded-full  text-white :text-blue-500 hover:underline"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
                            </Link>
                       
                    </td>
                  </tr>
                ))}
                {/* Map over reals */}
                {data.reals.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd::bg-gray-900 even:bg-gray-50 even::bg-gray-800 border-b :border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                      {item.title}
                    </td>
                    <td className="px-6 py-4">{item.createdAt}</td>
                    <td className="px-6 py-4">Real Estate</td>
                    <td className="px-6 py-4">{`$ ${item.regularPrice}`}</td>
                    <td className="px-6 py-4 flex items-center gap-2">

                                            
                         
                            <button 
                              onClick={() => handleDeleteReal(item._id)}
                              className="font-medium py-3 rounded-full  px-3 :text-blue-500 hover:underline"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                            </button>
                            <Link
                              to={`/Update0/${item._id}`}
                              className="font-medium py-3 px-3 rounded-full :text-blue-500 hover:underline"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

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
