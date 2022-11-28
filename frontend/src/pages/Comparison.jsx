import React from "react";
import Card from "../components/card/Card";
import "./Comparison.css"
const ProductPage = ({ gpuMax = 0, maxCPUMark = 0, amazon_gpu_cpu }) => {
  const MAX_GPU = gpuMax.OpenCL;
  const MAX_CPU = maxCPUMark.cpuMark;
  return (
    <div>
      <h1>ProductPage</h1>
      <div class="topnav">
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
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
        {amazon_gpu_cpu?.map((item) => (
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
