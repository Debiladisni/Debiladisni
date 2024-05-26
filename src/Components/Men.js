import React from 'react'
import logo from './Shein.png';
import img from './images.jpg';
import me from './ma.jpg';
import me1 from './m2.jpg';
import me2 from './m4.jpg';
import me3 from './a.jpg';
import me4 from './m6.jpg';
import me5 from './download.jpg';
import me6 from './men2.jpg';
import mc from './men1.jpg';
import mc1 from './m5.jpg';
import mc2 from './men.jpg';
import mc3 from './m8.jpg';
import mc4 from './mc.jpg';
import mc5 from './m7.jpg';
import mc6 from './m9.jpg';
import mc7 from './m3.jpg';




import { Link } from 'react-router-dom';

export const Men = () => {
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
        <h1 id="name" className='text-maroon text-5xl mb-4'>MENS FASHION</h1>

        <h1 className='text-firebrick text-4xl'>CASUAL WEAR</h1>
    </div>

<div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
     <Product imgSrc={img} description="Purple classic hoodie" price="Rs.1600" onBuyClick={handleBuyClick} /> 
     <Product imgSrc={me} description="Basic Hoodie(black color)" price="Rs.1000" onBuyClick={handleBuyClick} />
     <Product imgSrc={me1} description="Mens Shirt in Casual wear" price="Rs.800" onBuyClick={handleBuyClick}  />
     <Product imgSrc={me2} description="Pop shirts" price="Rs.1200" onBuyClick={handleBuyClick} />
</div>
<br></br><br></br>
<div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={me3} description="Combo set in Mens wear" price="Rs.2000" onBuyClick={handleBuyClick} />
        <Product imgSrc={me4} description="Checked Shirt for Mens" price="Rs.500" onBuyClick={handleBuyClick} />
        <Product imgSrc={me5} description="H&M Hoodie" price="Rs.2800" onBuyClick={handleBuyClick} />
        <Product imgSrc={me6}  description="Mens T-shirt in Gray" price="Rs.600" onBuyClick={handleBuyClick} />
        </div>

    
{/*2*/}     
    <div className='text-center mt-20 mb-10'>
        <h1 className='text-black text-4xl'>PARTY WEAR</h1>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={mc} description="Combo Partywear Set " price="Rs.3000" onBuyClick={handleBuyClick} />
        <Product imgSrc={mc1} description="Shiney Jacket" price="Rs.2000" onBuyClick={handleBuyClick} />
        <Product imgSrc={mc2} description="Casual wear Combo" price="Rs.1000" onBuyClick={handleBuyClick} />
        <Product imgSrc={mc3} description="Black Casualwear " price="Rs.1500" onBuyClick={handleBuyClick} />
        </div>
<br></br><br></br>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Product imgSrc={mc4} description="Black and Red Suit" price="Rs.3500" onBuyClick={handleBuyClick} />
        <Product imgSrc={mc5} description="Plain Shirt" price="Rs.400" onBuyClick={handleBuyClick} />
        <Product imgSrc={mc6} description="Floral Printed Shirt" price="Rs.800" onBuyClick={handleBuyClick} />
        <Product imgSrc={mc7} description="Sandal Jacket in Mens wear" price="Rs.1500" onBuyClick={handleBuyClick} />
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


