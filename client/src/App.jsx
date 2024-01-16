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
import { useEffect, useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState(null); // Change here
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
        
        // Filter userInfo based on userId
        const filteredUser = data.find(user => user._id === userId);
        setUserInfo(filteredUser);

        console.log(filteredUser);
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
      <Header userInfo={userInfo} />
     
        <Routes>
          <Route path="/" element={<Home userInfo={userInfo} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
   
      <Footer />
    </>
  );
}

export default App;
