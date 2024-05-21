import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {useTranslation} from 'react-i18next'

import { FaArrowRight } from "react-icons/fa";
const ShowCatalog = () => {
  const [t,i18n]=useTranslation('global')

  return (
    <>      <section className="flex items-center gap-8 lg:gap-1  py-14 px-5 sm:px-0 lg:px-10 text-black">
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
            {t('CatalogeTitle')}{" "}
            
          </h1>
          <p className=" sm:text-base  pb-5  text-gray-500 ">
{t('CatalogDes')}          </p>

          <Link
            to="/"
            className="mx-auto px-6 sm:px-1 py-3  mt-4 rounded-xl gap-2 text-lg   hover:gap-5  text-black font-meduim  transition-all  flex items-center  "
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
