import  { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClockLoader";
import finder from './assets/finder.png'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Properties from "./pages/Properties";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import PrivateRoutes from "./lib/PrivateRoutes";
import CreateForm from "./pages/CreateForm";
import CreateHome from "./components/form/CreateHome";
import CreateVilla from "./components/form/CreateVilla";
import CreateApartment from "./components/form/CreateApartment";
import CreateCar from "./components/form/CreateCar";
import CreateOffice from "./components/form/CreateOffice";
import ForgotPass from "./pages/ForgotPass";
import NewPass from "./pages/NewPass";
import PropertieDetails from "./pages/PropertieDetails";
import CarDetails from "./pages/CarDetails";
import List from "./pages/List";
import UpdateListing from "./components/form/UpdateListing";
import UpdateListing0 from "./components/form/UpdateListing0";
import Contactus from "./pages/Contactus";
import MoreQuestions from "./components/MoreQuestions";
import CreateStore from "./pages/CreateStore";
import Store from "./pages/Store";
import CreateAccountStore from "./pages/CreateAccountStore";
import SingleStore from "./pages/SingleStore";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const userId = window.localStorage.getItem("userID");
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [color, setColor] = useState("#782DF3");

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:4000/api/auth/userInfo?id=${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();

        const filteredUser = data.find((user) => user._id === userId);
        setUserInfo(filteredUser);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (userId) {
      getUser();
    }
  }, [userId]);

  useEffect(() => {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 2000);
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />

      {loading2 ? (
        <div className="h-screen hero flex items-center justify-center">
          <div className="sweet-loading flex-col gap-5 justify-center items-center">
            <ClipLoader
            className="mx-auto"
              color={color}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <img src={finder} width={330} alt="" />
          </div>
        </div>
      ) : (
        <>
          

          {/* Routes */}
          <Routes>
          <Route path="/PropertieDetails/:id" element={<PropertieDetails userInfo={userInfo} />} />
         
          <Route path="/cardDetails/:id" element={<CarDetails userInfo={userInfo} />} />
            <Route path="/" element={<Home userInfo={userInfo} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/properties" element={<Properties userInfo={userInfo} />} />
            <Route path="/about" element={<About userInfo={userInfo} />} />
            <Route path="/contact" element={<Contactus userInfo={userInfo} />} />
            <Route path="/*" element={<NotFound  userInfo={userInfo}/>} />
            <Route path='/forgot-Pass' element={<ForgotPass/>}/>
            <Route path='/forgot-Pass/:id/:token' element={<NewPass/>}/>
            <Route path='/MoreQuestions' element={<MoreQuestions/>}/>
            <Route path='/store' element={<Store userInfo={userInfo}/>} />

            {/* Use Routes inside PrivateRoutes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<Profile userInfo={userInfo} />} />
              <Route path="/CreateHome" element={<CreateHome userInfo={userInfo} />} />
              <Route path="/CreateVilla" element={<CreateVilla userInfo={userInfo} />} />
              <Route path="/CreateApartment" element={<CreateApartment userInfo={userInfo} />} />
              <Route path="/CreateCar" element={<CreateCar userInfo={userInfo} />} />
              <Route path="/CreateOffice" element={<CreateOffice userInfo={userInfo} />} />
              <Route path="/create-account-store" element={<CreateAccountStore userInfo={userInfo} />} />

              <Route path="/create" element={<CreateForm userInfo={userInfo} />} />
              <Route path="/create-store" element={<CreateStore userInfo={userInfo} />} />
              <Route path="/list/:id" element={<List userInfo={userInfo} />} /> 
              <Route path="/SingleStore/:id" element={<SingleStore userInfo={userInfo} />} /> 
              <Route path="/Update/:id" element={<UpdateListing />} />
          <Route path="/Update0/:id" element={<UpdateListing0 />} />
            </Route>
          </Routes>
          {/* create-store */}

          
        </>
      )}
    </>
  );
}

export default App;
