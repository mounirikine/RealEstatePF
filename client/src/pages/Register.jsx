import { Link, useNavigate } from "react-router-dom";
import finder from "../assets/finder.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import OAuth from "../components/0Auth";
import Footer from "../components/Footer";
const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    const isValidNumber = /^\d{10}$/g.test(phoneNumber);

    if (!isValidNumber) {
      toast.error('The Phone Number Format is Not Correct');
      setLoading(false);
      return;
    }

    const formattedPhoneNumber = "+212" + phoneNumber.slice(1);

    const formData = { username, email, password, phoneNumber: formattedPhoneNumber };

    try {
      const res = await fetch("http://127.0.0.1:4000/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("User created successfully! Login Now");
        navigate("/login");
      } else {
        const errorMessage = data.error || "This Email Already Exists";
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="flex flex-col pt-40  md:flex-row h-screen items-center">
        <div
          className="bg-white w-full  lg:w-6/12   md:mx-0   h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div className="w-full h-100">
            <div>
              <img src={finder} width={300} alt="" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Let's Create your account
            </h1>

            <form className="mt-6" onSubmit={handleRegister}>
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="user name"
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  minLength="6"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="phone"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  minLength="6"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>



              <button
                type="submit"
                className="w-full block bg-black   text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  " Register"
                )}
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

          <OAuth/>
            <p className="mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden hero bg-violet-300 w-5/12 lg:w-6/12 min-h-screen h-[130vh] lg:flex items-center justify-center">
          
        </div>
      </section>

      
    </>
  );
};

export default Register;
