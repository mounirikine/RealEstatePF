import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { IoCreateOutline } from "react-icons/io5";


const Profile = ({ userInfo }) => {
  const [active, setActive] = useState(true);
  const [loading ,setLoading] = useState(false)
  const [username, setUsername] = useState(""); // Add this line
  const [email, setEmail] = useState(""); // Add this line
  const [password, setPassword] = useState(""); // Add this line
  const navigate = useNavigate()
  const deactivate = () => {
    setActive(false);
  };


  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true)
    const formData = { username, email }; // Assuming you have defined username, email, and password somewhere

    try {
        const res = await fetch(`http://127.0.0.1:4000/api/auth/users/${userInfo._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        toast.success('Profile Updated Successfully')
        
    } catch (error) {
        
        toast.error('Profile Not Updated ! Try Again')
    }
    setLoading(false)
};


  return (
    <>
      <div className="w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row py-20">
        <aside className="hidden py-10 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12 pt-20">
            <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full"
            >
              Your Properties
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
            >
              Your Blogs
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
            >
              Logout
            </a>
          </div>
        </aside>
        <main className="w-full py-10 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4 ">
            <div className="w-full px-6 mx-auto pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                {userInfo && userInfo.username}
              </h2>
              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src={userInfo && userInfo.avatar}
                    alt="Bordered avatar"
                  />
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button
                      type="button"
                      disabled={active}
                      className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    >
                      Change picture
                    </button>
                    <button
                      type="button"
                      disabled={active}
                      className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    >
                      Delete picture
                    </button>
                    <button
                      type="button"
                      onClick={deactivate}
                      className=""
                    >
                      <button className="btn flex items-center" onClick={()=>document.getElementById('my_modal_1').showModal()}><span><IoCreateOutline  className="text-xl" /></span> <span>Edit Profile</span></button>
                            <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-center">Are you Sure </h3>
                                <p className="py-4">Do you Want To update Profile</p>
                                <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn secondary_color">Yes</button>
                                </form>
                                </div>
                            </div>
                            </dialog>
                    </button>
                  </div>
                </div>
                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full">
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Your first name
                      </label>
                      <input
                    
                        type="text"
                        id="first_name"
                        onChange={(e)=>setUsername(e.target.value)}
                        disabled={active}
                        placeholder={userInfo && userInfo.username}
                        className="bg-indigo-50 border border-indigo-300  text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={(e)=>setEmail(e.target.value)}
                      disabled={active}
                      placeholder={userInfo && userInfo.email}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                     
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Bio
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      disabled={active}
                      className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                      placeholder="Write your bio here..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={handleRegister}
                      className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                      disabled={active}
                    >
                        {
                    loading ? <span className="loading loading-spinner loading-sm"></span> : 'Save Changes'
                  }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;