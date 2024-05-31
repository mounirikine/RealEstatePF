import  { useState } from "react";

import { IoHomeSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";
import { MdOutlineApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdOutlineDevices } from "react-icons/md";


import { PiBicycleBold, PiGuitar } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";
import { LuArmchair } from "react-icons/lu";



const CreateForm = ({userInfo}) => {


  

  return (
    <>
    <Header userInfo={userInfo} />
      <div className="lg:min-h-screen sm:min-h-screen pt-44  hero">
          <div className="pt-10 pb-5">
              <h1 className="text-center text-5xl font-bold uppercase mb-[500px]  lg:mb-96 text-white">Choose a category</h1>
          </div>
          <div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-4 lg:px-20 py-20">
            <Link to='/CreateHome'  className="px-10 rounded-xl  :bg-violet-500 text-xl :text-black border py-4 bg-white text-black shadow-lg flex gap-1 items-center justify-center"><span><IoHomeSharp /></span> <span>Home</span></Link>
            <Link to='/CreateVilla'  className="px-10 rounded-xl  :bg-white text-xl :text-black border py-4 bg-white text-black flex gap-1 items-center justify-center"><span><MdOutlineVilla /></span> <span>Villa</span></Link>
            <Link to='/CreateApartment'  className="px-10 rounded-xl  :bg-white text-xl :text-black border py-4 bg-white text-black shadow-lg flex gap-1 items-center justify-center"><span><MdOutlineApartment /></span> <span>Apartments</span></Link>
            <Link to='/CreateCar'  className="px-10 rounded-xl  :bg-white text-xl :text-black border py-4 bg-white text-black shadow-lg flex gap-1 items-center justify-center"><span><IoCarSport /></span> <span>Car</span></Link>
            <Link to='/CreateOffice'  className="px-10 rounded-xl  :bg-white text-xl :text-black border py-4 bg-white text-black shadow-lg flex gap-1 items-center justify-center"><span><GiOfficeChair /></span> <span>Office</span></Link>
            <Link to='/CreateBycicle'  className="px-10 rounded-xl  :bg-white text-xl :text-black border py-4 bg-white text-black shadow-lg flex gap-1 items-center justify-center"><span><PiBicycleBold /></span> <span>Bycicle</span></Link>
            <Link to='/CreateDevices'  className="px-10 rounded-xl  :bg-white text-xl :text-black border py-4 bg-white text-black shadow-lg flex gap-1 items-center justify-center"><span><MdOutlineDevices /></span> <span>Devices</span></Link>
            <Link to='/CreateClothes'  className="px-10 rounded-xl  :bg-white text-xl :text-black border py-4 bg-white text-black shadow-lg flex gap-1 items-center justify-center"><span><GiClothes  /></span> <span>Clothes</span></Link>
          </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateForm;
