import  { useState } from 'react';
import finder from '../assets/finder.png';
import { toast } from 'react-toastify';

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = { email };

    try {
      const res = await fetch("http://127.0.0.1:4000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Check your email address for the reset link.');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast.error('Failed to send email');
    }

    setLoading(false);
  };

  return (
    <div className='min-h-screen flex items-center justify-center hero '>
      <div className=' bg-white border-2 border-black w-full mx-5 sm:w-9/12 md:w-8/12 lg:w-9/12 xl:w-4/12 px-6 sm:px-8 md:px-10 lg:px-12 py-10 rounded-xl shadow-md'>
        <div className='text-center py-5'>
          <img src={finder} width={200} alt="" />
        </div>
        <p className='py-3 text-gray-500 text-sm'>
          To reset the password, we need your email address to send the reset link.
        </p>

        <form className="mt-6" onSubmit={handleEmail}>
          <div>
            <label className="text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autoFocus
              autoComplete="email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black   text-white font-semibold rounded-lg px-4 py-3 mt-6"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Send Email"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
