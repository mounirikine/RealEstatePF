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
    }, 3000);
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />

      {loading2 ? (
        <div className="h-screen bg-black flex items-center justify-center">
          <div className="sweet-loading flex-col gap-5 justify-center items-center">
            <ClipLoader
            className="mx-auto"
              color={color}
              loading={loading}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <img src={finder} width={200} alt="" />
          </div>
        </div>
      ) : (
        <>
          

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home userInfo={userInfo} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/properties" element={<Properties userInfo={userInfo} />} />
            <Route path="/about" element={<About userInfo={userInfo} />} />
            <Route path="/*" element={<NotFound />} />
            <Route path='/forgot-Pass' element={<ForgotPass/>}/>
            <Route path='/forgot-Pass/:id/:token' element={<NewPass/>}/>

            {/* Use Routes inside PrivateRoutes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<Profile userInfo={userInfo} />} />
              <Route path="/CreateHome" element={<CreateHome userInfo={userInfo} />} />
              <Route path="/CreateVilla" element={<CreateVilla userInfo={userInfo} />} />
              <Route path="/CreateApartment" element={<CreateApartment userInfo={userInfo} />} />
              <Route path="/CreateCar" element={<CreateCar userInfo={userInfo} />} />
              <Route path="/CreateOffice" element={<CreateOffice userInfo={userInfo} />} />
              <Route path="/create" element={<CreateForm userInfo={userInfo} />} />
            </Route>
          </Routes>

          
        </>
      )}
    </>
  );
}

export default App;
