import React from "react";
import { Container } from "./elements";

let small_chart = "assets/small_chart.svg";

const Box = ({ title, numbers }) => {
  return (
    <Container>
      <div className="box-container">
        <div className="contents">
          <div className="title">{title}</div>
          <div className="numbers">{numbers}</div>
        </div>
        <div className="chart">
          <img src={small_chart} alt="" className="chart" />
        </div>
      </div>
    </Container>
  );
};

export default Box;
