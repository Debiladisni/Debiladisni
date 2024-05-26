import React from 'react'
import logo from './Shein.png';
import mk from './mk.jpg';
import mk1 from './mk1.jpg';
import mk2 from './mk2.jpg';
import mk3 from './mk3.jpg';
import mk4 from './mk4.jpg';
import mk5 from './mk5.jpg';
import mk6 from './mk6.jpg';
import mk7 from './mk7.jpg';
import ey from './ey.jpg';
import ey1 from './ey1.jpg';
import ey2 from './ey2.jpg';
import ey3 from './ey3.jpg';
import ey4 from './ey4.jpg';
import ey5 from './ey5.jpg';
import ey6 from './ey6.jpg';
import ey7 from './ey7.jpg';


import { Link } from 'react-router-dom';

export const Beauty = () => {
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
        <h1 id="name" className='text-maroon text-5xl mb-4'>BEAUTY PRODUCTS</h1>
        <h1 className='text-firebrick text-4xl'>MAKEUP</h1>
    </div>
     
<div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={mk} description="Lakme ultimate glow foundation" price="Rs.800" onBuyClick={handleBuyClick} />
        <Product imgSrc={mk1} description="M$M compact powder" price="Rs.600" onBuyClick={handleBuyClick} />
        <Product imgSrc={mk2} description="plum soft blen" price="Rs.700" onBuyClick={handleBuyClick} />
        <Product imgSrc={mk3} description="Renee stick foundation" price="Rs.1500" onBuyClick={handleBuyClick} />

</div>
<br></br><br></br>
<div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={mk4} description="Revolution conceler" price="Rs.1000" onBuyClick={handleBuyClick} />
        <Product imgSrc={mk5} description="Fit me tube foundation" price="Rs.400" onBuyClick={handleBuyClick} />
        <Product imgSrc={mk6} description="Sugar foundation" price="Rs.1600" onBuyClick={handleBuyClick} />
        <Product imgSrc={mk7} description="Elif cosmetics" price="Rs.2000" onBuyClick={handleBuyClick} />
        </div>

    {/*2*/}     
    <div className='text-center mt-20 mb-10'>
        <h1 className='text-black text-4xl'>EYESHADOW PALETTES</h1>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={ey} description="Bobby Brown eye paltette" price="Rs.2500" onBuyClick={handleBuyClick} />
        <Product imgSrc={ey1} description="Shine & Glow palette" price="Rs.1600" onBuyClick={handleBuyClick} />
        <Product imgSrc={ey2} description="Maybelline shade:07" price="Rs.1500" onBuyClick={handleBuyClick} />
        <Product imgSrc={ey3} description="Blue heaven eyeshadow" price="Rs.500" onBuyClick={handleBuyClick} />
        </div>
<br></br><br></br>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={ey4} description="Mac eyeshadows" price="Rs.3500" onBuyClick={handleBuyClick} />
        <Product imgSrc={ey5} description="HudaBeauty palette" price="Rs.5000" onBuyClick={handleBuyClick} />
        <Product imgSrc={ey6} description="Nykaa just wink eyeshadow palette" price="Rs.1600" onBuyClick={handleBuyClick} />
        <Product imgSrc={ey7} description="sugar eyeshadows in shade:05" price="Rs.900" onBuyClick={handleBuyClick} />
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
      



