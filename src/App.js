import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Pricing  from './Components/Home';
import Album from './Components/Product';
import { Footer } from './Components/Footer';
import ButtonBases from './Components/Products2'
import  Home  from './Components/Home';
function App() {
  return (
    <div>
<Pricing/>

<ButtonBases/>

<BrowserRouter>
      <Routes>
        
          <Route path="product" element={<Album />} />
       
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
