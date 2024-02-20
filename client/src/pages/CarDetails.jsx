import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RelatedItems from "../components/RelatedItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  FaArrowRight,
  FaBath,
  FaBed,
  FaCheckCircle,
  FaRegSquare,
  FaShareAlt,
} from "react-icons/fa";
import { IoIosBody, IoIosCloseCircle } from "react-icons/io";
import { LuFuel } from "react-icons/lu";

import {motion} from  'framer-motion'

import {
  FaCog,
  FaGasPump,
  FaKey,
  FaPalette,
  FaRoad,
  FaWhatsapp,
} from "react-icons/fa";
import { ImTicket } from "react-icons/im";
import { GiSteeringWheel } from "react-icons/gi";

import { IoMdSpeedometer } from "react-icons/io";

import { FaCalendarAlt } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { SlSpeedometer } from "react-icons/sl";
import { IoFootstepsOutline } from "react-icons/io5";
import { AiOutlineNodeIndex } from "react-icons/ai";

const CarDetails = ({ userInfo }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:4000/api/car/get-car/${id}`);
        const response = await res.json();

        if (Array.isArray(response)) {
          setData(response);
        } else {
          setData([response]);
        }

        setLoading(false);
        console.log(data);
      } catch (err) {
        console.error(err);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);





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
                  {/* <span className="absolute bottom-4 right-3 px-3 lg:px-6 bg-white py-3 rounded-lg font-bold">
                    Show All Images
                  </span> */}
                  <button className="absolute bottom-4 right-3 px-3 lg:px-6 bg-white py-3 rounded-lg font-bold" onClick={()=>document.getElementById('my_modal_3').showModal()}>Show All Images</button>
<dialog id="my_modal_3" className="modal min-h-[90vh] w-11/12 mx-auto  ">
  <div className=" min-h-[90vh] w-11/12  bg-white ">
    <form method="dialog " >
      {/* if there is a button in form, it will close the modal */}
      <button className=" text-white btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form >

   <div className="py-10">
   <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full h-full">
    <img src="https://firebasestorage.googleapis.com/v0/b/realestatepf.appspot.com/o/1707002591082car14-qgcqjcnfpk9aba3s9dq1z9f5si5k0ovmj8ewvsz6m4.jpg?alt=media&token=137ff458-3569-4553-a679-afdbdb4e1835" className="w-full h-80vh" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
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
              </div>
              <div className="text-center lg:text-right mt-4 lg:mt-0">
                <button className="flex items-center justify-between gap-2 font-bold border px-6 py-2 rounded-lg border-black">
                  Share
                  <FaShareAlt />
                </button>
              </div>
            </div>

            <div className="bg-violet-50 w-full border rounded-xl px-6 py-4 flex flex-wrap items-center justify-center lg:justify-around">
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center mb-4 lg:mb-0">
                <h1 className="text-center lg:text-left">
                  {data.length > 0 && data[0].mileage}
                </h1>
                <h1 className="flex items-center gap-2 justify-center text-xl">
                  <SlSpeedometer className="text-2xl" />{" "}
                </h1>
              </div>
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center mb-4 lg:mb-0">
                <h1 className="text-center lg:text-left">
                  {data.length > 0 && data[0].year}
                </h1>
                <h1 className="flex items-center gap-2 justify-center text-xl">
                  <FaCalendarAlt className="text-2xl" />{" "}
                </h1>
              </div>
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center mb-4 lg:mb-0">
                <h1 className="text-center lg:text-left">
                  {data.length > 0 && data[0].transmission}
                </h1>
                <span className="flex items-center gap-2 justify-center text-xl">
                  <IoFootstepsOutline className="text-2xl" />
                </span>
              </div>
              <div className="w-full lg:w-3/12 flex flex-col items-center justify-center">
                <h1 className="text-center lg:text-left">
                  {data.length > 0 && data[0].fueltype}
                </h1>
                <h1 className="flex items-center gap-2 justify-center text-xl">
                  <LuFuel className="text-2xl" />{" "}
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
                Car Details
              </h1>
              <table className="w-full my-10  bg-violet-50 rounded-sm ">
                <tbody>
                  <tr className="  dark:bg-gray-800 dark:border-gray-700 border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <span className="flex items-center gap-2 justify-between">
                        <FaCarSide /> <span>Body</span>
                      </span>
                    </th>
                    <td className="px-6 py-4">{data.body}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2 justify-between  ">
                        <FaCog /> <span>Transmission</span>
                      </span>
                    </td>
                    <td className="px-6 py-4">{data.transmission}</td>
                  </tr>
                  <tr className=" border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <span className="flex items-center gap-2 justify-between">
                        <FaRoad /> <span>Mileage</span>
                      </span>
                    </th>
                    <td className="px-6 py-4">{data.mileage}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2 justify-between">
                        <FaGasPump /> <span>Fuel Type</span>
                      </span>
                    </td>
                    <td className="px-6 py-4">{data.fueltype}</td>
                  </tr>
                  <tr className=" border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <span className="flex items-center gap-2 justify-between">
                        <FaPalette /> <span>Color</span>
                      </span>
                    </th>
                    <td className="px-6 py-4">{data.color}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2 justify-between">
                        <FaCalendarAlt /> <span>Year</span>
                      </span>
                    </td>
                    <td className="px-6 py-4">{data.year}</td>
                  </tr>
                  <tr className=" border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <span className="flex items-center gap-2 justify-between">
                        <FaKey /> <span>VIN</span>
                      </span>
                    </th>
                    <td className="px-6 py-4">{data.vin}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2 justify-between">
                        <GiSteeringWheel /> <span>Drive Type</span>
                      </span>
                    </td>
                    <td className="px-6 py-4">{data.drivetype}</td>
                  </tr>
                </tbody>
              </table>
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
                    className="flex items-center justify-center text-white  gap-1  bg-black px-3 py-3 rounded-3xl cursor-pointer"
                  >
                    Send Message <FaWhatsapp className="text-xl" />
                  </a>
                </div>
              </div>
            </main>
          </div>
        </main>

        <main className=" lg:px-32 w-full  my-10 ">
        <div className="px-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full py-10 gap-3  md:px-10">
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].ChildSafetyLocks ? (
                <FaCheckCircle className="text-green-500 " />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}
              <span className="text-black">Child Safety Locks</span>
            </span>

            <span className="flex items-center gap-1 border-b">
              { data.length > 0 && data[0].Heater ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">Heater</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].LeatherSeats ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">LeatherSeats</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].PanoramicMoonroof ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">PanoramicMoonroof</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].Tachometer ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">Tachometer</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].TouchscreenDisplay ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">TouchscreenDisplay</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].AntiLockBraking ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">AntiLockBraking</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].BrakeAssist ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">BrakeAssist</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].ChildSafetyLocks ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">ChildSafetyLocks</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].DriverAirBag ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">DriverAirBag</span>
            </span>
            <span className="flex items-center gap-1 border-b">
               {data.length > 0 && data[0].PowerDoorLocks ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">PowerDoorLocks</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].StabilityControl ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">StabilityControl</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].TractionControl ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">TractionControl</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].FogLightsFront ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">FogLightsFront</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].RainSensingWiper ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">RainSensingWiper</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              { data.length > 0 && data[0].RearSpoiler ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">RearSpoiler</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].WindowsElectric ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">WindowsElectric</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].AndroidAuto ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">AndroidAuto</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].AppleCarPlay ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">AppleCarPlay</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].Bluetooth ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">Bluetooth</span>
            </span>
            <span className="flex items-center gap-1 border-b">
              {data.length > 0 && data[0].HomeLink ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500 text-lg" />
              )}{" "}
              <span className="text-black">HomeLink</span>
            </span>
          </div>
        </main>
        <main className="py-14 px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="py-5 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold">Similar Listings</h1>
          </div>

          <div>
            <RelatedItems
              
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

export default CarDetails;

