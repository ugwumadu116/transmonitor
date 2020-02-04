import styled from "styled-components";

export const Container = styled.div`
  .chart-top {
    display: flex;
    justify-content: space-between;
    margin: 1rem 1.2rem;
    font-size: 1.4rem;
    align-items: center;
    font-weight: bold;
    color: #4f4f4f;
  }

  .chart-utils {
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-between;

    @media (max-width: 1024px) {
      width: unset;
    }
  }

  .chart-container-holder {
    position: relative;
  }

  .img-chart {
    display: flex;
    align-items: center;
    position: absolute;
    top: 133px;
    left: -90px;
  }

  .chartt {
    width: 1069px;
    height: 186px;

    @media (max-width: 1024px) {
      width: 100%;
      height: 119px;
      overflow: hidden;
    }
  }

  .months-holder {
    display: flex;
    justify-content: space-evenly;
    margin-top: 4rem;
    align-items: center;
    padding: 0 auto;

    .months {
      &:not(:last-child) {
        border-right: 1px solid #cfe8fb;
      }
      width: 100%;
      font-size: 14px;
      color: #000000;
      font-weight: bold;
      text-align: center;
      height: 20rem;
    }
  }
`;
