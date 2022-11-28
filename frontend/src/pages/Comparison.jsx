import React from "react";
import Card from "../components/card/Card";

const Comparison = ({ gpuMax = 0, maxCPUMark = 0, amazon_data }) => {
  const MAX_GPU = gpuMax.OpenCL;
  const MAX_CPU = maxCPUMark.cpuMark;
  return (
    <div>
      <h1>Comparison</h1>
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

export default Comparison;
