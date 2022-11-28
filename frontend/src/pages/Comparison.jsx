import React, { useState, useEffect, useRef } from "react";
import Card from "../components/card/Card";
import axios from "axios";

const ProductPage = ({ gpuMax = 0, maxCPUMark = 0, query, setQuery }) => {
  const MAX_GPU = gpuMax.OpenCL;
  const MAX_CPU = maxCPUMark.cpuMark;

  const textRef = useRef();
  const [products, setProducts] = useState([]);
  console.log(query);
  async function fetchQuery() {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/mongo/amazon_data/q=${window.location.href.slice(
          31
        )}`
      );
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchQuery();
    console.log(products);
    console.log(window.location.href.slice(31));
  }, [products.length]);
  return (
    <div>
      <h1>ProductPage</h1>
      <div class="topnav">
        <div class="search-container">
          <form action="">
            <input
              type="text"
              placeholder="Search.."
              name="q"
              ref={textRef}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button href={`/search/${query}`} type="submit">
              Submit
            </button>
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
        {products?.map((item) => (
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
