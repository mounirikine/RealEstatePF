import finder from "../assets/finder.png";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import OAuth from "../components/0Auth";
import {useTranslation} from 'react-i18next'
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [t,i18n]=useTranslation('global')


  const [loading, setLoading] = useState(false);
  const [_, setCookies] = useCookies(["access_token"]);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = { email, password }; // Assuming you have defined username, email, and password somewhere

    try {
      const res = await fetch("http://127.0.0.1:4000/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setCookies("access_token", data.token, { path: '/', domain: 'localhost' }); // Adjust domain and path accordingly

      window.localStorage.setItem("userID", data.rest._id);
      window.localStorage.setItem("Phone", data.rest.phoneNumber);
      navigate("/");
      window.location.reload(false);
    } catch (error) {
      console.error("Error Login user:", error);
      toast.error("Email or Password is not correct ! try Again");
    }
    setLoading(false);
  };
 
  return (
    <>
      <section className="flex  min-h-screen items-center justify-center py-10 hero bg-violet-700 px-2">
        <div
          className="bg-white w-full  text-black lg:w-4/12    rounded-xl md:mx-0   py-10 px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div className="w-full h-100">
            <div>
              <img src={finder} width={150} alt="" />
            </div>
            <h1 className="text-xl md:text-xl font-meduim leading-tight mt-5">
            {t('loginTitle')}
            </h1>

            <form className="mt-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-gray-700">{t('email')}</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
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
                  minlength="6"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="text-right mt-2">
                <Link
                  to={"/forgot-pass"}
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  {t('forgetpassword')}?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full block bg-black hover:scale-105 transition-all  focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  t('login')
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-3">
            <hr className="my-6 border-gray-300 w-full " />
            <h1 className="text-gray-500">Or</h1>
            <hr className="my-6 border-gray-300 w-full" />
            </div>
            <OAuth />
            <p className="mt-8">
            {t('need an account?')}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-700 font-meduim"
              >
                 {t(' register')}
              </Link>
            </p>
          </div>
        </div>
      
      </section>
    </>
  );
};

export default Login;



