import React, { useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';

const NewPass = () => {
  const { id, token } = useParams(); // Move it here to ensure it's defined
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handlePassword = async (e) => {
    e.preventDefault();

    const formData = { password };

    try {
     await fetch(`http://localhost:4000/api/auth/reset-password/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
navigate('/login')
      // Handle the response as needed
    } catch (error) {
      console.error("Error :", error);
    }
  };

  return (
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
        New Password
      </button>
    </form>
  );
};

export default NewPass;
