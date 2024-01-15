import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import logo1 from '../assets/logo3.png'

const Header = () => {
  const [open ,setOpen] = useState(false)
  const [dark ,setDark] = useState(false)


  const handelOpen = () =>{
    setOpen(!open)
  }
  

  useEffect(() => {
    const bodyClassList = document.body.classList;
    const navbar = document.getElementById('navbar');

    if (dark) {
      bodyClassList.remove('light_mode');
      bodyClassList.add('dark_mode');
      navbar.classList.remove('nav_bg_light');
      navbar.classList.add('nav_bg_dark');
    } else {
      bodyClassList.remove('dark_mode');
      bodyClassList.add('light_mode');
      navbar.classList.add('nav_bg_light');
      navbar.classList.remove('nav_bg_dark');
    }
  }, [dark]);

  
  return (
    <>
      <nav id="navbar" className="  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md dark:border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center  space-x-3 rtl:space-x-reverse">
        

            <img src={logo1} alt="" width={200} />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <label className="swap swap-rotate mx-2">

              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />
               {/* moon icon */}
               <svg onClick={()=>setDark(false)} className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                </svg>

              {/* sun icon */}
              <svg onClick={() => setDark(true)} className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
              </svg>


            </label>
            <Link
            to='/login'
              type="button"
              className="text-white bg-[#7af065] hover:bg-lime-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center   "
            >
              Get started
            </Link>

            <button

              type="button"
              onClick={handelOpen}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg font-bold text-white  rounded-lg md:hidden  hover:bg-[#7af065] focus:outline-none focus:ring-2 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 border"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <CiMenuFries className="w-5 h-5 font-extrabold text-lg"   />
            </button>
          </div>
          <div className={`items-center justify-between ${open ? '': 'hidden'} w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}>
            <ul className="flex flex-col p-4 md:p-3   mt-10 gap-3 font-medium border  border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="cursor-pointer font-semibold hover:text-[#7af065]">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer font-semibold hover:text-[#7af065]">
                <Link to="/properties">Properties</Link>
              </li>
              <li className="cursor-pointer font-semibold hover:text-[#7af065]">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="cursor-pointer font-semibold hover:text-[#7af065]">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
