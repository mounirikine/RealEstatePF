import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

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
      <section className="py-10 md:py-20 bg-white">
        <main className="md:pt-20 px-4 md:px-20">
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-500 ">
              {data.address}, {data.city}, {data.country}
            </p>
            <h1 className="text-4xl md:text-6xl py-4 md:py-8 font-bold ">
              {data.title}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center mb-4 md:mb-0">
              <span className="border bg-violet-100 font-bold px-6 md:px-10 py-3 md:py-4 rounded-xl">
                {data.bathrooms} Bathrooms
              </span>
              <span className="border bg-violet-100 font-bold px-6 md:px-10 py-3 md:py-4 rounded-xl">
                {data.rooms} Bedrooms
              </span>
              <span className="border bg-violet-100 font-bold px-6 md:px-10 py-3 md:py-4 rounded-xl">
                {data.kitchen} Kitchen
              </span>
            </div>
            <div className="px-3">
              <div className="bg-gradient-to-r flex items-center justify-center gap-2 from-violet-500 via-violet-400 text-white to-indigo-700 text-center rounded-2xl py-2 md:py-3 border w-full md:w-[300px] text-white font-bold text-2xl md:text-3xl">
                <span>$ </span>
                <span>{data.regularPrice}</span>
              </div>
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

          <div className="py-20">
            <h1 className="text-5xl pb-7">Property Seller</h1>
            <button>
              {" "}
              <a
                href="https://wa.me/+212679985221?text=Hello How Can I Get More Info About This ?"
                target="_blank"
                className="button px-20 py-3 flex items-center gap-1 text-white rounded-xl"
              >
                <FaWhatsapp className="text-xl" /> <span>Send Message</span>
              </a>
            </button>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default PropertyDetails;
