import React from 'react'
import logo from './Shein.png';
import backgroundImage from './backgroundImage1.jpg';
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    // Full bg color with background image
    <div
      className="bg-red-100 w-full h-[800px] text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

   {/*nav bg color*/}
         <header className="bg-red-300 h-[9%] text-black  py-4 flex  items-center px-6">

      { /*logo*/}
        <div className='flex items-center '>
            <img src={logo} alt="Logo" className='h-30 w-36' />
        </div>
        
        {/* Centering the navigation */}
        <div className="flex-1 flex justify-center">
        
         <ul className="flex space-x-14">
              <Link to='/Home' className="home text-2xl font-bold hover:bg-lightcoral hover:text-rose-800">HOME</Link>
                <Link to='/Payment ' className="home text-2xl font-bold hover:bg-lightcoral hover:text-rose-800">PAYMENT</Link>
                <Link to='/Contact' className="home text-2xl font-bold hover:bg-lightcoral hover:text-rose-800">CONTACT US</Link>
                <Link to='/Login' className="home text-2xl font-bold hover:bg-lightcoral hover:text-rose-800">LOGIN</Link>
              </ul>
            </div>
          </header>

          <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-10">
            <label className="block text-white-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full text-red-500 px-3 py-2 border border-gray-300 rounded-lg" type="email" id="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="block text-white-700 mb-2" htmlFor="password">Password</label>
            <input className="w-full text-red-500 px-3 py-2 border border-gray-300 rounded-lg" type="password" id="password" placeholder="Password" />
          </div>
          <Link to ="/Home">
           <button className="w-full bg-red-400 text-black py-2 rounded-lg hover:bg-red-700 transition duration-300" type="submit">Login</button>
           </Link>
        </form>
        <div className="mt-4 text-center">
          <Link to="/Sign" className="text-white-500 hover:underline">Don't have an account? Sign Up</Link>
        </div>
      </div></div>


      </div>

          
  );
}
