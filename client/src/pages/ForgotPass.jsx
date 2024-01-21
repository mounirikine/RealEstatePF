import React, { useState } from 'react'

const ForgotPass = () => {
    const [email, setEmail] = useState("");
    const handleEmail = async (e) => {
        e.preventDefault();
    
    
        const formData = { email}; // Assuming you have defined username, email, and password somewhere
    
        try {
          const res = await fetch("http://127.0.0.1:4000/api/auth/forgot-password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          
        } catch (error) {
          console.error("Error :", error);
   
        }

      };

  return (
    <form className="mt-6" onSubmit={handleEmail}>
    <div>
      <label className="block text-gray-700">Email Address</label>
      <input type="email" name="" id="" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
    </div>

  
 
    <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6">send email</button>
  </form>
  )
}

export default ForgotPass
