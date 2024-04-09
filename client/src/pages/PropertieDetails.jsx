import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaArrowRight,
  FaBath,
  FaBed,
  FaRegSquare,
  FaShareAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { toast } from "react-toastify";
import RelatedItems from "../components/RelatedItems";
import { FiPlus } from "react-icons/fi";



const PropertyDetails = ({ userInfo }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [text,setText] = useState('');
console.log(comments)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:4000/api/real/get-real/${id}`
        );
        const response = await res.json();

        if (Array.isArray(response)) {
          setData(response);

          console.log(data);
        } else {
          setData([response]);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error fetching data");
        setLoading(false);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:4000/api/comment/comments/${id}`
        );
        const response = await res.json();

        if (Array.isArray(response)) {
          setComments(response);

          console.log(data);
        } else {
          setComments([response]);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchComments();
    fetchData();
  }, [id]);



  const handleComment = async (e) => {
    e.preventDefault();
    setLoading(true)
  
    try {
  
  
      const access_token = document.cookie.split('; ').find(row => row.startsWith('access_token=')).split('=')[1];
  
  
      const res = await fetch('http://localhost:4000/api/comment/create-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({
          text,
          userRef: window.localStorage.getItem("userID"),

       id,
        
          access_token
        }),
      });
  
      const data = await res.json();
      toast.success(data)
      
      
  
    } catch (error) {
      console.log(error);
    }
  
    setLoading(false)
  };
  return (
    <>
      <Header userInfo={userInfo} />
      <section className="py-20 md:py-14 bg-white min-h-screen">
        <main className="px-4 md:px-4 lg:px-32 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="md:w-9/12">
            {data.length > 0 && data[0].imageUrls && (
              <img
                src={data[0].imageUrls[0]}
                className="w-full rounded-xl h-[499px]"
                alt=""
              />
            )}
          </div>
          <div className="md:w-3/12 flex flex-col gap-5">
            {data.length > 0 && data[0].imageUrls && (
              <>
                <img
                  src={data[0].imageUrls[1]}
                  className="w-full rounded-xl h-[240px]"
                  alt=""
                />
                <div className="relative">
                  <img
                    src={data[0].imageUrls[1]}
                    className="w-full rounded-xl h-[240px]"
                    alt=""
                  />
                   <button
          className="absolute bottom-4 right-3 px-3 lg:px-6 bg-white py-3 rounded-lg font-bold"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Show All Images
        </button>

        <dialog
          id="my_modal_2"
          className="modal mt-5 flex items-center justify-center w-11/12 mx-auto"
        >
          <div className="h-screen bg-white px-2 sm:px-10">
            <form method="dialog" className="modal-backdrop py-7">
              <button className="text-white">
                <span className="bg-black px-14 py-3 rounded-lg">Close</span>
              </button>
            </form>

            <div className="carousel w-full">
              {data[0].imageUrls.map((item, index) => (
                <div key={index} id={`item${index}`} className="carousel-item w-full h-[75vh]">
                  <img
                    src={item}
                    className="w-full"
                    alt={`Image ${index}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              {data[0].imageUrls.map((item, index) => (
                <a key={index} href={`#item${index}`} className="px-5 bg-black text-white rounded-md">
                  {index + 1} 
                </a>
              ))}
            </div>
          </div>
        </dialog>
                </div>
              </>
            )}
          </div>
        </main>
        <main className="px-4 md:px-6 lg:px-32 flex flex-col lg:flex-row justify-center gap-6">
          <div className="md:w-9/12">
            <div className="flex flex-col lg:flex-row justify-between items-center py-10">
              <div className="text-center lg:text-left lg:mr-8">
                <h1 className="text-3xl lg:text-5xl font-bold">
                  {data.length > 0 && data[0].title}
                </h1>
                <h1 className="text-lg lg:text-xl text-gray-600 pt-2 lg:pt-4">
                  {data.length > 0 && data[0].address},
                  {data.length > 0 && data[0].city},
                  {data.length > 0 && data[0].country}
                </h1>
              </div>
              <div className="text-center lg:text-right mt-4 lg:mt-0">
                <button className="flex items-center justify-between gap-2 font-bold border px-6 py-2 rounded-lg border-black">
                  Share
                  <FaShareAlt />
                </button>
              </div>
            </div>

            <div className="bg-violet-50 w-full border rounded-xl px-6 py-4 flex flex-wrap items-center justify-center lg:justify-between">
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center mb-4 lg:mb-0">
                <h1 className="text-center lg:text-left">Bedrooms</h1>
                <h1 className="flex items-center gap-2 justify-center text-xl">
                  <FaBed className="text-2xl" />{" "}
                  {data.length > 0 && data[0].rooms}
                </h1>
              </div>
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center mb-4 lg:mb-0">
                <h1 className="text-center lg:text-left">Bathrooms</h1>
                <h1 className="flex items-center gap-2 justify-center text-xl">
                  <FaBath className="text-2xl" />{" "}
                  {data.length > 0 && data[0].bathrooms}
                </h1>
              </div>
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center mb-4 lg:mb-0">
                <h1 className="text-center lg:text-left">Square Area</h1>
                <span className="flex items-center gap-2 justify-center text-xl">
                  <FaRegSquare className="text-2xl" />
                  {data.length > 0 && data[0].area}m²
                </span>
              </div>
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center">
                <h1 className="text-center lg:text-left">Kitchen</h1>
                <h1 className="flex items-center gap-2 justify-center text-xl">
                  <TbToolsKitchen3 className="text-2xl" />{" "}
                  {data.length > 0 && data[0].kitchen}
                </h1>
              </div>
            </div>

            <div className="py-10">
              <h1 className="text-3xl mt-5">Description</h1>

              <p className="pt-10 ">{data.length > 0 && data[0].description}</p>
            </div>

            <div className="py-5 px-6">
              <hr className="border border-black" />
            </div>

            <div className="py-5">
              <h1 className="text-3xl font-bold text-center lg:text-left">
                Property Details
              </h1>

              <div className="w-full mb-4 rounded-xl mt-6">
                <div className="w-full bg-violet-100 px-5 rounded-e-full py-3 text-xl text-center lg:text-left">
                  Interior Details
                </div>
                <div className="w-full py-3">
                  <table className="w-full table-auto">
                    <thead className="py-2">
                      <tr className="border-b">
                        <th className="text-center">Bathrooms</th>
                        <th className="text-center">Bedrooms</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="text-center lg:text-center pt-2 text-xl">
                          {data.length > 0 && data[0].bathrooms}
                        </td>
                        <td className="text-center lg:text-center pt-2 text-xl">
                          {data.length > 0 && data[0].rooms}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="w-full mb-4 rounded-xl mt-6">
                <div className="w-full bg-violet-100 px-5 rounded-e-full py-3 text-xl text-center lg:text-left">
                  Land Area Size
                </div>
                <div className="w-full py-3">
                  <table className="w-full table-auto">
                    <thead className="py-2">
                      <tr className="border-b">
                        <th className="text-center">Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="text-center lg:text-center pt-2 text-xl">
                          {data.length > 0 && data[0].area}
                          <span className="text-sm">m²</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="w-full mb-4 rounded-xl mt-6">
                <div className="w-full bg-violet-100 px-5 rounded-e-full py-3 text-xl text-center lg:text-left">
                  Year Build
                </div>
                <div className="w-full py-3">
                  <table className="w-full ">
                    <thead className="py-2">
                      <tr className="border-b">
                        <th className="text-center">Established Since</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="text-center lg:text-center pt-2 text-xl">
                          {data.length > 0 && data[0].yearBuilt}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <div className="py-5 text-center lg:text-left">
                <h1 className="text-3xl font-bold">View Map</h1>
              </div>
              <main className="w-full lg:w-10/12 relative mx-auto">
                <img
                  src="https://assets-global.website-files.com/63dccc1ba88f450bf57ed4e1/63ecb989859f6a5fd823e440_Map.webp"
                  className="w-full h-auto lg:h-[400px] object-cover"
                  alt=""
                />
                
              </main>
            </div>
            <div>
              <div className="py-5 text-center lg:text-left">
                <h1 className="text-3xl font-bold">Comments</h1>
              </div>
                <main className="w-full lg:w-10/12 mx-auto">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="avatar">
                      <div className="w-12 mr-2 rounded-full">
                        <img src={userInfo?.avatar} />
                      </div>
                    </div>

                    <textarea
                      placeholder="Comment"
                      onChange={(e)=>setText(e.target.value)}
                      value={text}
                      className="textarea textarea-bordered textarea-xs w-full max-w-xs lg:max-w-full"
                    ></textarea>
                    <h5 onClick={handleComment} className="btn text-2xl rounded-xl ml-1" >{loading ? (
                      <span className="loading loading-spinner loading-md "></span>
                    ) : (
                      <FiPlus />
                    )}</h5>
                  </div>
                </main>
            </div>
          </div>
          <div className="md:w-3/12">
            <main className="flex py-10">
              <div className="w-full  border-2 px-5 py-6 rounded-xl bg-violet-50 border-black">
                <h1>Price</h1>

                <div className="text-4xl font-bold">
                  ${data.length > 0 && data[0].regularPrice}
                </div>

                <hr className="my-5 border border-black" />

                <div>
                  <h1 className="text-xl font-bold">Request a home tour</h1>
                </div>

                <div className="pt-10">
                  <a
                    href={`https://wa.me/${
                      data.length > 0 && data[0].userNumber
                    }?text=Hello How Can I Get More Info About This ?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-white  gap-1  bg-black px-3 py-3 rounded-3xl cursor-pointer"
                  >
                    Send Message <FaWhatsapp className="text-xl" />
                  </a>
                </div>
              </div>
            </main>
          </div>
        </main>
        
        
        <main className="py-14 px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="py-5 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold">Similar Listings</h1>
          </div>

          <div>
            <RelatedItems
              catSlug={data.length > 0 && data[0].catSlug}
              idItem={data.length > 0 && data[0]._id}
            />
          </div>

          <div className="w-full flex items-center justify-center py-10">
            <Link
              to="/properties"
              className="px-8 md:px-14 py-4 text-xl lg:text-2xl hover:translate-x-1 rounded-xl flex items-center gap-2 text-black"
            >
              Load More Listings <FaArrowRight />
            </Link>
          </div>
        </main>



      </section>
      <Footer />
    </>
  );
};

export default PropertyDetails;
