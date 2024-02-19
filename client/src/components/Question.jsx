import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { FaArrowRight } from "react-icons/fa";

const Question = () => {
  return (

    <div className=" px-2 lg:px-20 sm:px-20 py-14">
      <h1 className="text-5xl lg:px-24 lg:text-6xl font-bold mb-2 w-full text-center lg:text-left">
        Frequently asked questions
      </h1>
      <div className="flex items-center justify-center">
       
      </div>
      <motion.div className="join join-vertical text-black w-full" 
         initial={{x:5 ,opacity:0}}
         whileInView={{x:0,opacity:1 }}
         transition={{duration:0.8 ,delay:0.75}} 
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
      <div className="flex items-center justify-center py-10">
      <Link className="mx-auto px-6 sm:px-8 py-3 mt-6 sm:mt-8 rounded-xl text-xl hover:translate-x-1   font-bold flex items-center justify-center   ">More Questions <FaArrowRight /> </Link>

      </div>

    </div>
  );
};

export default Question;
