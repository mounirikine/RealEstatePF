import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import Properties from './pages/Properties'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Profile from './pages/Profile'

function App() {

  return (
    <>
    
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />    
      <Route path='/register' element={<Register />} />    
      <Route path='/properties' element={<Properties />} />    
      <Route path='/about' element={<About />} />    
      <Route path='/profile' element={<Profile />} />    
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />


    </>
  )
}

export default App
