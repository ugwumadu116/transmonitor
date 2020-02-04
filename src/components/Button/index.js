import React from "react";
import { Container } from "./elements";

const Button = ({ fill, color, children, transform }) => {
  return (
    <Container>
      <button
        className="button-container"
        style={{
          color: `${color}`,
          backgroundColor: `${fill}`,
          textTransform: `${transform}`
        }}
      >
        {children}
      </button>
    </Container>
  );
};

export default Button;
