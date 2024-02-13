import FirstSection from "../components/FirstSection";
import Hero from "../components/Hero";
import Video from "../components/Video";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShowCatalog from "../components/ShowCatalog";
import Question from "../components/Question";
import Contact from "../components/Contact";

const Home = ({userInfo}) => {
  return (
    <>
      
      <Header userInfo={userInfo} />
      <section className="">

        <Hero />
        <FirstSection />

        <Video />
        <ShowCatalog />
        <Question />
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Home;
