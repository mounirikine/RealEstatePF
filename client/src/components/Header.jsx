import { Link } from "react-router-dom";
import { CiMenuFries, CiUser, CiBoxList } from "react-icons/ci";
import { IoCreateOutline, IoMenuOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import logof from "../assets/logof1.png";

const Header = ({ userInfo }) => {
  const [open, setOpen] = useState(true);
  const [cookies, setCookies] = useCookies(["access_token"]);

  const removeCookies = () => {
    setCookies("access_token", "");

    window.localStorage.removeItem("userID");
    window.location.reload(false);
    toast.success("Logout Successfully");
  };

  const handleOpen = () => {
    setOpen(!open);
  };


  return (
    <>
    <header className=" dark:bg-gray-900 bg-[#782DF3] fixed w-full z-20 top-0 start-0 primary_text dark:border-gray-600 py-3">
    <nav className="   px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
            <img src={logof} alt="" width={200} />
            </Link>
            <div className="flex items-center lg:order-2">
            {cookies.access_token ? (
  <>
    <details className="dropdown dropdown-end">
      <summary className="m-0 btn">
        {userInfo && userInfo.avatar && (
          <>
            <img
              src={userInfo.avatar}
              width={30}
              height={30}
              className="rounded-full border"
              style={{ width: "30px", height: "30px" }}
              alt="User Avatar"
            />
            <div className="badge badge-ghost">{userInfo.username}</div>
          </>
        )}
      </summary>

      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li className=" ">
          <Link
            to="/profile"
            className="text-black bg-slate-100 hover:bg-slate-200 mb-1"
          >
            <CiUser className="text-lg" /> Profile
          </Link>
        </li>
        <li className="">
          <a className="text-black bg-slate-100 hover:bg-slate-200 mb-1">
            <CiBoxList className="text-lg" /> Your Properties
          </a>
        </li>
        <li className="">
          <div className="flex  text-black bg-slate-100 hover:bg-slate-200 mb-1">
            <Link to="/create" className="flex items-center">
              <IoCreateOutline className="text-2xl" />
              Create Property
            </Link>
          </div>
        </li>
        <li className="">
          <Link
            onClick={removeCookies}
            className="text-black bg-slate-100 hover:bg-slate-200 mb-1"
          >
            <FaPowerOff className="text-lg" /> Logout
          </Link>
        </li>
      </ul>
    </details>
  </>
) : (
  <>

    <Link
      to="/login"
      className=" bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 border bg-white text-black"
    >
      Get started
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
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-white  font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" >Home</Link>
                    </li>
                    <li>
                        <Link to="/properties" className="block py-2 pr-4 pl-3 text-gray-100 hover:bg-white  border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Properties</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block py-2 pr-4 pl-3 text-gray-100 border-b hover:bg-white  border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                    </li>
                    <li>
                        <Link to="#" className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-white   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</Link>
                    </li>
                    
                </ul>
            </div>

  {/*  */}

              <div className={` ${open ? 'hidden':'flex'} lg:hidden justify-between items-center w-full lg:w-auto lg:order-1" id="mobile-menu-2`}>
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full  shadow-xl rounded-3xl mb-10 pt-10 pb-6">
                <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-white font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page"></Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-white hover:text-black text-center lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                    </li>
                    <li>
                        <Link to="/properties" className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-white hover:text-black text-center  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Properties</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-white hover:text-black text-center  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-white hover:text-black text-center  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                    </li>
                    <li>
                        <Link to="#" className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-white hover:text-black text-center  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</Link>
                    </li>
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

{/* <nav
  id="navbar"
  className="dark:bg-gray-900 bg-[#782DF3] fixed w-full z-20 top-0 start-0 primary_text dark:border-gray-600 py-3"
>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
    <Link
      to="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img src={logof} alt="" width={200} />
    </Link>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      {cookies.access_token ? (
        <button
          type="button"
          className="text-white lg:flex items-center gap-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 text-center hidden "
        >
          {userInfo && userInfo.avatar && (
            <>
              <details className="dropdown">
                <summary className="m-0 btn">
                  {userInfo && userInfo.avatar && (
                    <>
                      <img
                        src={userInfo.avatar}
                        width={30}
                        height={30}
                        className="rounded-full border"
                        style={{ width: "30px", height: "30px" }}
                        alt="User Avatar"
                      />
                      <div className="badge badge-ghost">
                        {userInfo.username}
                      </div>
                    </>
                  )}
                </summary>

                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li className=" ">
                    <Link
                      to="/profile"
                      className="text-black bg-slate-100 hover:bg-slate-200 mb-1"
                    >
                      <CiUser className="text-lg" /> Profile
                    </Link>
                  </li>
                  <li className="">
                    <a className="text-black bg-slate-100 hover:bg-slate-200 mb-1">
                      <CiBoxList className="text-lg" /> Your Properties
                    </a>
                  </li>
                  <li className="">
                    <div className="flex  text-black bg-slate-100 hover:bg-slate-200 mb-1">
                      <Link to="/create" className="flex items-center" >
                        <IoCreateOutline className="text-2xl" />
                        Create Property
                      </Link>
                    </div>
                  </li>
                  <li className="">
                    <Link
                      onClick={removeCookies}
                      className="text-black bg-slate-100 hover:bg-slate-200 mb-1"
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
          className="text-white my-3 border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 hover:bg-white hover:text-[#782DF3] py-2 text-center  lg:block"
        >
          Get started
        </Link>
      )}

      <button
        type="button"
        onClick={handelOpen}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-xl font-bold text-white rounded-lg md:hidden outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 bg-[#782DF3]"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <CiMenuFries className="w-5 h-5 font-extrabold text-lg outline-none" />
      </button>
    </div>
    <div
      className={`items-center justify-between ${
        open ? "" : "hidden"
      } w-full md:flex md:w-auto md:order-1  `}
      id="navbar-sticky"
    >
      <ul className="flex flex-col  p-4 md:p-3 mt-10 gap-3 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className="cursor-pointer w-full text-center text-xl  lg:text-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer secondary_text text-center text-xl  lg:text-lg">
          <Link to="/properties">Properties</Link>
        </li>
        <li className="cursor-pointer secondary_text text-center text-xl lg:text-lg">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="cursor-pointer secondary_text text-center text-xl  lg:text-lg">
          <Link to="/about">About</Link>
        </li>
        
        <li className="cursor-pointer flex secondary_text text-center w-full text-xl  ">
        {cookies.access_token ? (
        <button
          type="button"
          className="text-white flex w-full mx-auto  lg:hidden sm:hidden items-center gap-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 text-center"
        >
          {userInfo && userInfo.avatar && (
            <>
              <details className="dropdown ">
                <summary className="m-0 btn">
                  {userInfo && userInfo.avatar && (
                    <>
                      <img
                        src={userInfo.avatar}
                        width={30}
                        height={30}
                        className="rounded-full border"
                        style={{ width: "30px", height: "30px" }}
                        alt="User Avatar"
                      />
                      <div className="badge badge-ghost">
                        {userInfo.username}
                      </div>
                    </>
                  )}
                </summary>

                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li className=" ">
                    <Link
                      to="/profile"
                      className="text-black bg-slate-100 hover:bg-slate-200 mb-1"
                    >
                      <CiUser className="text-lg" /> Profile
                    </Link>
                  </li>
                  <li className="">
                    <a className="text-black bg-slate-100 hover:bg-slate-200 mb-1">
                      <CiBoxList className="text-lg" /> Your Properties
                    </a>
                  </li>
                  <li className="">
                    <div className="flex  text-black bg-slate-100 hover:bg-slate-200 mb-1">
                      <Link to="/create" className="flex items-center" >
                        <IoCreateOutline className="text-2xl" />
                        Create Property
                      </Link>
                    </div>
                  </li>
                  <li className="">
                    <Link
                      onClick={removeCookies}
                      className="text-black bg-slate-100 hover:bg-slate-200 mb-1"
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
          className="text-white w-full my-3 border lg:hidden sm:hidden focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 hover:bg-white hover:text-[#782DF3] py-2 text-center  lg:block"
        >
          Get started
        </Link>
      )}
        </li>
      </ul>
    </div>
  </div>
</nav> */}