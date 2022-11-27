import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Analytics from "./pages/Analytics.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import Comparison from "./pages/Comparison";

function App() {
  const baseURL = "http://localhost:5001/api/mongo";
  const [db, setDb] = useState({});
  const [maxOpenCL, setMaxOpenCL] = useState();
  const [maxCPUMark, setMaxCPUMark] = useState();
  const fetchData = async () => {
    try {
      let maxCL = axios.get(`${baseURL}/gpu_score/getMaxOpenCL`);
      let maxCpuMark = axios.get(
        `${baseURL}/cpu_benchmark_passmark/getMaxCpuMark`
      );
      let amazon_data = axios.get(`${baseURL}/amazon_data/get`);
      let cpu_specs = axios.get(`${baseURL}/cpu_specs/get`);
      let cpu_benchmark_cinebench = axios.get(
        `${baseURL}/cpu_benchmark_cinebench/get`
      );
      let cpu_benchmark_passmark = axios.get(
        `${baseURL}/cpu_benchmark_passmark/get`
      );
      let gpu_specs = axios.get(`${baseURL}/gpu_specs/get`);
      let gpu_benchmark = axios.get(`${baseURL}/gpu_benchmarks/get`);
      let gpu_score = axios.get(`${baseURL}/gpu_score/get`);
      let amazon_gpu_cpu = axios.get(`${baseURL}/amazon_data/join`);
      await axios
        .all([
          amazon_data,
          cpu_specs,
          cpu_benchmark_cinebench,
          cpu_benchmark_passmark,
          gpu_specs,
          gpu_benchmark,
          gpu_score,
          amazon_gpu_cpu,
          maxCL,
          maxCpuMark,
        ])
        .then(
          axios.spread((...responses) => {
            setDb({
              amazon_data: responses[0].data,
              cpu_specs: responses[1].data,
              cpu_benchmark_cinebench: responses[2].data,
              cpu_benchmark_passmark: responses[3].data,
              gpu_specs: responses[4].data,
              gpu_benchmark: responses[5].data,
              gpu_score: responses[6].data,
              amazon_gpu_cpu: responses[7].data,
            });
            setMaxOpenCL(responses[8].data[0]);
            setMaxCPUMark(responses[9].data[0]);
          })
        );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(db);
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
          <Route
            path="/comparison"
            element={
              <Comparison
                amazon_gpu_cpu={db.amazon_gpu_cpu}
                gpuMax={maxOpenCL}
                maxCPUMark={maxCPUMark}
              />
            }
          />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
