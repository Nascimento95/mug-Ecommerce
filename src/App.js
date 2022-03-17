import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import FloatingCart from './Components/FloatingCart/FloatingCart';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart';
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase';

const App = () => {
  return (
    <>
    
      <Navbar />
      <FloatingCart />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/produits" element={<Products/>} />
        <Route exact path="/produits/:id" element={<ProductShowcase/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/shoppingcart" element={<ShoppingCart/>} />
      </Routes>
    </>
  );
};

export default App;