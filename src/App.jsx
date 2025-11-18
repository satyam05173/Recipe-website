import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import Todo from './Contact';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { toast, ToastContainer } from 'react-toastify';

import Food from './Food';
import Cart from './Cart';
import Navbar from './Component/Navbar';
import Contact from './Contact';



function App() {
 



 const [cart, setCart] = useState([])
const addToCart=(meal)=>
{
  if(!cart.find((item)=>item.idMeal===meal.idMeal))
   
setCart([...cart,meal])
}
const removeToCart=(idMeal)=>

{setCart(cart.filter((item)=>item.idMeal !==idMeal))
 

}

 //✅ Load from localStorage on first render
 useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
    
  <BrowserRouter>
     <Navbar  cart={cart} />
      <Routes>

       
         <Route path="/" element={<Home/>} />
      
         <Route path="/food" element={<Food addToCart={addToCart} cart={cart} />} />

         <Route path="/cart" element={<Cart  cart={cart}     removeToCart={removeToCart} />} />
         <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/login" element={<Login />} />
    
     </Routes>
    </BrowserRouter>
     <ToastContainer position="top-right" autoClose={3000} /> 
   
    
     
     
    </>
  )
}

export default App
