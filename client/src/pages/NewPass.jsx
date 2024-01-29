import  { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import finder from '../assets/finder.png';

const NewPass = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = { password };

    try {
      await fetch(`http://localhost:4000/api/auth/reset-password/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      navigate('/login'); // Added semicolon and formatted the line
    } catch (error) {
      console.error("Error:", error); // Adjusted the space after "Error:"
    }
    setLoading(false);

  };

  return (

    <>
     <div className='min-h-screen flex items-center justify-center bg-[#782DF3]'>
      <div className=' bg-white w-full mx-5 sm:w-9/12 md:w-8/12 lg:w-9/12 xl:w-4/12 px-6 sm:px-8 md:px-10 lg:px-12 py-10 rounded-xl shadow-md'>
        <div className='text-center py-5'>
          <img src={finder} width={200} alt="" />
        </div>
       
        <form className="mt-6" onSubmit={handlePassword}>
      <div className="mt-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6"
      >
         {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "New Password"
            )}
      </button>
    </form>
      </div>
    </div>

    </>
   
  );
};

export default NewPass;
