import React from 'react';
import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function App() {

  return (
<>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element= {<Home />}  />
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='product' element={<OurStore/>}></Route>
      <Route path='product/:id' element={<SingleProduct/>}></Route>
      <Route path='cart' element={<Cart/>}></Route>
      <Route path='checkout' element={<Checkout/>}></Route>
      <Route path='compare-product' element={<CompareProduct/>}></Route>
      <Route path='wishlist' element={<Wishlist/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='forgot-password' element={<Forgotpassword/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
      <Route path='reset-password' element={<Resetpassword/>}></Route>
      <Route path='privacy-policy' element={<PrivacyPolicy/>}></Route>
      <Route path='refund-policy' element={<RefundPolicy/>}></Route>
      <Route path='shipping-policy' element={<ShippingPolicy/>}></Route>
      <Route path='term-and-conditions' element={<TermAndConditions/>}></Route>
    </Route>
  </Routes>
</BrowserRouter>
</>
  );

}

export default App;
