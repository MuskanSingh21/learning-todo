import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

     //----------- ALl hooks use here --------------
    const navigate = useNavigate();
    
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl">Todo Application</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form action="#">
            <div className="mb-4 flex justify-center text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-600 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-600 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="id@email.com"
              />
            </div>

            <div className="mb-4 flex justify-center text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-600 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-600 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="name"
                placeholder="*********"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-yellow-600 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-800"
              >
                Login
              </button>
            </div>
             <span className='mt-4 block text-center'>if you don't have account please <span className='text-blue-500 cursor-pointer' onClick={()=>navigate('/register')}>register</span> first</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
