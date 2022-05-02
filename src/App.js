import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./pages/ProductList/ProductList";
import Home from "./pages/Home";
import Product from './pages/Product/Product'
function App() {
  return (
    <Routes>

    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="products" element={<ProductList/>} />
      
      <Route path="products/:productId" element={<Product />} />
    </Route>
    </Routes>
  );
}

export default App;
