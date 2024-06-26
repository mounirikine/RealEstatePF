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



const OthersDetails = ({ userInfo }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [text,setText] = useState('');
  const [like,setLike] = useState(null)
  const [likes,setLikes] = useState([]);

  useEffect(() => {
    const fetchDataAndComments =  () => {
       fetchData();
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
        `http://127.0.0.1:4000/api/other/get-other/${id}`
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
    console.log(error);
  }

  setLoading(false);
};


const toggleLike = async () => {
  try {
    const access_token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      .split("=")[1];

    const res = await fetch("http://localhost:4000/api/other/toggle-like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otherId: id,
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
console.log(like)

console.log(likes)
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
                <span className="bg-violet-600 px-14 py-3 rounded-lg">Close</span>
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
                <a key={index} href={`#item${index}`} className="px-5 bg-violet-600 text-white rounded-md">
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
    Share
    <FaShareAlt />
  </button>
</div>

            </div>

            

            <div className="py-10">
              <h1 className="text-3xl mt-5">Description</h1>

              <p className="pt-10 ">{data.length > 0 && data[0].description}</p>
            </div>

            <div className="py-5 px-6">
              <hr className="border border-black" />
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
                  {comments.map((item)=>(
                    <div key={item._id} className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="avatar">
                      <div className="w-12 mr-2 rounded-full">
                        <img src={item.userRef?.avatar} />
                      </div>
                    </div>

                    <p
                    
                      
                      className="textarea textarea-bordered textarea-xs w-full max-w-xs lg:max-w-full"
                    >{item.text}</p>
                   
                  </div>
                  ))}
                  
                </main>
            </div>



          </div>
          <div className="md:w-3/12">
            <main className="flex py-10">
              <div className="w-full  border-2 px-5 py-6 rounded-xl bg-violet-50 border-black">
                <h1>Price</h1>

                <div className="text-4xl font-bold">
                  ${data.length > 0 && data[0].price}
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
                    className="flex items-center justify-center text-white  gap-1  bg-violet-600 px-3 py-3 rounded-3xl cursor-pointer"
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

export default OthersDetails;
