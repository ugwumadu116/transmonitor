import styled from "styled-components";

export const Container = styled.div`
  .button-container {
    width: 16.3rem;
    height: 3.3rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    border: 1px solid #cccfd4;
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.2px;
    font-family: "Roboto";

    @media (max-width: 1024px) {
      width: 14rem;
      height: 3rem;
      font-size: 1rem;
    }
  }
`;
