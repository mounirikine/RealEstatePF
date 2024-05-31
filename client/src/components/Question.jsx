import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { FaArrowRight } from "react-icons/fa";
import MoreQuestions from "./MoreQuestions";
import { IoArrowForward } from "react-icons/io5";


const Question = () => {
  return (

    <div className=" px-2 lg:px-20 sm:px-20 py-14 text-black ">
      <h1 className="text-center mt-3 mx-auto font-bold text-2xl text-black px-5 md:text-3xl uppercase pt-20 md:pt-0">
        Frequently asked questions
      </h1>
      <div className="flex items-center justify-center">
       
      </div>
      <motion.div className="join join-vertical text-black w-full" 
        
      >
        <div className="collapse collapse-arrow join-item border bg-white border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title  font-medium text-xl bg-violet-100">
            What is the process of buying a house in a country?
          </div>
          <div className="collapse-content">
            <p>
            Assessing your financial situation, determining your budget, and obtaining mortgage pre-approval if necessary

            
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border bg-white border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title  font-medium text-xl bg-violet-100">
            How can I calculate the potential return on investment for a rental
            property?
          </div>
          <div className="collapse-content">
            <p>
            Calculate Total Rental Income: Determine the total rental income you expect to receive annually. This includes the monthly rent multiplied by 12 months.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border bg-white border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl bg-violet-100 font-medium">
            What are the common closing costs associated with purchasing a
            property?
          </div>
          <div className="collapse-content">
            <p>Loan Origination Fees: Charges from the lender for processing the loan application, often a percentage of the total loan amount.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border bg-white border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl bg-violet-100 font-medium">
            How does the rental market in different cities compare within a
            country?
          </div>
          <div className="collapse-content">
            <p>Rental Prices: Rental prices can vary widely between cities, with major metropolitan areas generally having higher rents compared to smaller cities or rural areas. Cities with strong job markets and higher costs of living tend to have higher rental prices.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border bg-white border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl bg-violet-100 font-medium">
            What are the key factors to consider when investing in commercial
            real estate?{" "}
          </div>
          <div className="collapse-content">
            <p>Location: Location is paramount in commercial real estate. Evaluate factors such as proximity to major highways, public transportation, population density, demographic trends, and nearby amenities. </p>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center py-3 gap-1">
      <Link to={"/MoreQuestions"} className=" bg-black  px-6 sm:px-8 py-2 mt-6 sm:mt-8 rounded-full  transition-all   font-meduim flex items-center justify-center  text-white  ">More Questions</Link>
      <Link to={"/MoreQuestions"} className=" bg-black  px-3 sm:px-3 py-3 mt-6 sm:mt-8 rounded-full -rotate-45  hover:rotate-0 transition-all   font-meduim flex items-center justify-center  text-white  "><IoArrowForward /> </Link>

      </div>

    </div>
  );
};

export default Question;
