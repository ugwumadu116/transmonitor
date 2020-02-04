import React from "react";
import { Container } from "./elements";

const List = ({ img, text }) => {
  return (
    <Container>
      <div className="list-container">
        <img src={img} alt="" />
        <div className="text">{text}</div>
        <div className="overlay"></div>
      </div>
    </Container>
  );
};

export default List;
