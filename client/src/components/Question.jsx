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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              aperiam illum dicta doloremque minima distinctio aliquid, quas
              itaque iure? Repellat ea molestiae beatae nesciunt. In pariatur
              est dolorum hic assumenda!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sapiente veritatis minima quia nemo delectus beatae
              corrupti vitae dignissimos tenetur qui saepe temporibus impedit,
              unde ex recusandae, quisquam, eos illum!
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
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border bg-white border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl bg-violet-100 font-medium">
            How does the rental market in different cities compare within a
            country?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border bg-white border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl bg-violet-100 font-medium">
            What are the key factors to consider when investing in commercial
            real estate?{" "}
          </div>
          <div className="collapse-content">
            <p>hello</p>
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
