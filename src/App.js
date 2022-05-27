import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Pricing  from './Components/Home';
import Album from './Components/Product';
import { Footer } from './Components/Footer';
import ButtonBases from './Components/Products2'
import  Home  from './Components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cartitems from './Components/Cartitems';
import Cart from './Components/Cart'
import {CartProvider} from 'react-use-cart'
import AddressForm from './Components/Address'
import PaymentForm from './Components/Paymentform'
import AutoplayExample from './Components/Homeslideshow'
import {SignInSide} from './sign-in/Login'
import Mainhome from './Components/Mainhome';
import {SignUpSide} from './sign-up/SignUp'
import Siderbar from './Components/Siderbar';
import TestProd from './Components/TestProd';
import Forgotpass from './sign-in/Forgotpass'

function App() {
  return (
    <>

    <TestProd/>
   
       <Pricing/>
    <div className='flexprop'>
    <div className='box1'>
      <Siderbar/>
     
    </div>
    <div className='box2'>
 
      <CartProvider>

     
    

{/* <AutoplayExample/>
<ButtonBases/> */}

<BrowserRouter>
      <Routes>
      <Route path="/" element={<Mainhome/>} />
          <Route path="/product" element={<Cartitems/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/address" element={<AddressForm/>} />
          <Route path="/payment" element={<PaymentForm/>} />
          <Route path="/login" element={<SignInSide/>} />
          <Route path="/signup" element={<SignUpSide/>} />
          <Route path="/forgotpass" element={<Forgotpass/>} />
       
      </Routes>
    </BrowserRouter>
   
 
    </CartProvider>
   
    </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;
