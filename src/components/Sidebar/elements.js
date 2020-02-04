import styled from "styled-components";

export const Container = styled.div`
  .sidebar-container {
    width: 30rem;
    padding: 0 4rem;
    height: 100vh;
    position: fixed;
    padding-top: 2.8rem;
    left: 0px;
    box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
    transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -webkit-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -moz-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -ms-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -o-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
  }

  .sidebar-container {
    @media (max-width: 1024px) {
      left: ${({ toggle }) => (toggle ? "0px " : "-100%")};
      transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
      -webkit-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
      -moz-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
      -ms-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
      -o-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    }
  }

  .mobile-sidebar {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .mobile-sidebar-contents {
    box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
    height: 34vh;
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;
    flex-wrap: wrap;

    & .button-mobile {
      display: inline-block;
      width: 100%;
      display: flex;
      justify-content: center;
      top: 6rem;
    }
  }

  .main {
    margin-top: 3.2rem;
    font-size: 11px;
    line-height: 15px;
    color: #647787;
  }

  .overview {
    margin-top: 2.4rem;
  }

  .payments {
    margin-top: 3.5rem;
  }

  .payment-menu {
    margin-top: 1.5rem;
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .order-menu {
    margin-top: 1.4rem;
    height: 8rem;
  }

  .payment-column {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 4rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .payment-menu-mobi {
    display: flex;
    justify-content: space-between;
  }

  .mobile-payments {
    margin-bottom: 1rem;
  }

  .marchant-profile {
    margin-top: 3rem;
  }

  .merchant-column {
    width: 100%;
  }
`;
