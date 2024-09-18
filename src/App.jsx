import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Navbar from "./Navbar";
import Products from "./routes/Products";
import UpdateProduct from "./routes/UpdateProduct";
import ProductDetails from "./routes/ProductDetails";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path='/products/update/:id' element={<UpdateProduct />} />
      <Route path='/products/:id' element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App