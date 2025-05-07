import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Shop from './Component/Shop';
import Detail from './Component/Detail';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Search_product_by_category from './Component/Search_product_by_category';
import ProductSorting from './Component/ProductSorting';
import SearchProduct from './Component/SearchProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  {/* <React.StrictMode> */}
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={< Home/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="searchProductByCategory/:cname" element={<Search_product_by_category />} />
          <Route path="searchProduct/:id" element={<SearchProduct/>} />
          <Route path="sorting/:price" element={<ProductSorting />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
