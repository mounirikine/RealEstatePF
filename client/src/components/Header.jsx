import { Link, NavLink, useLocation } from "react-router-dom";
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
  const [active, setActive] = useState("");
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/properties", label: "Properties" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
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

  return (
    <>
      <header className=" dark:bg-gray-900 bg-[#782DF3] fixed w-full z-20 top-0 start-0 primary_text dark:border-gray-600 py-1">
        <nav className="   px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img src={logof} alt="" width={150} />
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
                        : "text-white"
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
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full  shadow-xl rounded-3xl mb-10 pt-10 pb-6">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => setActive(item.label)}
                    className={`${
                      location.pathname === item.path
                        ? "bg-white text-black"
                        : "text-white"
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

