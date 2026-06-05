import React from "react";
import bg from "../assets/misaBg.jpg";
import { IoMdEye } from "react-icons/io";
//import { IoMdEyeOff } from "react-icons/io";
//<IoMdEyeOff />
function SignUp() {
  return (
    <div className='w-full h-[100vh] bg-cover flex items-center justify-center' style={{backgroundImage: `url(${bg})`}}>
      <form className='w-[90%] h-[600px] max-w-[500px] bg-[#00000013] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px]'>
        <h1 className='text-white text-[30px] font-semibold mb-[30px]'>Register to <span className='text-blue-400'>Virtual Assistant</span></h1>
        <input type="text" placeholder='Enter your name' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' />
        <input type="email" placeholder='Email' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' />
        <div className='w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full text-[18px] relative'>
            <input type="password" placeholder='password' className='w-full h-full outline-none bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px]' />
        <IoMdEye className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-[white]'/>
        </div>
      </form>
    </div>
  );
}
export default SignUp;