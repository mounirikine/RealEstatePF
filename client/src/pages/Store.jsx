import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp, IoCarSport } from "react-icons/io5";
import { MdOutlineVilla, MdOutlineApartment, MdOutlineDevices } from "react-icons/md";
import { GiOfficeChair, GiClothes } from "react-icons/gi";
import { PiBicycleBold, PiGuitar } from "react-icons/pi";
import { LuArmchair } from "react-icons/lu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import newhero from "../assets/newhero.svg";
import AllStores from "../components/AllStores";
import FilterStore from "../components/FilterStore";

const Store = ({ userInfo }) => {
  const [category, setCategories] = useState("house");
  const [stores, setStores] = useState([]);
  const userRef = userInfo ? userInfo._id : null; // Ensure userInfo is not null or undefined
  useEffect(() => {
    const getStores = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/store/Stores");
        const data = await res.json();
        setStores(data);
      } catch (err) {
        console.log(err);
      }
    };
    getStores();
  }, []);

  const userStore = stores.find((item) => item.userRef === userRef);
  return (
    <>
      <Header userInfo={userInfo} />
      <section className="min-h-screen">
        <main className="h-[50vh] px-4 md:px-8 lg:px-20 relative bg-violet-50">
          <img src={newhero} className="w-full h-[50vh] object-cover" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black">
                Our Store
              </h1>
            </div>
            <div className="text-center px-4 py-2 md:px-16 md:py-4 bg-opacity-75 rounded-lg">
              <p className="text-sm md:text-base lg:text-lg text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
              </p>
            </div>
            <div className="mt-4">
              <Link
                to="/create-store"
                className="px-6 py-3 bg-black text-white rounded-lg text-lg md:text-sm"
              >
                
                {
                  userStore ? 'Add Element' : 'Create Store'
                }
              </Link>
            </div>
          </div>
        </main>

        <main className="mt-10 flex flex-col lg:flex-row justify-between px-5">
          <div className="   w-full md:w-3/12  top-2 ">
          <div className="flex py-3 flex-col border  gap-4  px-10 mt-4  w-full   ">
            <Link
              onClick={()=>{setCategories('house')}}
              className={`px-10 rounded-xl ${category ==='house' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1   flex gap-1 items-center justify-center `}
            >
              <span>
                <IoHomeSharp />
              </span>{" "}
              <span>Home</span>
            </Link>
            <Link
              onClick={()=>{setCategories('villa')}}
              className={`px-10 rounded-xl ${category ==='villa' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1   flex gap-1 items-center justify-center `}
            >
              <span>
                <MdOutlineVilla />
              </span>{" "}
              <span>Villa</span>
            </Link>
            <Link
              onClick={()=>{setCategories('apartment')}}
              className={`px-10 rounded-xl ${category ==='apartment' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1   flex gap-1 items-center justify-center `}
            >
              <span>
                <MdOutlineApartment />
              </span>{" "}
              <span>Apartments</span>
            </Link>
            <Link
              onClick={()=>{setCategories('car')}}
              className={`px-10 rounded-xl ${category ==='car' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1   flex gap-1 items-center justify-center `}
            >
              <span>
                <IoCarSport />
              </span>{" "}
              <span>Car</span>
            </Link>
            <Link
              onClick={()=>{setCategories('office')}}
              className={`px-10 rounded-xl ${category ==='office' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  flex gap-1 items-center justify-center `}
            >
              <span>
                <GiOfficeChair />
              </span>{" "}
              <span>Office</span>
            </Link>
            <Link
              onClick={()=>{setCategories('bycicle')}}
              className={`px-10 rounded-xl ${category ==='bycicle' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  flex gap-1 items-center justify-center `}
            >
              <span>
                <PiBicycleBold />
              </span>{" "}
              <span>Bycicle</span>
            </Link>
            <Link
              onClick={()=>{setCategories('devices')}}
              className={`px-10 rounded-xl ${category ==='devices' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1   flex gap-1 items-center justify-center `}
            >
              <span>
                <MdOutlineDevices />
              </span>{" "}
              <span>Devices</span>
            </Link>
            <Link
              onClick={()=>{setCategories('clothes')}}
              className={`px-10 rounded-xl ${category ==='clothes' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1   flex gap-1 items-center justify-center `}
            >
              <span>
                <GiClothes />
              </span>{" "}
              <span>Clothes</span>
            </Link>
            <Link
              onClick={()=>{setCategories('music')}}
              className={`px-10 rounded-xl ${category ==='music' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1   flex gap-1 items-center justify-center `}
            >
              <span>
                <PiGuitar />
              </span>{" "}
              <span>Music</span>
            </Link>
            <Link
              onClick={()=>{setCategories('furnishing')}}
              className={`px-10 rounded-xl ${category ==='furnishing' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1   flex gap-1 items-center justify-center `}
            >
              <span>
                <LuArmchair />
              </span>{" "}
              <span>Furnishing</span>
            </Link>
 
      <hr />
      <AllStores />
      <div>
       
      </div>
          </div>
          </div>
          <div className="min-h-screen w-full  lg:w-12/12">
            <FilterStore catSlug={category} />
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Store;
