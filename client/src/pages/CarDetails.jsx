import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedItems from "../components/RelatedItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";


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

const CarDetails = ({ userInfo }) => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:4000/api/car/get-car/${id}`);
        const response = await res.json();
        setData(response);
      } catch (err) {
        console.error(err); // Change console.log to console.error for errors
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Header userInfo={userInfo} />
      <section className="py-32 md:py-32 bg-white md:px-10">
        <div className=" md:flex items-center justify-between px-4">
          <div>
            <h1 className="text-5xl font-bold ">{data.title}</h1>
            <h1 className="py-2 ">
              4.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-3 pt-4 font-thin">
              <div className="flex items-center gap-1 bg-blue-100 px-10 text-blue-700 justify-center py-2 rounded-full">
                <FaCalendarAlt /> {data.year}
              </div>
              <div className="flex items-center gap-1 bg-blue-100 px-10 text-blue-700 justify-center py-2 rounded-full">
                <IoMdSpeedometer /> {data.mileage}
              </div>
              <div className="flex items-center gap-1 bg-blue-100 px-10 text-blue-700 justify-center py-2 rounded-full">
                <IoMdSpeedometer /> {data.drivetype}
              </div>
              <div className="flex items-center gap-1 bg-blue-100 px-10 text-blue-700 justify-center py-2 rounded-full">
                <BsFillFuelPumpFill /> {data.fueltype}
              </div>
            </div>
          </div>
          <div className="md:text-right p-5">
            <h1 className="text-2xl md:text-3xl font-bold">${data.price}</h1>
            <div className="flex items-center gap-1 py-3">
              <ImTicket /> <span>Make An Offer Price</span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="carousel w-full md:w-10/12 h-[300px] md:h-[500px] mt-6 md:mt-10 rounded-xl px-2">
            {data.imageUrls && data.imageUrls.length > 1 ? (
              data.imageUrls.map((img, index) => (
                <div
                  key={index}
                  id={`slide${index + 1}`}
                  className="carousel-item relative w-full"
                >
                  <img src={img} alt={`slide${index + 1}`} className="w-full" />
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

        <div className="container mx-auto px-4 md:px-10 py-10">
  <h1 className="py-6 text-2xl">Car Overview</h1>
  <div className="flex flex-col md:flex-row items-center justify-between">
    <table className="w-full md:w-8/12 text-sm text-left rtl:text-right overflow-x-auto">
              <tbody>
                <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <FaCarSide /> <span>Body</span>
                    </span>
                  </th>
                  <td className="px-6 py-4">{data.body}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2">
                      <FaCog /> <span>Transmission</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">{data.transmission}</td>
                </tr>
                <tr className="bg-white  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <FaRoad /> <span>Mileage</span>
                    </span>
                  </th>
                  <td className="px-6 py-4">{data.mileage}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2">
                      <FaGasPump /> <span>Fuel Type</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">{data.fueltype}</td>
                </tr>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <FaPalette /> <span>Color</span>
                    </span>
                  </th>
                  <td className="px-6 py-4">{data.color}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> <span>Year</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">{data.year}</td>
                </tr>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <FaKey /> <span>VIN</span>
                    </span>
                  </th>
                  <td className="px-6 py-4">{data.vin}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2">
                      <GiSteeringWheel /> <span>Drive Type</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">{data.drivetype}</td>
                </tr>
              </tbody>
              </table>
              <div className="w-full md:w-4/12 md:ml-4 mt-4 md:mt-0">
      <div className="border py-14 rounded-xl shadow-xl">
        <div className="avatar flex items-center justify-center">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
              alt="Seller Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="py-3 text-xl text-center">Seller</h1>
        <h1 className="text-gray-400 text-center mb-2">{data.userNumber}</h1>
        <div className="flex items-center justify-center">
          
            <a
              href={`https://wa.me/${data.userNumber}?text=Hello How Can I Get More Info About This ?`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-black  bg-green-400 px-10 py-3 rounded-3xl cursor-pointer"
            >
              <FaWhatsapp className="text-xl" />
              <span>Send Message</span>
            </a>
        </div>
      </div>
    </div>
  </div>
</div>
        <hr className="my-6" />

        <div className="py-6 px-5 md:py-10">
  <h1 className="text-3xl md:text-4xl">Description</h1>
  <p className="w-full   py-4 md:py-6 lg:py-8 text-base md:text-lg tracking-wide">
    {data.description}
  </p>
</div>


<hr className="my-6" />

<h1 className="text-3xl md:text-4xl mt-5 px-6">Features</h1>

<div className="grid grid-cols-4 w-6/12 px-6 py-10 gap-3">
<span className="flex items-center gap-1">
  {data.DigitalOdometer ? (
    <FaCheckCircle className="text-green-700" />
  ) : (
    <IoIosCloseCircle className="text-red-700 text-lg" />
  )}
  <span className="text-black">Digital Odometer</span>
</span>
    <span className="flex items-center gap-1">{data.Heater ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">Heater</span></span>
    <span className="flex items-center gap-1">{data.LeatherSeats ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">LeatherSeats</span></span>
    <span className="flex items-center gap-1">{data.PanoramicMoonroof ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">PanoramicMoonroof</span></span>
    <span className="flex items-center gap-1">{data.Tachometer ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">Tachometer</span></span>
    <span className="flex items-center gap-1">{data.TouchscreenDisplay ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">TouchscreenDisplay</span></span>
    <span className="flex items-center gap-1">{data.AntiLockBraking ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">AntiLockBraking</span></span>
    <span className="flex items-center gap-1">{data.BrakeAssist ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">BrakeAssist</span></span>
    <span className="flex items-center gap-1">{data.ChildSafetyLocks ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">ChildSafetyLocks</span></span>
    <span className="flex items-center gap-1">{data.DriverAirBag ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">DriverAirBag</span></span>
    <span className="flex items-center gap-1">{data.PowerDoorLocks ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">PowerDoorLocks</span></span>
    <span className="flex items-center gap-1">{data.StabilityControl ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">StabilityControl</span></span>
    <span className="flex items-center gap-1">{data.TractionControl ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">TractionControl</span></span>
    <span className="flex items-center gap-1">{data.FogLightsFront ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">FogLightsFront</span></span>
    <span className="flex items-center gap-1">{data.RainSensingWiper ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">RainSensingWiper</span></span>
    <span className="flex items-center gap-1">{data.RearSpoiler ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">RearSpoiler</span></span>
    <span className="flex items-center gap-1">{data.WindowsElectric ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">WindowsElectric</span></span>
    <span className="flex items-center gap-1">{data.AndroidAuto ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">AndroidAuto</span></span>
    <span className="flex items-center gap-1">{data.AppleCarPlay ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">AppleCarPlay</span></span>
    <span className="flex items-center gap-1">{data.Bluetooth ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">Bluetooth</span></span>
    <span className="flex items-center gap-1">{data.HomeLink ? <FaCheckCircle className="text-green-700" /> :<IoIosCloseCircle className="text-red-700 text-lg" /> }  <span className="text-black">HomeLink</span></span>
</div>
      </section>
      <Footer />
    </>
  );
};

export default CarDetails;
