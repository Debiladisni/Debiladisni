import React , { useState }from 'react'
import logo from './Shein.png';
import banner from './3.avif';
import backgroundImage from './backgroundImage2.jpg';
import { Link, useNavigate } from 'react-router-dom'

export const Payment = () => {
  const navigate = useNavigate();
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (cardHolderName === '' || cardNumber === '' || expiryDate === '' || cvv === '') {
      alert('Please fill in all the details.');
      return;
    }
    if (!/^[A-Za-z\s]+$/.test(cardHolderName)) {
      alert('Please enter a valid card holder name.');
      return;
    }
    if (cardNumber.length !== 13 || isNaN(cardNumber)) {
      alert('Please enter a valid card number with 13 digits.');
      return;
    }
    if (cvv.length !== 3 || isNaN(cvv)) {
      alert('Please enter a valid CVV with 3 digits.');
      return;
    }

    const paymentSuccess = true;
    if (paymentSuccess) {
      alert('Payment successful');
      navigate('/Home');
    } else {
      alert('Payment failed. Please try again.');
    }
  };

  return (
 // Full bg color with background image
 <div
 className="bg-red-100 w-full h-[1270px] text-white"
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
            <img src={banner} alt="img" className='h-[450px] w-full' />
        </div>
      
        <center className="my-8">
        <h1 id="name" className="text-black text-5xl font-bold">PAYMENT DETAILS</h1>
      </center>
      <center>
        <form id="paymentForm" className="my-8">
          <table>
            <tbody>
              <tr>
                <td className="pr-4"><h3 className="text-2xl text-black">Card holder name*</h3></td>
                <td>
                  <input
                    type="text"
                    id="cardHolderName"
                    placeholder="Enter your Name"
                    className="border-2 border-gray-300 rounded px-2 py-1 text-red-600"
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                  />
                </td>
              </tr>
              <br></br>
              <tr className="my-4">
                <td className="pr-4"><h3 className="text-2xl text-black">Card number*</h3></td>
                <td>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="Enter your Card number"
                    className="border-2 border-gray-300 rounded px-2 py-1 text-red-600"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </td>
              </tr>
              <br></br>
              <tr className="my-4">
                <td className="pr-4"><h3 className="text-2xl text-black">Expiry date</h3></td>
                <td>
                  <input
                    type="date"
                    id="expiryDate"
                    className="border-2 border-black rounded px-2 py-1 text-red-600"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </td>
              </tr>
              <br></br><br></br>
              <tr className="my-4">
                <td className="pr-4"><h3 className="text-2xl text-black">CVV</h3></td>
                <td>
                  <input
                    type="number"
                    id="cvv"
                    placeholder="Enter CVV"
                    className="border-2 border-gray-300 rounded px-2 py-1 text-red-600"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <button
          id="payButton"
          onClick={handlePayment}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          PAY
        </button>
      </center>
    </div>
  );
}

