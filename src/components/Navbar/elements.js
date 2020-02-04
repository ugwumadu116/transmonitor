import styled from "styled-components";

export const Container = styled.div`
  .navbar-container {
    height: 6rem;
    box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
    background: #ffffff;
    display: flex;
    align-items: center;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 8;
  }

  .navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 28px;
    color: #1875f0;
    font-family: "Roboto", sans-serif;
    cursor: pointer;

    @media (min-width: 1024px) {
      width: 20rem;
      font-size: 24px;
    }
  }

  .column-one {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .searchbar {
    margin-left: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
      margin-left: 4rem;
    }

    .search {
      width: 8rem;
      border: none;
      margin-left: 1.6rem;
      font-size: 1rem;

      &:focus {
        outline: none;
      }

      @media (min-width: 1024px) {
        font-size: 1.2rem;
      }
    }
  }

  .search-icon {
    transform: translateY(2px);
  }

  .column-two {
    .desktop-menu {
      @media (max-width: 1024px) {
        display: none;
      }
    }

    .mobile-menu {
      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  .nav-items {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: 40.7rem;
    padding: none;
    font-size: 1.4rem;
    color: #647787;
    font-family: "Segoe UI", sans-serif;
  }

  .notification {
    position: relative;
  }
  .notification-number {
    border-radius: 90%;
    position: absolute;
    right: -0.3rem;
    top: -0.7rem;
    height: 1.5rem;
    width: 1.5rem;
    background: #1860ec;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #fcfdff;
  }

  .profile {
    display: flex;
    align-items: center;
  }

  .welcome {
    margin-right: 9px;
    & .hello {
      font-size: 1rem;
      text-align: end;
    }

    & .name {
      font-size: 1.4rem;
    }
  }

  .profile-photo {
    border-radius: 90%;
  }

  .burger-menu {
    position: relative;
    z-index: 10;
  }

  .menu-overlay {
    position: absolute;
    background-color: #fff;
    height: 0;
    width: 0;
    top: 0;
    right: 0;
    transition: all 0.2s;
    box-shadow: $box-shadow;
    display: none;
    z-index: 9;
  }

  .toggle {
    display: block;
    height: 90vh;
    width: 68vw;
  }

  .mobile-menu-contents {
    margin-top: 21rem;
    height: 70%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
  }

  .mobile-menu-links {
    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    & .profile-photo {
      position: absolute;
      top: -10rem;
      left: 1rem;
    }
  }
  li {
    cursor: pointer;
  }

  .box {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0%;
    bottom: 0;
    background-color: #0c3f3f;

    opacity: 0.99;
    z-index: 999;
    transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -webkit-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -moz-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -ms-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -o-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
  }

  .box2 {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
    left: -100%;
    z-index: 999;
    background-color: #0c3f3f;
    opacity: 0.99;
    transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -webkit-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -moz-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -ms-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
    -o-transition: left, cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s;
  }

  @media (min-width: 870px) {
    .box {
      display: none;
    }
  }
`;

export const MobileNav = styled.div`
  .m-Logo {
    display: flex;
    .burger-menu {
      margin-left: auto;
    }
  }

  background-color: #0c3f3f;
  height: 100vh;

  & .linkContainer {
    color: #ffffff;
    font-weight: 700;
    display: flex;
    width: 100%;
    height: 100%;

    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    z-index: 9999;
    opacity: 0.99;
    justify-content: space-evenly;
  }
`;
