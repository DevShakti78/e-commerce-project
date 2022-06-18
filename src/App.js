import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link,Navigate,Outlet} from "react-router-dom";
import  Pricing  from './Components/Home';
import { Footer } from './Components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from "./Components/Cart"
import {CartProvider} from 'react-use-cart'
import AddressForm from './Components/Address'
import PaymentForm from './Components/Paymentform'
import {SignInSide} from './sign-in/Login'
import Mainhome from './Components/Mainhome';
import {SignUpSide} from './sign-up/SignUp'
import TestProd from './Components/TestProd';
import Forgotpass from './sign-in/Forgotpass'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import Appclone from './Components/Appclone'
import PrivateRoutes from './Components/PrivateRoutes';



function App() {
  

  const state = useSelector((e)=>e.login.token)
  return (
   
    <>

    <TestProd/>
   
       <Pricing/>
    <div className='flexprop'>
    <div className='box1'>
     
     
    </div>
    <div className='box2'>
 
      <CartProvider>


      <Routes>
<Route element={<PrivateRoutes/>}>
<Route path="/address" element={<AddressForm/>} exact />
</Route>

            <Route path="/cart" element={<Cart/>} />
          <Route path="/product" element={<Appclone/>} />
          <Route path="/" element={<Mainhome/>} exact />
         
          <Route path="/payment" element={<PaymentForm/>} />
          <Route path="/login" element={<SignInSide/>} />
          <Route path="/signup" element={<SignUpSide/>} />
          <Route path="/forgotpass" element={<Forgotpass/>} />

       
      </Routes>
    
   
 
    </CartProvider>
   
    </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;