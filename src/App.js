import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './Components/Home';
import {Payment} from './Components/Payment';
import {Contact} from './Components/Contact';
import {Login} from './Components/Login';
import {Sign} from './Components/Sign';
import {Men} from './Components/Men';
import {Women} from './Components/Women';
import {Kids} from './Components/Kids';
import {Beauty} from './Components/Beauty';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='Home' element={<Home/>}></Route>
    <Route path='Login' element={<Login/>}></Route>
    <Route path='Sign' element={<Sign/>}></Route>
    <Route path='Contact' element={<Contact/>}></Route>
    <Route path='Payment' element={<Payment/>}></Route>
    <Route path='Men' element={<Men/>}></Route>
    <Route path='Women' element={<Women/>}></Route>
    <Route path='Kids' element={<Kids/>}></Route>
    <Route path='Beauty' element={<Beauty/>}></Route>



    </Routes>
   </BrowserRouter>
  );
}

export default App;
