import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { TbToolsKitchen3 } from "react-icons/tb";


const PropertyDetails = ({ userInfo }) => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:4000/api/real/get-real/${id}`
        );
        const response = await res.json();
        setData(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Header userInfo={userInfo} />
      <section className="py-32  md:py-20 bg-white">
        <main className="md:pt-20 px-4 md:px-20">
          <div>
            <p className="text-xl  md:text-2xl lg:text-3xl text-gray-500 ">
              {data.address}, {data.city}, {data.country}
            </p>
            <h1 className="text-4xl text-center md:text-left md:text-6xl py-4 md:py-8 font-bold ">
              {data.title}           
             
              <div className="chat text-xl   flex items-center justify-center md:justify-start">
  <div className="chat-bubble ">$ {data.regularPrice} </div>
</div>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center mb-4 md:mb-0">
              <span className="border flex items-center gap-1 bg-violet-100 font-bold px-6 md:px-10 py-3 md:py-4 rounded-xl">
                {data.bathrooms} <FaBath />
              </span>
              <span className="border flex items-center gap-1 bg-violet-100 font-bold px-6 md:px-10 py-3 md:py-4 rounded-xl">
                {data.rooms} <IoBed />
              </span>
              <span className="border flex items-center gap-1 bg-violet-100 font-bold px-6 md:px-10 py-3 md:py-4 rounded-xl">
                {data.kitchen} <TbToolsKitchen3 />
              </span>
            </div>

            <div className="px-3">
            <button>
              {" "}
              <a
                href="https://wa.me/+212679985221?text=Hello How Can I Get More Info About This ?"
                target="_blank"
                className="button px-20 py-4 text-xl flex items-center gap-1 text-white rounded-xl"
              >
                <FaWhatsapp className="text-xl" /> <span>Send Message</span>
              </a>
            </button>
            </div>
          </div>

          <div>
            <div className="carousel w-full md:w-12/12 h-[300px] md:h-[500px] mt-6 md:mt-10 rounded-xl">
              {data.imageUrls && data.imageUrls.length > 1 ? (
                data.imageUrls.map((img, index) => (
                  <div
                    key={index}
                    id={`slide${index + 1}`}
                    className="carousel-item relative w-full"
                  >
                    <img
                      src={img}
                      alt={`slide${index + 1}`}
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 md:left-5 right-3 md:right-5 top-1/2">
                      <a href={`#slide${index}`} className="btn btn-circle">
                        ❮
                      </a>
                      <a href={`#slide${index + 2}`} className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="carousel-item relative w-full">
                  <img
                    src={data.imageUrls && data.imageUrls[0]}
                    alt="single-image"
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="py-6 md:py-10">
            <h1 className="text-3xl md:text-5xl">About property</h1>
            <p className="w-full md:w-10/12 py-4 md:py-10 text-base md:text-xl">
              {data.description}
            </p>
          </div>

          <div className="py-20 md:px-10">
            <h1 className="text-5xl pb-7">Area & Lot</h1>
           
                
          

<div className="relative overflow-x-auto">
    <table className="w-full text-lg md:text-2xl mt-14 text-left rtl:text-right text-gray-500 dark:text-gray-400">

        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    Location
                </td>
                <td className="px-6 py-4">
                {data.address}
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    Status
                </th>
                <td className="px-6 py-4">
                {data.type}
                </td>
              
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Area, Sq.Ft
                </th>
                <td className="px-6 py-4">
                    {data.area}
                </td>

            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Type
                </th>
                <td className="px-6 border-b py-4">
                    {data.catSlug}
                </td>

            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Year Built
                </th>
                <td className="px-6 py-4">
                    {data.yearBuilt}
                </td>

            </tr>
        </tbody>
    </table>
</div>

          </div>

          <div className="py-20 md:px-10">
            <h1 className="text-5xl pb-7">Interior</h1>
           
                
          

<div className="relative overflow-x-auto">
    <table className="w-full text-lg md:text-2xl mt-14 text-left rtl:text-right text-gray-500 dark:text-gray-400">

        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    Bedrooms
                </td>
                <td className="px-6 py-4">
                {data.rooms}
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    Bathrooms
                </th>
                <td className="px-6 py-4">
                {data.bathrooms}
                </td>
              
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Kitchen
                </th>
                <td className="px-6 py-4">
                    {data.kitchen}
                </td>

            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Parking
                </th>
                <td className="px-6 border-b py-4">
                    {data.parking || 0}
                </td>

            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Garage
                </th>
                <td className="px-6 py-4">
                    {data.garage}
                </td>

            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Park Space
                </th>
                <td className="px-6 py-4">
                    {data.parkSpace}
                </td>

            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className=" py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Furnished
                </th>
                <td className="px-6 py-4">
                    {data.furnished ? 'Yes' : 'No'}
                </td>

            </tr>
        </tbody>
    </table>
</div>

          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default PropertyDetails;
