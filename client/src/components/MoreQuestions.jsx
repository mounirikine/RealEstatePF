import Footer from "./Footer"
import Header from "./Header"


const MoreQuestions = () => {
  return (
    <>

    <Header />
        <section>
          <main className="px-32 pt-10 pb-32 min-h-screen">
            <div className="flex  justify-center ">
              <h1 className="text-6xl font-bold text-black">More Questions</h1> 
              
              
            </div>
            <div className="flex  justify-center ">
            <p className="pt-5 text-black text-lg">If you have any QUESTIONS you put it here   </p>                  
            </div>

            <section className="relative border mt-5 bg-violet-100 z-10 overflow-hidden  rounded-2xl md:mx-5 :bg- px-10 py-10 lg:py-[120px]">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4 lg:justify-between">
               
                <div className="w-full">
                  <div className="relative p-8 bg-white rounded-lg shadow-lg :bg--2 sm:p-12">
                    <form>
                      <div className="mb-6">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="border-stroke :border--3 :text--6 :bg- text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="border-stroke :border--3 :text--6 :bg- text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          type="text"
                          placeholder="Your Phone"
                          className="border-stroke :border--3 :text--6 :bg- text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                        />
                      </div>
                      <div className="mb-6">
                        <textarea
                          rows="6"
                          placeholder="Your Questions"
                          className="border-stroke :border--3 :text--6 :bg- text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full p-3 text-white transition border rounded  bg-violet-600  hover:bg-opacity-90"
                        >
                          Send Questions
                        </button>
                      </div>
                    </form>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </main>
        </section>
    <Footer />
    </>
  )
}

export default MoreQuestions