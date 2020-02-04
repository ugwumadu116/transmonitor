import styled from "styled-components";

export const Container = styled.div`
  .box-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.8rem 2.1rem 1.8rem 1.8rem;
    background-color: #fff;
    width: 28rem;
    background: #ffffff;
    border: 1px solid #eef8fd;
    box-sizing: border-box;
    border-radius: 2px;

    @media (max-width: 1024px) {
      width: 96%;
      margin: 0.7rem 1rem;
    }
  }

  .contents {
    & .title {
      font-size: 12px;
      line-height: 16px;
      color: #787c90;
    }

    & .numbers {
      font-size: 18px;
      line-height: 24px;
      color: #262626;
    }
  }

  .chart {
    height: 10rem;
    width: 8rem;
  }
`;
