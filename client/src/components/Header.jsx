import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import logo1 from "../assets/logo3.png";
import { useCookies } from "react-cookie";
import { IoCreateOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { FaPowerOff } from "react-icons/fa";
import { toast } from "react-toastify";

const Header = ({ userInfo }) => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const [cookies, setCookies] = useCookies("access_token");

  const removeCookies = () => {
    setCookies("access_token", "");
    
    window.localStorage.removeItem("userID");
    window.location.reload(false);
    toast.success('Logout Successfully')
  };

  const handelOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const bodyClassList = document.body.classList;
    const navbar = document.getElementById("navbar");

    if (dark) {
      bodyClassList.remove("light_mode");
      bodyClassList.add("dark_mode");
      navbar.classList.remove("nav_bg_light");
      navbar.classList.add("nav_bg_dark");
    } else {
      bodyClassList.remove("dark_mode");
      bodyClassList.add("light_mode");
      navbar.classList.add("nav_bg_light");
      navbar.classList.remove("nav_bg_dark");
    }
  }, [dark]);

  return (
    <>
      <nav
        id="navbar"
        className="  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md dark:border-gray-600 "
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <Link
            to="/"
            className="flex items-center  space-x-3 rtl:space-x-reverse"
          >
            <img src={logo1} alt="" width={200} />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {cookies.access_token ? (
              <>
                <div className="flex items-center  ">
                  <Link to="/create">
                    <IoCreateOutline className="text-2xl" />
                  </Link>
                </div>
              </>
            ) : (
              ""
            )}

            {cookies.access_token ? (
              <button
                type="button"
                className="text-white flex items-center gap-1  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center   "
              >
                {userInfo && userInfo.avatar && (
                  <>
                    <details className="dropdown">
                      <summary className="m-0 btn">
                        <img
                          src={userInfo.avatar}
                          width={30}
                          height={30}
                          className="rounded-full border"
                        />
                        <div className="badge badge-ghost">
                          {userInfo.username}
                        </div>
                      </summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li className=" ">
                          <Link to='/profile' className="text-black bg-slate-100 hover:bg-slate-200 mb-1">
                            <CiUser className="text-lg" /> Profile
                          </Link>
                        </li>
                        <li className="">
                          <a className="text-black bg-slate-100 hover:bg-slate-200  mb-1">
                            <CiBoxList className="text-lg" /> Your Properties
                          </a>
                        </li>
                        <li className="">
                          <Link
                            onClick={removeCookies}
                            className="text-black bg-slate-100 hover:bg-slate-200  mb-1"
                          >
                            <FaPowerOff className="text-lg" /> Logout
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </>
                )}
              </button>
            ) : (
              <Link
                to="/login"
                type="button"
                className="text-white my-3 bg-[#7af065] hover:bg-lime-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center   "
              >
                Get started
              </Link>
            )}

            <button
              type="button"
              onClick={handelOpen}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg font-bold text-white  rounded-lg md:hidden  hover:bg-[#7af065] focus:outline-none focus:ring-2 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 border"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <CiMenuFries className="w-5 h-5 font-extrabold text-lg" />
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              open ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}
          >
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
