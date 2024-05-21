import { Link, useNavigate } from "react-router-dom";
import finder from "../assets/finder.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import OAuth from "../components/0Auth";
import {useTranslation} from 'react-i18next'
import Footer from "../components/Footer";
import Header from "../components/Header";
const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [t,i18n]=useTranslation('global')



  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    const isValidNumber = /^\d{10}$/g.test(phoneNumber);

    if (!isValidNumber) {
      toast.error('The Phone Number Format is Not Correct');
      setLoading(false);
      return;
    }

    const formattedPhoneNumber = "+212" + phoneNumber.slice(1);

    const formData = { username, email, password, phoneNumber: formattedPhoneNumber };

    try {
      const res = await fetch("http://127.0.0.1:4000/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("User created successfully! Login Now");
        navigate("/login");
      } else {
        const errorMessage = data.error || "This Email Already Exists";
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="flex  flex-col  py-10 justify-center text-black  md:flex-row min-h-screen items-center hero bg-violet-700 px-2 ">
        <div
          className="bg-white w-full  lg:w-4/12   md:mx-0    py-10 rounded-2xl  px-6 lg:px-12 xl:px-12
      flex items-center justify-center"
        >
          <div className="w-full h-100">
            <div>
              <img src={finder} width={150} alt="" />
            </div>
            <h1 className="text-xl md:text-xl font-meduim leading-tight mt-5">
              {t('create_your_account')}
            </h1>

            <form className="mt-6" onSubmit={handleRegister}>
              <div>
                <label className="block text-gray-700">{t('username')}</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="user name"
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">{t('email')}</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">{t('password')}</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  minLength="6"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">{t('phone_number')}</label>
                <input
                  type="phone"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  minLength="6"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>



              <button
                type="submit"
                className="w-full block bg-black  hover:scale-105 transition-all  text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  t('register')
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-3">
            <hr className="my-6 border-gray-300 w-full " />
            <h1 className="text-gray-500">Or</h1>
            <hr className="my-6 border-gray-300 w-full" />
            </div>

          <OAuth/>
            <p className="mt-8">
              {t('already have account')}?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-800 font-meduim"
              >
               {t(' login')}
              </Link>
            </p>
          </div>
        </div>
        
      </section>

      
    </>
  );
};

export default Register;
