import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link,Navigate,Outlet} from "react-router-dom";
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
import PrivateRoute from 'private-route-react';
import { useState,useEffect } from 'react';
import Authentic from './Components/Authentic';
import MenSection from './Components/MenSection';
import WomenSection from './Components/WomenSection';
import KidsSection from './Components/KidsSection';
import { useSelector } from 'react-redux';



const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};




// if(token1._tokenResponse.idToken==null){
//    finalToken = "s"
// }
// else{
//    finalToken = token1._tokenResponse.idToken
// }


// console.log(token1._tokenResponse.idToken)
function App() {
  

  const state = useSelector((e)=>e.login.token)
 const [isAuthenticated,setisAuthenticated] = useState(false)
  useEffect(()=>{
 if(state){
  setisAuthenticated(true)
    console.log("true")
  }
  else{
    setisAuthenticated(false)
    console.log("false")
  }
  },[])

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

      <Routes>
      <Route element={<PrivateWrapper auth={{ isAuthenticated:{isAuthenticated}}} />}>
            <Route path="/product" element={<Cartitems/>} />
          </Route>
          <Route element={<PrivateWrapper auth={{ isAuthenticated: {isAuthenticated} }} />}>
            <Route path="/cart" element={<Cart/>} />
          </Route>
      <Route path="/" element={<Authentic/>} />
          {/* <Route path="/product" element={<Cartitems/>} />
          <Route path="/cart" element={<Cart/>} /> */}
          <Route path="/address" element={<AddressForm/>} />
          <Route path="/payment" element={<PaymentForm/>} />
          <Route path="/login" element={<SignInSide/>} />
          <Route path="/signup" element={<SignUpSide/>} />
          <Route path="/forgotpass" element={<Forgotpass/>} />
          <Route path="/product/men" element={<MenSection/>} />
          <Route path="/product/women" element={<WomenSection/>} />
          <Route path="/product/kids" element={<KidsSection/>} />

       
      </Routes>
    
   
 
    </CartProvider>
   
    </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;