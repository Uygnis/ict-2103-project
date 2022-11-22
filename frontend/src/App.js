import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';


function App() {
  const [db, setDb] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/mysql/amazon_data/get`
      );
      setDb(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    console.log(db);
  }, [db.length]);
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
