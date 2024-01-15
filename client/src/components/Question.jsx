import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const Question = () => {
  return (
    <div className=" px-2 lg:px-20 sm:px-20 py-14">
      <h1 className="font-bold text-4xl text-center pb-5 ">
        Frequently asked questions
      </h1>
      <div className="flex items-center justify-center">
        <p className="w-12/12  lg:w-8/12 sm:w-11/12 font-semibold text-lg text-center py-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          necessitatibus eum magnam atque repellendus quibusdam suscipit debitis
          
        </p>
      </div>
      <motion.div className="join join-vertical text-black w-full" 
         initial={{x:5 ,opacity:0}}
         whileInView={{x:0,opacity:1 }}
         transition={{duration:0.8 ,delay:0.75}} 
      >
        <div className="collapse collapse-arrow join-item border bg-white border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-lg font-medium">
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
          <div className="collapse-title text-lg font-medium">
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
          <div className="collapse-title text-lg font-medium">
            What are the common closing costs associated with purchasing a
            property?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border bg-white border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-lg font-medium">
            How does the rental market in different cities compare within a
            country?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border bg-white border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-lg font-medium">
            What are the key factors to consider when investing in commercial
            real estate?{" "}
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center py-20">
      <Link className="px-20 py-4 rounded-xl secondary_color text-white font-bold mx-auto ">More Questions</Link>

      </div>

    </div>
  );
};

export default Question;
