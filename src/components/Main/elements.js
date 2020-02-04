import styled from "styled-components";

export const Container = styled.div`
  .main-container {
    background-color: #e5e5e5;
    width: 100%;

    @media (min-width: 1024px) {
      max-height: calc(1450px - 0rem);
    }

    @media (min-width: 1024px) {
      padding: 4.3rem 3rem;
    }
  }

  .main-top-section {
    height: 8rem;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: space-evenly;
      height: 63rem;
      width: 100%;
    }

    & .side {
      display: flex;
      justify-content: space-between;
      width: calc(253px + 253px + 75px);

      @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
      }
    }
  }

  .main-chart-section {
    margin-top: 100px;;
    height: 32.9rem;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 0 1rem;
    }

    & .chart-box {
      width: 70.7%;
      background-color: #fff;

      @media (max-width: 1024px) {
        width: 100%;
      }
    }

    & .order-payment-box {
      width: 29%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (max-width: 1024px) {
        width: 100%;
        margin-top: 2rem;
      }
    }
  }

  .order-box {
    height: calc(329px / 2 - 2px);
    padding: 21px 25px;
    background-color: #ffffff;
    border-radius: 2px;

    @media (max-width: 1024px) {
      width: 100%;
      margin-bottom: 3rem;
    }
  }

  .progress {
    display: flex;
    height: 0.4rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #fdc203;
    border-radius: 0.25rem;
  }
  .order-box {
    font-size: 14px;
    line-height: 16px;
    color: #262626;

    & .title {
      font-size: 14px;
      line-height: 16px;
      color: #262626;
      font-weight: bold;
    }
    & .progress {
      margin-top: 1.1rem;
      margin-bottom: 1.1rem;
    }

    & .pending {
      margin-bottom: 1rem;
      & span {
        color: #fdc203;
      }
    }

    & .reconciled {
      margin-bottom: 1.1rem;

      & span {
        color: #27ae60;
      }
    }

    & .total {
      & span {
        color: #1860ec;
      }
    }
  }

  .main-graph-section {
    margin-top: 2.304rem;

    @media (max-width: 1024px) {
      margin-top: 33.304rem;
    }

    & .heading {
      font-size: 36px;
      line-height: 48px;
      display: flex;
      color: #262626;
    }
  }

  .payment-table-options {
    margin-top: 2.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    line-height: 17px;

    @media (max-width: 1024px) {
      flex-wrap: wrap-reverse;
      justify-content: space-evenly;
      height: 20rem;
    }

    @media (min-width: 1024px) {
      transform: translateX(-30px);
    }

    & .show-data-type {
      display: flex;
      justify-content: space-between;

      width: 50%;
      @media (min-width: 1024px) {
        width: 20%;
      }

      span {
        font-weight: bold;
        font-size: 1.3rem;
      }
    }
  }

  .payment-display-number {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .show-data-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .searchbar-table {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: #787878;
  }
  .search {
    margin: -7px;
    background-color: transparent;
    border: none;
    border-bottom: 0.5px solid #787878;
    padding: 0.6rem 1.5rem;
    width: 36.5rem;

    &:focus {
      outline: none;
    }
  }

  .table-main-content {
    height: auto;
    margin-top: 3rem;
  }

  .table-footer-section {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
      margin: 2rem 2rem 0 2rem;
    }
  }

  .showing {
    font-size: 13px;
  }
  .pagination {
    & .page-link {
      color: #000000 !important;
    }
  }
`;
