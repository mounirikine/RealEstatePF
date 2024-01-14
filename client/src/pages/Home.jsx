import FirstSection from "../components/FirstSection";
import Hero from "../components/Hero";
import Video from "../components/Video";
import Header from "../components/Header";
import ShowCatalog from "../components/ShowCatalog";
import Question from "../components/Question";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Header />

      <section className="py-10 ">
        <Hero />
        <FirstSection />

        <Video />
        <ShowCatalog />
        <Question />
        <Contact />
      </section>
    </>
  );
};

export default Home;
