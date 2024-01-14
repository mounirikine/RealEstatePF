import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import Properties from './pages/Properties'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
    
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />    
      <Route path='/register' element={<Register />} />    
      <Route path='/properties' element={<Properties />} />    
      <Route path='/about' element={<About />} />    
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />


    </>
  )
}

export default App
