import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar/NavBar';
import MyWallet from './Pages/MyWallet';
import Receipt from './Pages/Receipt';
import Setting from './Pages/Setting';
import Delivery from './Pages/Delivery';
import CustomerSupport from './Pages/CustomerSupport';
import CartModule from './Components/NavBar/CartModule';
import Product from './Pages/Product';

function App() {
 
  return (
    <>
    <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mywallet" element={<MyWallet/>}/>
      <Route path="/receipt" element={<Receipt/>}/>
      <Route path="/settings" element={<Setting/>}/>
      <Route path="/delivery" element={<Delivery/>}/>
      <Route path="/CustomerSupport" element={<CustomerSupport/>}/>
      <Route path="/cartModule" element={<CartModule/>}/>
      <Route path="/product" element={<Product/>}/>
     </Routes>
    </>
  );
}

export default App;
