import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFound = ({userInfo}) => {
  return (
    <>
      <Header  userInfo={userInfo}/>

      <section className="hero h-[90vh]">
        <main className="flex items-center justify-center">
          <div>
            <h1 className="text-[10rem] text-center font-bold text-violet-500">404</h1>
            <h1 className="text-center text-4xl font-bold">Oops! Page can’t be found.</h1>
            <p className="text-lg text-center mt-5">The page you are looking for doesn't exist or has been moved.</p>

            <div className="flex items-center justify-center pt-10">
            <Link to='/'  className="mx-auto bg-black text-white px-14 py-3 rounded-xl" >Back To HomePage</Link>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default NotFound;
