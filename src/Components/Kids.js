import React from 'react'
import logo from './Shein.png';
import kp from './kp.jpg';
import kp1 from './kp1.jpg';
import kp2 from './kp2.jpg';
import kp3 from './kp3.jpg';
import kp4 from './kp4.jpg';
import kp5 from './kp5.jpg';
import kp6 from './kp6.jpg';
import kp7 from './kp7.jpg';
import kc from './kc.jpg';
import kc1 from './kc1.jpg';
import kc2 from './kc2.jpg';
import kc3 from './kc3.jpg';
import kc4 from './kc4.jpg';
import kc5 from './kc5.jpg';
import kc6 from './kc6.jpg';
import kc7 from './kc7.jpg';

import { Link } from 'react-router-dom';

export const Kids = () => {
    const handleBuyClick = () => {
        window.location.href = '/Payment';
    };
  return (
    <div className='bg-red-100 w-full h-[2100px] text-black'>
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
                <Link to='/Login' className="home text-2xl font-bold hover:bg-lightcoral hover:text-rose-800">LOGIN</Link>

   
 </ul>
</div>
</header>
  
  
<main className='p-10'>
    <div className='text-center mb-10'>
        <h1 id="name" className='text-maroon text-5xl mb-4'>KIDS FASHION</h1>
        <h1 className='text-firebrick text-4xl'>PARTY WEAR</h1>
    </div>
     
<div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={kp} description="Floral Gown" price="Rs.1600" onBuyClick={handleBuyClick} />
        <Product imgSrc={kp1} description="Yellow frock " price="Rs.2600" onBuyClick={handleBuyClick} />
        <Product imgSrc={kp2} description="Choli Set in Blue color" price="Rs.2000" onBuyClick={handleBuyClick} />
        <Product imgSrc={kp3} description="Multicolor Co-ords set " price="Rs.1600" onBuyClick={handleBuyClick} />

</div>
<br></br><br></br>
<div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={kp4} description="Boys party wear" price="Rs.1900" onBuyClick={handleBuyClick} />
        <Product imgSrc={kp5} description="Boys Casual wear" price="Rs.1200" onBuyClick={handleBuyClick} />
        <Product imgSrc={kp6} description="Two peice set" price="Rs.1600" onBuyClick={handleBuyClick} />
        <Product imgSrc={kp7} description="Cowboy dress for Boys" price="Rs.2000" onBuyClick={handleBuyClick} />
        </div>

    {/*2*/}     
    <div className='text-center mt-20 mb-10'>
        <h1 className='text-black text-4xl'>CASUAL WEAR</h1>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={kc} description="Mini Frock for girls" price="Rs.1000" onBuyClick={handleBuyClick} />
        <Product imgSrc={kc1} description="Top and pant set for girls" price="Rs.1500" onBuyClick={handleBuyClick} />
        <Product imgSrc={kc2} description="Combo Set" price="Rs.3000" onBuyClick={handleBuyClick} />
        <Product imgSrc={kc3} description="Beautiful white mini Frock" price="Rs.900" onBuyClick={handleBuyClick} />
        </div>
<br></br><br></br>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={kc4} description="Boys combo set" price="Rs.900" onBuyClick={handleBuyClick} />
        <Product imgSrc={kc5} description="Gray shirt " price="Rs.400" onBuyClick={handleBuyClick} />
        <Product imgSrc={kc6} description="Blue stripped T-shirt" price="Rs.300" onBuyClick={handleBuyClick} />
        <Product imgSrc={kc7} description="Red color Co-ords set" price="Rs.1600" onBuyClick={handleBuyClick} />
        </div>

    

        </main>
        <div className="mt-4 text-center">
          <Link to="/Home" className="text-3xl font-bold text-red-600 hover:underline">Back</Link>
        </div>
    </div>
  );
};

const Product =({ imgSrc, description, price, onBuyClick }) => {
    return(
        <div className='flex flex-col items-center'>
            <img src={imgSrc} alt={description} className='w-full h-60 object-cover mb-4' />
            {description && <p className='text-center mb-2'>{description}</p>}
            {price && <p className='text-center mb-4'>{price}</p>}
            <button
                onClick={onBuyClick}
                className='bg-red-600 text-white py-2 px-4 rounded hover:bg-green-700'>
                    BUY
                </button>
        </div>
    );
};
      
   



