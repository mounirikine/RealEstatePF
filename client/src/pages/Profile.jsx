import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PhoneInput from 'react-phone-input-2';
import Footer from '../components/Footer'
import 'react-phone-input-2/lib/style.css'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

const Profile = ({ userInfo }) => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const { t } = useTranslation('global');
  const deactivate = () => {
    setActive(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:4000/api/auth/users/${userInfo._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      const data = await res.json();
        
        window.localStorage.setItem("Phone",data.phoneNumber );
   
      window.location.reload(false);
       toast.success("Profile Updated Successfully");
    } catch (error) {
      toast.error("Profile Not Updated! Try Again");
      console.log(error)
    }

    setLoading(false);
  };

  const handleDeletePic = async () => {
    setLoading(true);
    const newImg = {
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    };

    try {
      const res = await fetch(
        `http://localhost:4000/api/auth/users/${userInfo._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newImg),
        }
      );
      
      window.location.reload(false);
      toast.info("Image Deleted Successfully");
    } catch (error) {
      toast.error("Email Not Deleted! Try Again");
    }
  };
  const handlePhoneChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      phoneNumber: value // Update phoneNumber in the formData state when the phone number changes
    }));
  };
  return (
    <>
      <Header userInfo={userInfo} />
      <div className="w-full  gap-5 px-3 md:px-16 lg:px-28 md:flex-row  hero pt-10">
        <main className="w-full  md:w-3/3 lg:w-4/4">
        
            <div className="w-full border-2 border-black px-6 mx-auto pb-8 mt-8 sm:max-w-2xl sm:rounded-lg bg-white mb-14">
              <div className="grid max-w-2xl mx-auto  ">
                <div className=" flex-col items-center justify-center gird py-5 w-full space-y-5 sm:flex-row sm:space-y-0">
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    ref={fileRef}
                    hidden
                    accept="image/*"
                  />

                 

                  {/* img upload to firebase status*/}
                  <p className="text-sm self-center">
                    {fileUploadError ? (
                      <span className="text-red-700">
                        {toast.error(
                          "Error Image upload (image must be less than 2 mb)"
                        )}
                      </span>
                    ) : filePerc > 0 && filePerc < 100 ? (
                      <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
                    ) : filePerc === 100 ? (
                      <span className="text-green-700"></span>
                    ) : (
                      ""
                    )}
                  </p>
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => fileRef.current.click()}
                      disabled={active}
                      className="py-3.5 px-7 w-4/12 mx-auto text-base font-medium text-indigo-100 focus:outline-none bg-violet-600 rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    >
                      {t('Change picture')}
                    </button>

                    <button
                      className=" py-3.5 px-7 w-4/12 mx-auto text-base font-medium  focus:outline-none bg-red-600 rounded-lg border border-indigo-200 text-white   focus:z-10 focus:ring-4  "
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      {t('Delete picture')}
                    </button>
                    </div>

                    <div className=" w-full flex items-center justify-center">
                    <div
                    className={`radial-progress overflow-hidden     bg-white border-2 border-indigo-600 ${
                      filePerc < 100 ? "text-error" : "text-success"
                    }`}
                    style={{ "--value": filePerc, "--thickness": "4px" }}
                    role="progressbar"
                  >
                    <div className=" mx-auto">
                      {userInfo && userInfo.avatar && (
                        <img
                          className="object-cover w-100 h-100 rounded-full   ring-2 ring-indigo-300 :ring-indigo-500"
                          src={userInfo.avatar}
                          alt="Bordered avatar"
                          style={{ width: "100%", height: "100%" }} // Set width and height explicitly
                        />
                      )}
                    </div>
                  </div>

                    </div>
                    <div className=" w-full flex items-center justify-center">
                      <h1 className="px-20 py-3 rounded-lg border bg-indigo-600 text-white ">{userInfo && userInfo.username ? userInfo.username:''}</h1>
                    </div>


                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">{t('Are You Sure')} </h3>
                        <p className="py-4">
                          {t('Do Yo Want To Delete The Profile Image')}
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                              className="btn bg-violet-600 text-white"
                              onClick={handleDeletePic}
                            >
                              {t('Yes Delete It')}{" "}
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full ">
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-indigo-900 :text-white"
                      >
                        {t('Your first name')}
                      </label>
                      <input
                        type="text"
                        id="username"
                        onChange={handleChange}
                        disabled={active}
                        defaultValue={userInfo && userInfo.username}
                        placeholder={userInfo && userInfo.username}
                        className="bg-violet-100 border border-indigo-300  text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium "
                    >
                      {t('Your email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={handleChange}
                      disabled={active}
                      defaultValue={userInfo && userInfo.email}
                      placeholder={userInfo && userInfo.email}
                      className="bg-violet-100 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      required
                    />
                  </div>
                  <div className="mb-2 sm:mb-6">
                  <label
                      htmlFor="phonr"
                      className="block mb-2 text-sm font-medium "
                    >
                      {t('Your phone number')}
                    </label>
                    <PhoneInput
        inputProps={{
          name: 'phone',
          className:"bg-violet-100 pl-10 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
          // Assign the name attribute to the underlying input element
        }}

        country={'us'}
        value={userInfo && userInfo?.phoneNumber} // Use phoneNumber from formData as value
        onChange={handlePhoneChange} // Update phoneNumber in the formData state with the entered phone number
      />

                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-indigo-900 :text-white"
                    >
                      {t('Bio')}
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      disabled={active}
                      className="block p-2.5 w-full text-sm text-indigo-900 bg-violet-100 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                      placeholder="Write your bio here..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={handleRegister}
                      className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center :bg-indigo-600 :hover:bg-indigo-700 :focus:ring-indigo-800"
                      disabled={active}
                    >
                      {loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        t("Save Changes")
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
        
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
