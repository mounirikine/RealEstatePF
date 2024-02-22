import Header from "../components/Header";
import Residential from "../components/Residential";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoCarSport, IoHomeSharp } from "react-icons/io5";
import { MdOutlineApartment, MdOutlineDevices, MdOutlineVilla } from "react-icons/md";
import { GiClothes, GiOfficeChair } from "react-icons/gi";
import { CiCircleMore } from "react-icons/ci";
import PropertiesFilter from "../components/PropertiesFilter";
import {  useState } from "react";
import {motion} from 'framer-motion'
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiBicycleBold, PiGuitar } from "react-icons/pi";
import { LuArmchair } from "react-icons/lu";

const Properties = ({ userInfo }) => {
  const [category,setCategories] = useState('house')

  return (
    <>
      <Header userInfo={userInfo} />
      <section>
        <div className="px-1 md:px-20 pt-5 pb-5">
          <div className="">
            <h1 className="text-center  font-bold text-4xl pb-4">
              Property Types
            </h1>
            <p className="text-center w-11/12 md:w-8/12 mx-auto ">
            Here you can find your categories that you are simply looking for and be the first to take them
            </p>
          </div>
          
        </div>
        

        <div className="mb-3   bg-violet-100 border-2 border-black w-10/12 mx-auto flex flex-col items-center justify-center px-4 py-2 rounded-2xl  ">
          <div className="text-center py-1">
            <h1 className="text-xl font-bold">Filter Property</h1>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -57 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
             className="flex lg:mx-14 bg-white flex-col  lg:flex-row items-center lg:items-center w-11/12 mx-auto lg:w-full py-3 px-4 mt-6 rounded-xl border-2 border-black justify-center">
              <div className="flex  items-center  gap-2 mb-4 lg:mb-0 w-full lg:w-3/12">
                <span className="border rounded-xl bg-violet-100 px-3 py-3 ">
                  <FaMapMarkerAlt />
                </span>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm">
                    Location
                  </label>
                  <select
                    name=""
                    id=""
                    className="font-semibold outline-none px-2"
                  >
                    <option value="">Agadir </option>
                    {/* Add other options as needed */}
                  </select>
                </div>
              </div>

              <div className="flex items-center  gap-2 mb-4 lg:mb-0 w-full lg:w-3/12">
                <span className="border rounded-xl bg-violet-100 px-3 py-3">
                  <FaMapMarkerAlt />
                </span>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm">
                    Type of Property
                  </label>
                  <select
                    name=""
                    id=""
                    className="font-semibold outline-none px-2"
                  >
                    <option value="">Apartment </option>
                    {/* Add other options as needed */}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 lg:mb-0 w-full lg:w-3/12">
                <span className="border rounded-xl bg-violet-100 px-3 py-3">
                  <FaMapMarkerAlt />
                </span>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm">
                    Price
                  </label>
                  <select
                    name=""
                    id=""
                    className="font-semibold outline-none px-2"
                  >
                    <option value="">1000$-$1500 </option>
                    {/* Add other options as needed */}
                  </select>
                </div>
              </div>

              <button className="lg:ml-4 px-5 py-2 rounded-e-md lg:w-2/12 hover:shadow-lg bg-black font-bold text-white w-full ">
                Search
              </button>
            </motion.div>
        </div>
        <div className="flex items-center justify-center lg:px-20">
        <div className="flex  gap-4 mx-4 px-10 mt-4  overflow-x-auto    rounded-md py-1 ">
            <Link
              onClick={()=>{setCategories('house')}}
              className={`px-10 rounded-xl ${category ==='house' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <IoHomeSharp />
              </span>{" "}
              <span>Home</span>
            </Link>
            <Link
              onClick={()=>{setCategories('villa')}}
              className={`px-10 rounded-xl ${category ==='villa' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <MdOutlineVilla />
              </span>{" "}
              <span>Villa</span>
            </Link>
            <Link
              onClick={()=>{setCategories('apartment')}}
              className={`px-10 rounded-xl ${category ==='apartment' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <MdOutlineApartment />
              </span>{" "}
              <span>Apartments</span>
            </Link>
            <Link
              onClick={()=>{setCategories('car')}}
              className={`px-10 rounded-xl ${category ==='car' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <IoCarSport />
              </span>{" "}
              <span>Car</span>
            </Link>
            <Link
              onClick={()=>{setCategories('office')}}
              className={`px-10 rounded-xl ${category ==='office' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <GiOfficeChair />
              </span>{" "}
              <span>Office</span>
            </Link>
            <Link
              onClick={()=>{setCategories('bycicle')}}
              className={`px-10 rounded-xl ${category ==='bycicle' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <PiBicycleBold />
              </span>{" "}
              <span>Bycicle</span>
            </Link>
            <Link
              onClick={()=>{setCategories('devices')}}
              className={`px-10 rounded-xl ${category ==='devices' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <MdOutlineDevices />
              </span>{" "}
              <span>Devices</span>
            </Link>
            <Link
              onClick={()=>{setCategories('clothes')}}
              className={`px-10 rounded-xl ${category ==='clothes' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <GiClothes />
              </span>{" "}
              <span>Clothes</span>
            </Link>
            <Link
              onClick={()=>{setCategories('music')}}
              className={`px-10 rounded-xl ${category ==='music' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <PiGuitar />
              </span>{" "}
              <span>Music</span>
            </Link>
            <Link
              onClick={()=>{setCategories('furnishing')}}
              className={`px-10 rounded-xl ${category ==='furnishing' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <LuArmchair />
              </span>{" "}
              <span>Furnishing</span>
            </Link>
 

          </div>
        </div>
        
            <PropertiesFilter catSlug={category} />
      </section>

      <Footer />
    </>
  );
};

export default Properties;
