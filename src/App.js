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


function App() {
  return (
    <div>
      <CartProvider>
     
     
    
<Pricing/>



<BrowserRouter>
      <Routes>
        
          <Route path="product" element={<Cartitems/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="address" element={<AddressForm/>} />
          <Route path="payment" element={<PaymentForm/>} />
       
      </Routes>
    </BrowserRouter>
   
    <Footer/>
    </CartProvider>
   
    </div>
  );
}

export default App;
