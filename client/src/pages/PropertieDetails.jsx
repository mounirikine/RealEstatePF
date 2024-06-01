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
import { IoArrowForward } from "react-icons/io5";
import { useTranslation } from "react-i18next";



const PropertyDetails = ({ userInfo }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [text,setText] = useState('');
  const [like,setLike] = useState(null)
  const [likes,setLikes] = useState([]);
  const { t } = useTranslation('global');

  useEffect(() => {
    const fetchDataAndComments = async () => {
      await fetchData();
      fetchComments(); // Assuming fetchComments() does not return a promise
    };
  
    fetchDataAndComments();
  }, [id]);
  
  useEffect(() => {
    if (Array.isArray(likes) && likes.includes(window.localStorage.getItem("userID"))) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [likes]);


  const setterlike = ()=>{
    if (Array.isArray(likes) && likes.includes(window.localStorage.getItem("userID"))) {
      setLike(true);
    } else {
      setLike(false);
    }
  }
  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:4000/api/real/get-real/${id}`
      );
      const response = await res.json();

      if (Array.isArray(response)) {
        setData(response);
        setLikes(response.likes);
      } else {
        setData([response]);
        setLikes(response.likes);
      }

      setLoading(false);
    } catch (err) {
  
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

      } else {
        setComments([response]);
      }

      setLoading(false);
    } catch (err) {

      setError("Error fetching data");
      setLoading(false);
    }
  };
const handleComment = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const access_token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      .split("=")[1];

    const res = await fetch("http://localhost:4000/api/comment/create-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        userRef: window.localStorage.getItem("userID"),
        id,
        access_token,
      }),
    });

    const data = await res.json();
    toast.success(data);

    // Refetch comments after successful comment creation
    fetchComments();
  } catch (error) {

  }

  setLoading(false);
};


const toggleLike = async () => {
  try {
    const access_token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      .split("=")[1];

    const res = await fetch("http://localhost:4000/api/real/toggle-like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        realId: id,
        userId: window.localStorage.getItem("userID"),
    
        access_token,
      }),
    });

    const data = await res.json();


    // Ensure the like count is updated properly
    setLikes(data.likes);
    setterlike();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <Header userInfo={userInfo} />
      <section className="hero py-32">
      <h1 className="text-3xl lg:text-5xl font-bold text-white">
                  {data.length > 0 && data[0].title}
                </h1>
</section>
      <section className="py-20 md:py-10 bg-white min-h-screen md:pt-24 text-black " >
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
                    className="w-full rounded-xl h-[240px] "
                    alt=""
                  />
                   <button
          className="absolute bottom-4 right-3 px-3 lg:px-6 border bg-gray-100 py-3 rounded-lg font-bold"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          {t('Show All Images')}
        </button>

        <dialog
          id="my_modal_2"
          className="modal mt-5 flex items-center justify-center w-11/12 mx-auto"
        >
          <div className=" bg-white px-2 rounded-3xl sm:px-10">
            <form method="dialog" className="modal-backdrop py-3">
              <button className="text-white flex  justify-end">
                <span className=" px-7 bg-gray-100 py-1 rounded-lg text-black border">{t('Close')}</span>
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
                <a key={index} href={`#item${index}`} className="px-3 bg-violet-600 text-white rounded-md">
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
              
              <div className="text-center lg:text-right mt-4 lg:mt-0 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end gap-4">
              {like  === true ? (
  <button onClick={toggleLike} className="flex items-center justify-between gap-2 font-bold border px-6 py-2 rounded-lg border-black">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
    </svg>
  
    {likes?.length }
  </button>
) : (
  <button onClick={toggleLike} className="flex items-center justify-between gap-2 font-bold border px-6 py-2 rounded-lg border-black">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
    </svg>  
   
    {likes?.length}

  </button>
)}


  <button className="flex items-center justify-between gap-2 font-bold border px-6 py-2 rounded-lg border-black">
    {t('Share')}
    <FaShareAlt />
  </button>
</div>

            </div>

            <div className="bg-violet-950 text-white w-full border rounded-xl px-6 py-4 flex flex-wrap items-center justify-center lg:justify-between">
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center mb-4 lg:mb-0">
                <h1 className="text-center lg:text-left">{t('Bedrooms')}</h1>
                <h1 className="flex items-center gap-2 justify-center text-xl">
                  <FaBed className="text-2xl" />{" "}
                  {data.length > 0 && data[0].rooms}
                </h1>
              </div>
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center mb-4 lg:mb-0">
                <h1 className="text-center lg:text-left">{t('Bathrooms')}</h1>
                <h1 className="flex items-center gap-2 justify-center text-xl">
                  <FaBath className="text-2xl" />{" "}
                  {data.length > 0 && data[0].bathrooms}
                </h1>
              </div>
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center mb-4 lg:mb-0">
                <h1 className="text-center lg:text-left">{t('Square Area')}</h1>
                <span className="flex items-center gap-2 justify-center text-xl">
                  <FaRegSquare className="text-2xl" />
                  {data.length > 0 && data[0].area}m²
                </span>
              </div>
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center">
                <h1 className="text-center lg:text-left">{t('Kitchen')}</h1>
                <h1 className="flex items-center gap-2 justify-center text-xl">
                  <TbToolsKitchen3 className="text-2xl" />{" "}
                  {data.length > 0 && data[0].kitchen}
                </h1>
              </div>
            </div>

            <div className="py-10">
              <h1 className="text-3xl mt-5">{t('Description')}</h1>

              <p className="pt-10 ">{data.length > 0 && data[0].description}</p>
            </div>

            <div className="py-5 px-6">
              <hr className="border border-black" />
            </div>

            <div className="py-5">
              <h1 className="text-3xl font-bold text-center lg:text-left">
                {t('Property Details')}
              </h1>

              <div className="w-full mb-4 rounded-xl mt-6">
                <div className="w-full bg-violet-950 text-white px-5 rounded-e-full py-3 text-xl text-center lg:text-left">
                  {t('Interior Details')}
                </div>
                <div className="w-full py-3">
                  <table className="w-full table-auto">
                    <thead className="py-2">
                      <tr className="border-b">
                        <th className="text-center">{t('Bathrooms')}</th>
                        <th className="text-center">{t('Bedrooms')}</th>
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
                <div className="w-full bg-violet-950 text-white px-5 rounded-e-full py-3 text-xl text-center lg:text-left">
                  {t('Land Area Size')}
                </div>
                <div className="w-full py-3">
                  <table className="w-full table-auto">
                    <thead className="py-2">
                      <tr className="border-b">
                        <th className="text-center">{t('Size')}</th>
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
                <div className="w-full bg-violet-950 text-white px-5 rounded-e-full py-3 text-xl text-center lg:text-left">
                  {t('Year Build')}
                </div>
                <div className="w-full py-3">
                  <table className="w-full ">
                    <thead className="py-2">
                      <tr className="border-b">
                        <th className="text-center">{t('Established Since')}</th>
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
                <h1 className="text-3xl font-bold">{t('View Map')}</h1>
              </div>
              <div className="relative aspect-w-16 w-full mb-14 ">
  <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full">
    <iframe
      className="w-full h-[400px] lg:h-[800px]"
      src="https://maps.google.com/maps?width=720&amp;height=500&amp;hl=en&amp;q=hay%20elmassira%20drarga%20agadire,Agadir+(Finder)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      loading="lazy"
    ></iframe>
    
  </div>
</div>
            </div>
            <div>
              <div className="py-5 text-center lg:text-left">
                <h1 className="text-3xl font-bold">{t('Comments')}</h1>
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
                      className="textarea textarea-bordered textarea-xs w-full max-w-xs lg:max-w-full text-black bg-gray-100"
                    ></textarea>
                    <h5 onClick={handleComment} className="btn text-2xl rounded-xl ml-1 bg-violet-300 text-black hover:bg-violet-400 border-none" >
                      {loading ? (
                      <span className="loading loading-spinner loading-md "></span>
                    ) : (
                      <FiPlus />
                    )}</h5>
                  </div>
                  {comments.map((item)=>(
                    <div key={item._id} className="flex items-center justify-center lg:justify-start mb-4 px-10 mt-10" >
                    <div className="avatar">
                      <div className="w-10 mr-2 rounded-full">
                        <img src={item.userRef?.avatar} />
                      </div>
                    </div>

                    <p
                    
                      
                      className="textarea textarea-bordered   bg-white flex items-center text-lg border-none  textarea-xs w-full max-w-xs lg:max-w-full"
                    >{item.text}</p>
                   
                  </div>
                  ))}
                  
                </main>
            </div>



          </div>
          <div className="md:w-3/12  ">
            <main className="flex py-10">
              <div className="w-full  border-2 px-5 py-6 rounded-xl bg-violet-50 border-black">
                <h1>{t('Price')}</h1>

                <div className="text-4xl font-bold">
                  ${data.length > 0 && data[0].regularPrice}
                </div>

                <hr className="my-5 border border-black" />

                <div>
                  <h1 className="text-xl font-bold">{t('Request a home tour')}</h1>
                </div>

                <div className="pt-10">
                  <a
                    href={`https://wa.me/${
                      data.length > 0 && data[0].userNumber
                    }?text=Hello How Can I Get More Info About This ?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-white  gap-1  bg-green-600 px-3 py-3 rounded-3xl cursor-pointer"
                  >
                    {t('Send Message')} <FaWhatsapp className="text-xl" />
                  </a>
                </div>
              </div>
            </main>
          </div>
        </main>
        
        
        <main className="py-14 px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="py-5 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold">{t('Similar Listings')}</h1>
          </div>

          <div>
            <RelatedItems
              catSlug={data.length > 0 && data[0].catSlug}
              idItem={data.length > 0 && data[0]._id}
            />
          </div>

          <div className="w-full flex items-center justify-center py-10">
          <div className='w-full flex items-center justify-center py-5 gap-1'>
        <Link to='/properties' className=' px-10 bg-black py-2   rounded-full flex items-center gap-2 text-white transition-all '>{t('Load More Listing')}   </Link>
        <Link to='/properties' className=" p-3 hover:scale-105 transition-all  bg-black text-white rounded-full flex items-center justify-center gap-2 -rotate-45 hover:rotate-0 "> <IoArrowForward  /></Link>

      </div>
          </div>
        </main>



      </section>
      <Footer />
    </>
  );
};

export default PropertyDetails;
