import React from "react";
import { Container } from "./elements";
import Box from "../Box";

const Main = () => {
  return (
    <Container>
      <div className="main-container">
        <div className="main-top-section">
          <div className="side">
            <Box title="Daily Transaction" numbers="2,434" />
            <Box title="Daily Transaction Value" numbers="₦4,000,000" />
          </div>
          <div className="side">
            <Box title="Total Transaction Volume" numbers="452,000" />
            <Box title="Total Transaction Value " numbers="₦4,000,000" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
