import React from 'react'
import logo from './Shein.png';
import img from './B.jpg';
import img1 from './6.jpg';
import men from './men.jpg';
import women from './women.jpg';
import kids from './kids.jpg';
import beauty from './beauty.jpg';
import banner from './K.webp';


import { Link } from 'react-router-dom'



 export const Home = () => {
  return (
    
    /*full bg color*/
    <div className="bg-red-100  w-full h-[2000px]	 text-white" >

        {/*nav bg color*/}
         <header className="bg-red-300 h-[4%] text-black  py-4 flex  items-center px-6">

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
                <Link to='/Login' className="home  text-2xl font-bold hover:bg-lightcoral hover:text-rose-800">LOGIN</Link>
              </ul>
            </div>
          </header>
          
          <div className='flex items-center '>
            <img src={img} alt="img" className='h-[400px] w-full' />
        </div>

        <div className='relative h-[600px] '>
            <img className= 'transition-transform duration-200 hover:scale-[1.1] absolute left-[0%] h-[600px] w-full' src={img1} alt="img1"  />
        </div>
        <br></br>
       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        <Link to='/men' className="block">
          <img src={men} alt="men" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto" />
          <p className=" text-2xl font-bold text-center mt-2 text-black">Men</p>
        </Link>

        <Link to='/women' className="block">
          <img src={women} alt="women" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto" />
          <p className="text-2xl font-bold text-center mt-2 text-black">Women</p>
        </Link>
  
        <Link to='/kids' className="block">
          <img src={kids} alt="kids" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto" />
          <p className=" text-2xl font-bold text-center mt-2 text-black">Kids</p>
        </Link>
         
         <Link to='/beauty' className="block">
          <img src={beauty} alt="beauty" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto" />
          <p className=" text-2xl font-bold text-center mt-2 text-black">Beauty</p>
        </Link>

      </div>
      <br></br>
      <div className='flex items-center '>
            <img src={banner} alt="img" className='h-[600px] w-full' />
        </div>

        

  </div>
  );
}


