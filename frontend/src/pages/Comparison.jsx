import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = ({ gpuMax = 0, maxCPUMark = 0, amazon_data }) => {
  const MAX_GPU = gpuMax.OpenCL;
  const MAX_CPU = maxCPUMark.cpuMark;
  let query = window.location.href.slice(40); // get url params at the end of search
  const [products, setProducts] = useState([]);
  async function fetchQuery() {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/mongo/amazon_data/q=${query}`
      );
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log(query);
  }, []);
  return (
    <div>
      <h1>ProductPage</h1>
      <div class="topnav">
        <div class="search-container">
          <form action="">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {amazon_data?.map((item) => (
          <Card
            key={item.item_ID}
            item={item}
            MAX_GPU={MAX_GPU}
            MAX_CPU={MAX_CPU}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
