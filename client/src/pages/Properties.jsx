import Header from "../components/Header";
import Residential from "../components/Residential";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


import PropertiesFilter from "../components/PropertiesFilter";

const Properties = ({ userInfo }) => {
  
  
  return (
    <>
      <Header userInfo={userInfo} />
      <section>
       
            <PropertiesFilter />
      </section>

      <Footer />
    </>
  );
};

export default Properties;
