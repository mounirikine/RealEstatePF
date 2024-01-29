import  { useState } from "react";

import { IoHomeSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";
import { MdOutlineApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";

import { Link } from "react-router-dom";

const CreateForm = () => {


  

  return (
    <>
      <div className="lg:h-screen sm:h-screen bg-[#782DF3]">
          <div className="pt-20 pb-5">
              <h1 className="text-center text-5xl font-bold uppercase primary_text">Choose a category</h1>
          </div>
          <div>
          <h1 className="text-center primary_text text-lg uppercase">what type of property you want to add</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-4 px-20 py-20">
            <Link to='/CreateHome'  className="px-10 rounded-xl  hover:bg-indigo-500 text-xl hover:text-white border py-6 bg-white shadow-lg flex gap-1 items-center justify-center"><span><IoHomeSharp /></span> <span>Home</span></Link>
            <Link to='/CreateVilla'  className="px-10 rounded-xl  hover:bg-indigo-600 text-xl hover:text-white border py-6 bg-white shadow-lg flex gap-1 items-center justify-center"><span><MdOutlineVilla /></span> <span>Villa</span></Link>
            <Link to='/CreateApartment'  className="px-10 rounded-xl  hover:bg-indigo-600 text-xl hover:text-white border py-6 bg-white shadow-lg flex gap-1 items-center justify-center"><span><MdOutlineApartment /></span> <span>Apartments</span></Link>
            <Link to='/CreateCar'  className="px-10 rounded-xl  hover:bg-indigo-600 text-xl hover:text-white border py-6 bg-white shadow-lg flex gap-1 items-center justify-center"><span><IoCarSport /></span> <span>Car</span></Link>
            <Link to='/CreateOffice'  className="px-10 rounded-xl  hover:bg-indigo-600 text-xl hover:text-white border py-6 bg-white shadow-lg flex gap-1 items-center justify-center"><span><GiOfficeChair /></span> <span>Office</span></Link>
            <Link to='/CreateHome'  className="px-10 rounded-xl  hover:bg-indigo-600 text-xl hover:text-white border py-6 bg-white shadow-lg flex gap-1 items-center justify-center"><span><CiCircleMore /></span> <span>Bycicle</span></Link>
          </div>
      </div>
    </>
  );
};

export default CreateForm;
