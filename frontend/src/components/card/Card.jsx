import React from "react";
import "./card.css";
const Card = ({ item, MAX_GPU, MAX_CPU }) => {
  return (
    <div className="Card" style={{ width: "100%" }}>
      <div className="card-container">
        <h4>
          <b>{item.Listing}</b>
        </h4>
        <p>CPU</p>
        <div
          className="progress-container"
          style={{
            width: "100%",
            backgroundColor: "#ddd",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <div
            className="progress-bar"
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              width: `${(item.cpu_score[0].cpuMark / MAX_CPU) * 100}%`,
              backgroundColor: "orange",
            }}
          ></div>
        </div>

        <p>GPU</p>
        <div
          className="progress-container"
          style={{
            width: "100%",
            backgroundColor: "#ddd",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <div
            className="progress-bar"
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              width: `${(item.gpu_score[0].OpenCL / MAX_GPU) * 100}%`,
              backgroundColor: "green",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
