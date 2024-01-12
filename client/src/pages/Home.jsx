import { Link } from "react-router-dom"
import FirstSection from "../components/FirstSection"
import Hero from "../components/Hero"
import Video from "../components/Video"
import Header from '../components/Header'

const Home = () => {
  return (
    <>
        <Header />  

    <section className="py-10 ">
    <Hero />  
    <FirstSection />
   
<Video />
    </section>  
    </>
  )
}

export default Home