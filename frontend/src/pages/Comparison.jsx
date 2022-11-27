import React from "react";
import Card from "../components/card/Card";

const Comparison = ({
  amazonData,
  gpuScore,
  gpuMax = 0,
  maxCPUMark = 0,
  passmark,
}) => {
  amazonData?.map((item) => {
    return (item.score = gpuScore?.find((gpu) => {
      if (gpu.Device === item.GPU_Name) {
        return gpu;
      }
    }));
  });
  amazonData?.map((item) => {
    return (item.cpuScore = passmark?.find((cpu) => {
      if (cpu.cpuName === item.CPU_Name) {
        return cpu;
      }
    }));
  });
  console.log(amazonData);
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
        {amazonData?.map((item) => (
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
