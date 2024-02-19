import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
const ShowCatalog = () => {
  return (
    <>      <section className="flex items-center gap-8 lg:gap-1  py-14 px-5 sm:px-0 lg:px-10">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 107, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="md:w-1/2  relative hidden lg:flex items-center"
        >
          <img
            className="w-full md:max-w-[400px] rounded-2xl"
            src="https://assets-global.website-files.com/65536c2335f1d63e21d653f2/65536c2335f1d63e21d6554b_alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash-p-800.jpg"
            alt=""
          />
          <div className="flex justify-center items-center"></div>
        </motion.div>
        <motion.div
          initial={{ x: 5, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="w-full lg:w-1/2  px-5"
        >
          <h1 className="font-bold  text-3xl uppercase sm:text-5xl py-5 sm:py-10">
            Discover properties that will improve your{" "}
            <span className="bg-violet-200">
              life and that of your family
            </span>
          </h1>
          <p className=" sm:text-lg  pb-5 sm:pb-10">
          refers to the act of actively seeking out real estate assets or living spaces that offer beneficial features and amenities to enhance the well-being, comfort, and overall quality of life for both yourself and your family members. This could encompass various factors such as location, size, layout, amenities, safety, community atmosphere, and potential for future growth or investment value. The aim is to find properties that align with your specific needs, preferences, and long-term goals, thereby contributing positively to your everyday experiences and fostering a fulfilling family life.
          </p>

          <Link
            to="/"
            className="mx-auto px-6 sm:px-8 py-3 mt-6 sm:mt-8 rounded-xl gap-2 text-xl   hover:translate-x-1  text-black font-bold  flex items-center justify-center "
          >
            To Catalog
            <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default ShowCatalog;
