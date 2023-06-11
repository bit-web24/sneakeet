import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Products/Product";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import Account from "./components/Account";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/account" element={<Account/>} />
            <Route component={<NotFound/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
