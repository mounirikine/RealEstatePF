import { Link, NavLink, useLocation } from "react-router-dom";
import { CiUser, CiBoxList } from "react-icons/ci";
import { IoCreateOutline, IoMenuOutline } from "react-icons/io5";
import { FaPowerOff, FaStore } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import logof from "../assets/finder.png";
import { HiOutlineLanguage } from "react-icons/hi2";
import {useTranslation} from 'react-i18next'

const Header = ({ userInfo }) => {
  const [t,i18n]=useTranslation('global')
 
  const handleChange = (lang) => {
    
    i18n.changeLanguage(lang);
    window.localStorage.setItem('lng', lang);
  };

  const [open, setOpen] = useState(true);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [active, setActive] = useState("");
  const location = useLocation();
  const useId = window.localStorage.getItem("userID");
  const navItems = [
    { path: "/", label: t('Home') },
    { path: "/properties?country=&catSlug=&price=", label: t('Properties') },
    { path: "/about", label: t('About') },
    { path: "/contact", label: t('Contact') },
    { path: "/notification", label: t('Notifications') },
  ];
  const removeCookies = () => {
    setCookies("access_token", "");

    window.localStorage.removeItem("userID");
    window.location.reload(false);
    toast.success("Logout Successfully");
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  // useEffect(()=>{
  //   console.log(location.pathname)
  // },[active])

  useEffect(() => {
    const header = document.getElementById("header");
    const handleScroll = () => {
      const value = window.scrollY;
      if (value > 10) {
        header.style.transform = "translateY(-100px)";
        header.style.transition = "0.5s ease-in";
      } else {
        header.style.transform = "translateY(0px)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        id=""
        className=" dark:bg-gray-900   bg-white    w-full z-20 top-0 start-0 primary_text dark:border-gray-600 py-4 "
      >
        <nav className="   px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className=" items-center">
              <img src={logof} alt="" width={130} />
            </Link>
            <div className=" items-center   lg:order-2 flex">
              {cookies.access_token ? (
                <>
                  <div className="drawer z-[9999999999]">
                    <input
                      id="my-drawer"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content">
                      {/* Page content here */}
                      <label
                        htmlFor="my-drawer"
                        className="btn bg-black hover:bg-black drawer-button"
                      >
                        {userInfo && userInfo.avatar && (
                          <>
                            <img
                              src={userInfo.avatar}
                              width={30}
                              height={30}
                              className="rounded-full  border"
                              style={{ width: "30px", height: "30px" }}
                              alt="User Avatar"
                            />
                            <div className="badge hidden sm:block badge-ghost">
                              {userInfo.username}
                            </div>
                          </>
                        )}
                      </label>
                    </div>
                    <div className="drawer-side">
                      <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                      ></label>
                      <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                        {/* Sidebar content here */}

                        <div className="pb-10 pt-2 px-3">
                          <Link to="/" className=" items-center">
                            <img src={logof} alt="" width={130} />
                          </Link>
                        </div>

                        <li className=" ">
                          <Link
                            to="/profile"
                            className="py-4  bg-gray-100 mb-1"
                          >
                            <CiUser className="text-lg" /> Profile
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            to={`/list/${useId}`}
                            className="py-4  bg-gray-100  mb-1"
                          >
                            <CiBoxList className="text-lg" /> Your Properties
                          </Link>
                        </li>
                        <li className="">
                          <div className="flex  py-4  bg-gray-100  mb-1">
                            <Link to="/create" className="flex items-center">
                              <IoCreateOutline className="text-2xl" />
                              Create Property
                            </Link>
                          </div>
                        </li>
                        <li className="">
                          <div className="flex  py-4  bg-gray-100  mb-1">
                            <Link
                              to="/create-store"
                              className="flex items-center gap-1"
                            >
                              <FaStore className="text-xl" />
                              Create Store
                            </Link>
                          </div>
                        </li>
                      
                        <li className="">
                          <Link
                            onClick={removeCookies}
                            className="py-4  bg-gray-100  mb-4"
                          >
                            <FaPowerOff className="text-lg" /> Logout
                          </Link>
                        </li>
                        <li className=" hover:bg-white focus:bg-white">
                          <Link
                           
                            className="text-black hover:bg-white focus:bg-white mb-1"
                          >
                            <HiOutlineLanguage className="text-lg" /> 
                            Languages

                          </Link>
                          
                          <li>
                              <Link onClick={()=>handleChange('en')} className="bg-black text-white hover:bg-black flex items-center justify-center">English</Link>
                              <Link onClick={()=>handleChange('ar')} className="bg-black text-white hover:bg-black flex items-center justify-center">Arabic</Link>
                              <Link onClick={()=>handleChange('fr')} className="bg-black text-white hover:bg-black flex items-center justify-center">French</Link>
                            </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className=" bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 border  text-white"
                  >
                    {t('get_started')}
                  </Link>
                </>
              )}

              <button
                onClick={handleOpen}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm border  rounded-lg lg:hidden :bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <IoMenuOutline className="w-6 h-6" />
                ) : (
                  <IoMenuOutline className="w-6 h-6" />
                )}
              </button>
            </div>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => setOpen(true)}
                    className={`${
                      location.pathname === item.path
                        ? "bg-white text-black"
                        : "text-black"
                    } px-5 py-1 rounded-xl`}
                  >
                    <NavLink
                      to={item.path}
                      activeClassName="bg-white text-black"
                      className="block py-2 pr-4 pl-3 font-semibold rounded bg-primary-700 lg:text-primary-700 lg:p-0 dark:text-white"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/*  */}

            <div
              className={` ${
                open ? "hidden" : "flex"
              } lg:hidden justify-between items-center w-full lg:w-auto lg:order-1" id="mobile-menu-2`}
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full  h-screen  rounded-3xl mb-10 pt-10 pb-6">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => setActive(item.label)}
                    className={`${
                      location.pathname === item.path
                        ? "bg-black text-white flex items-center justify-center"
                        : "text-black flex items-center justify-center"
                    } px-5 py-1 rounded-xl`}
                  >
                    <NavLink
                      to={item.path}
                      activeClassName="bg-white text-black"
                      className="block py-2 pr-4 pl-3 font-semibold rounded bg-primary-700 lg:text-primary-700 lg:p-0 dark:text-white"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/*  */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
