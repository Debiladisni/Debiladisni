import React from 'react'
import logo from './Shein.png';
import wd from './wd.jpg';
import wd1 from './wd1.jpg';
import wd2 from './wd2.jpg';
import wd3 from './wd3.jpg';
import wd4 from './wd4.jpg';
import wd5 from './wd5.jpg';
import wd6 from './wd6.jpg';
import wd7 from './wd7.jpg';
import wc from './wc.jpg';
import wc1 from './wc1.jpg';
import wc2 from './wc2.jpg';
import wc3 from './wc3.jpg';
import wc4 from './wc4.jpg';
import wc5 from './wc5.jpg';
import wc6 from './wc6.jpg';
import wc7 from './wc7.jpg';
import { Link } from 'react-router-dom';

export const Women = () => {
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
        <h1 id="name" className='text-maroon text-5xl mb-4'>WOMENS FASHION</h1>
        <h1 className='text-firebrick text-4xl'>CASUAL WEAR</h1>
    </div>
     
<div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={wd} description="Black Floral maxi" price="Rs.1600" onBuyClick={handleBuyClick} />
        <Product imgSrc={wd1} description="Butterfly printed Skirt" price="Rs.900" onBuyClick={handleBuyClick} />
        <Product imgSrc={wd2} description="Multi-color mini dress" price="Rs.600" onBuyClick={handleBuyClick} />
        <Product imgSrc={wd3} description="Yellow mini dress" price="Rs.1000" onBuyClick={handleBuyClick} />

</div>
<br></br><br></br>
<div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={wd4} description="White and Blue maxi" price="Rs.1500" onBuyClick={handleBuyClick} />
        <Product imgSrc={wd5} description="Gerogette maxi" price="Rs.1200" onBuyClick={handleBuyClick} />
        <Product imgSrc={wd6} description="simple White dress" price="Rs.1000" onBuyClick={handleBuyClick} />
        <Product imgSrc={wd7} description="Multicolor Two Co-ords set" price="Rs.2000" onBuyClick={handleBuyClick} />
        </div>

    {/*2*/}     
    <div className='text-center mt-20 mb-10'>
        <h1 className='text-black text-4xl'>COMFORT WEAR</h1>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={wc} description="Korean style paijama set" price="Rs.900" onBuyClick={handleBuyClick} />
        <Product imgSrc={wc1} description="Floral printed co-ords set" price="Rs.800" onBuyClick={handleBuyClick} />
        <Product imgSrc={wc2} description="Heart printed sleepwear" price="Rs.1000" onBuyClick={handleBuyClick} />
        <Product imgSrc={wc3} description="Polka dots with full hand" price="Rs.1200" onBuyClick={handleBuyClick} />
        </div>
<br></br><br></br>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={wc4} description="white color sleepwear" price="Rs.1000" onBuyClick={handleBuyClick} />
        <Product imgSrc={wc5} description="Beautiful co-ords set in Multicolor" price="Rs.1600" onBuyClick={handleBuyClick} />
        <Product imgSrc={wc6} description="Baby Pink mini dress" price="Rs.800" onBuyClick={handleBuyClick} />
        <Product imgSrc={wc7} description="Shorts set in sleepwear" price="Rs.1500" onBuyClick={handleBuyClick} />
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



