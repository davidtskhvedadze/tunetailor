import { useState } from "react";

import Login from "../components/Login";
import Signup from "../components/Signup";
import spotifyLogo from "../assets/Spotify_Primary_Logo_RGB_Green.png";
import pic from "../assets/anne-nygard-ChKVvRDbqew-unsplash.jpg";
import { Button } from "../components/ui/button";

export default function Home() {
  const [isSignup, setIsSignup] = useState(false);

  function handleLogin() {
    window.location.href = `/login`;
  }  
  return (
    <main className="h-screen">
      <div className="flex h-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4">
          <h1 className="flex justify-center items-center text-3xl mb-16 font-bold">Tune Tailor</h1>
          <p className="flex flex-col justify-center items-center text-3xl mb-2">
            Login
            <Button onClick={handleLogin} className="flex items-center justify-center text-green-400 py-2 px-1 text-lg mt-4 mb-1">
              <img src={spotifyLogo} alt="Login with Spotify" className="w-6 h-6 mr-2"/>
              Login with Spotify
            </Button>
          </p>
          {isSignup === false ? <Login /> : <Signup />}
          {isSignup === false ? (
            <div className="mt-4 flex justify-center items-center">
            Don't have an account? 
              <button 
                onClick={() => setIsSignup(!isSignup)} 
                className="flex justify-center ml-2 text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-2 rounded"
              >
              Sign up
              </button>
            </div>
          ) : null}
        </div>
        <div className="hidden md:block w-1/2 h-full">
          <img alt="you are what you listen to" src={pic} className="w-full h-full object-cover"/>
        </div>
      </div>
    </main>
  );
}