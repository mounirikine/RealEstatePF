import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

const OAuth=()=> {
    const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('http://127.0.0.1:4000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(data)
      setCookies("access_token", data.token);
      window.localStorage.setItem("userID", data.rest._id);

      navigate("/");
      window.location.reload(false);
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (
  
    <button onClick={handleGoogleClick} className="px-4 py-2 border flex items-center justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-full">
    <img
      className="w-6 h-6"
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      loading="lazy"
      alt="google logo"
    />
    <span>Register with Google</span>
  </button>
  );
}


export default OAuth
