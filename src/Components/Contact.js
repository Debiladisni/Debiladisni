import React from 'react'
import logo from './Shein.png';
import banner from './1.jpg';
import backgroundImage from './backgroundImage2.jpg';
import { Link, useNavigate  } from 'react-router-dom'

export const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const message = event.target.message.value;

    if (!username || !password || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Redirect to the home page after successful submission
    navigate('/Home');
  };

  return (

// Full bg color with background image
<div
className="bg-red-100 w-full h-[1370px] text-white"
style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>

     {/*nav bg color*/}
      <header className="bg-red-300 h-[7%] text-black  py-4 flex  items-center px-6">

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
       <div className='flex items-center '>
            <img src={banner} alt="img" className='h-[350px] w-full' />
        </div>

        <main className="text-center p-10">
        <h1 id="name" className="text-red-600 text-5xl font-bold">SHEIN FASHION</h1>
        <form id="contactForm" className="mt-10" onSubmit={handleSubmit}>
          <table className="mx-auto">
            <tbody>
              <tr>
                <td className="p-2 text-2xl text-black font-bold" ><h3>Username*</h3></td>
                <td className="p-2 text-red-500"><h3><input type="text" name="username" placeholder="Enter Username or email" className="p-3 border border-gray-300 rounded " /></h3></td>
              </tr>
              <tr>
                <td className="p-2 text-2xl text-black font-bold"><h3>Password*</h3></td>
                <td className="p-2 text-red-500"><h3><input type="password" name="password" placeholder="Enter your password" className="p-2 border border-gray-300 rounded" /></h3></td>
              </tr>
              <tr>
                <td className="p-2 text-2xl text-black font-bold"><h3>Your Message</h3></td>
                <td className="p-2 text-red-500" ><h3><input type="text" name="message" placeholder="Type your message" className="p-2 border border-gray-300 rounded w-full" style={{ height: '100px' }} /></h3></td>
              </tr>
            </tbody>
          </table>
          <button id="btn1" className="mt-5 px-5 py-2 bg-red-600 text-white rounded hover:bg-blue-700">SUBMIT</button>
        </form>
      </main>
       
       <div className='text-center mb-10'>
        <h1 id="name" className='text-red-600 text-4xl font-bold mb-4'>FOR ENQUIRES PLEASE CONTACT</h1>
        <h4 id="name" className='text-black text-2xl'>Contact<br></br>
        +91 8867043828 <br></br>
        sheinfashion@gmail.com</h4>
        
    </div>
     </div>
  );
}

