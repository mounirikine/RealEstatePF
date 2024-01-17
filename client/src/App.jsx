import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Properties from "./pages/Properties";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import PrivateRoutes from "./lib/PrivateRoutes";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const userId = window.localStorage.getItem('userID');

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:4000/api/auth/userInfo?id=${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        
        const filteredUser = data.find(user => user._id === userId);
        setUserInfo(filteredUser);

       
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (userId) {
      getUser();
    }
  }, [userId]);

  return (
    <>
      <ToastContainer position="top-center" />

      <Header userInfo={userInfo} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home userInfo={userInfo} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
       
          {/* Use Routes inside PrivateRoutes */}
       <Route  element={<PrivateRoutes />}>
       <Route path="/profile" element={<Profile userInfo={userInfo} />} />
       </Route>
   
      </Routes>

      <Footer />
    </>
  );
}

export default App;
