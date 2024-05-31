import Footer from "./Footer";
import Header from "./Header";
import { IoSend } from "react-icons/io5";

const MoreQuestions = ({ userInfo }) => {
  return (
    <>
      <Header userInfo={userInfo} />

      <section>
        <main className="px-6 pt-32 pb-32 h-[20vh] md:px-32 hero">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl">More Questions</h1>
          </div>
        </main>
      </section>

      <div className="flex justify-center">
        <p className="pt-5 text-black text-lg text-center">If you have any QUESTIONS you can put them here</p>
      </div>

      <section className="relative border mt-5 hero1 bg-violet-100 z-10  rounded-2xl mx-5 px-4 py-10 md:mx-10 lg:py-[120px] mb-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div className="w-full">
              <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="border-stroke bg-gray-100 text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="border-stroke bg-gray-100 text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="border-stroke bg-gray-100 text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Questions"
                      className="border-stroke bg-gray-100 text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-3/12 flex items-center justify-center gap-2 p-3 text-white transition border rounded-full bg-violet-700 hover:bg-opacity-90"
                    >
                      Send Questions
                      <IoSend />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MoreQuestions;
