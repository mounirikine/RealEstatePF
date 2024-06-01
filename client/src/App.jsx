import  { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClockLoader";
import finder from './assets/logof1.png'

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

import CreateAccountStore from "./pages/CreateAccountStore";
import SingleStore from "./pages/SingleStore";
import Others from "./components/form/Others";
import OthersDetails from "./pages/OthersDetails.jsx";
import ai from './assets/ai.svg'
import { FiPlus } from "react-icons/fi";
function App() {
  const [userInfo, setUserInfo] = useState(null);
  const userId = window.localStorage.getItem("userID");
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [color, setColor] = useState("#FFFF");
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSend = async () => {
    setLoading3(true)
    try {
      const res = await fetch('http://localhost:4000/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setLoading3(false)
      setResponse(data);

    } catch (error) {
      console.error('Error:', error);
      setLoading3(false)
      setResponse('An error occurred. Please try again.');
    }
  };
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
          <div className="sweet-loading flex-row  gap-5 justify-center items-center">
            <ClipLoader
            className="mx-auto"
              color={color}
              loading={loading}
              size={90}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <img src={finder} width={150} className="mt-3" alt="" />
          </div>
        </div>
      ) : (
        <>
          

          {/* Routes */}
          <Routes>
          <Route path="/PropertieDetails/:id" element={<PropertieDetails userInfo={userInfo} />} />
          <Route path="/OthersDetails/:id" element={<OthersDetails userInfo={userInfo} />} />

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
            <Route path='/MoreQuestions' element={<MoreQuestions userInfo={userInfo}/>}/>

            {/* Use Routes inside PrivateRoutes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<Profile userInfo={userInfo} />} />
              <Route path="/CreateHome" element={<CreateHome userInfo={userInfo} />} />
              <Route path="/CreateVilla" element={<CreateVilla userInfo={userInfo} />} />
              <Route path="/CreateApartment" element={<CreateApartment userInfo={userInfo} />} />
              <Route path="/CreateCar" element={<CreateCar userInfo={userInfo} />} />
              <Route path="/CreateOffice" element={<CreateOffice userInfo={userInfo} />} />
              <Route path="/CreateBycicle" element={<Others catSlug={'bycicle'} userInfo={userInfo} />} />
              <Route path="/CreateDevices" element={<Others catSlug={'devices'} userInfo={userInfo} />} />
              <Route path="/CreateClothes" element={<Others catSlug={'clothes'} userInfo={userInfo} />} />
              <Route path="/CreateMusicInstruments" element={<Others catSlug={'musicInstruments'} userInfo={userInfo} />} />
              <Route path="/CreateHomefurnishings" element={<Others catSlug={'homefurnishings'} userInfo={userInfo} />} />

              <Route path="/create-account-store" element={<CreateAccountStore userInfo={userInfo} />} />

              <Route path="/create" element={<CreateForm userInfo={userInfo} />} />
             
              <Route path="/list/:id" element={<List userInfo={userInfo} />} /> 
              <Route path="/SingleStore/:id" element={<SingleStore userInfo={userInfo} />} /> 
              <Route path="/Update/:id" element={<UpdateListing />} />
          <Route path="/Update0/:id" element={<UpdateListing0 />} />
            </Route>
          </Routes>
          {/* create-store */}
          <div className="fixed bottom-10 rounded-lg right-10 z-50">
     
      {isOpen ? (<>
        <div className="w-[440px] h-96 bg-white   rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-4 bg-gray-100 ">
            <h4 className="text-lg font-medium">AI Chat</h4>
            <button className="text-gray-600" onClick={toggleChat}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

            </button>
          </div>
          <div className=" p-4 overflow-y-auto">
    
                  <textarea
                      value={prompt}
                      onChange={handleInputChange}
                      placeholder="Type your prompt here..."
                      className="textarea textarea-bordered textarea-xs w-full max-w-xs lg:max-w-full text-black bg-gray-100"
                    ></textarea>
                       <h5 onClick={handleSend} className="btn text-2xl rounded-xl ml-1 bg-violet-300 text-black hover:bg-violet-400 border-none" >
                      {loading3 ? (
                      <span className="loading loading-spinner loading-md "></span>
                    ) : (
                      <FiPlus />
                    )}</h5>
            <div className="p-4 h-44 border-gray-300 bg-gray-50 rounded-2xl mt-2">
            {response}
          </div>
          </div>
          
        </div></>
      ):(<>
       <div className="cursor-pointer" onClick={toggleChat}>
        <img src={ai} alt="AI Logo" className="w-12 h-12 rounded-full bg-slate-200 p-1" />
      </div>
      </>)}
    </div>
        </>
      )}
      
    </>
  );
}

export default App;
