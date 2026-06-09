import React, { useState, useContext } from "react";
import bg from "../assets/misaBg.jpg";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { serverUrl } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading,setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/signin`,
        { email, password },
        { withCredentials: true }
      );
      console.log(result);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error.response?.data || error.message || error);
      setError(error.response?.data?.message || "Signin failed. Please try again.");
    }
  }
  return (
    <div className='w-full h-[100vh] bg-cover flex items-center justify-center' style={{backgroundImage: `url(${bg})`}}>
      <form className='w-[90%] h-[600px] max-w-[500px] bg-[#00000013] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px]' onSubmit={handleSignIn}>
        <h1 className='text-white text-[30px] font-semibold mb-[30px]'>Sign in to <span className='text-blue-400'>Virtual Assistant</span></h1>
        <input type="email" placeholder='Email' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' required onChange={(e) => setEmail(e.target.value)} value={email} />
        <div className='w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full text-[18px] relative'>
          <input type={showPassword ? "text" : "password"} placeholder='Password' className='w-full h-full outline-none bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px]' required onChange={(e) => setPassword(e.target.value)} value={password} />
          {!showPassword && <IoMdEye className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-[white] cursor-pointer' onClick={() => setShowPassword(true)} />}
          {showPassword && <IoMdEyeOff className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-[white] cursor-pointer' onClick={() => setShowPassword(false)} />}
        </div>
        {error && <p className='text-red-400 text-[17px] text-center w-full'>*{error}</p>}
        <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full hover:bg-blue-600 transition-colors duration-300 disabled={loading}'>
          {loading ? "Loading..." : "Sign In"}
        </button>
        <p className='text-white text-[18px] cursor-pointer' onClick={() => navigate("/signup")}>
          Don't have an account? <span className='text-blue-400 cursor-pointer hover:underline'>Register</span>
        </p>
      </form>
    </div>
  );
}
export default SignIn;