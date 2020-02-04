import styled from "styled-components";

export const Container = styled.div`
  .list-container {
    font-size: 1.1rem;
    line-height: 1.5rem;
    color: #647787;
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;

    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }

    & .overlay {
      background: rgba(24, 117, 240, 0.1);
      position: absolute;
      height: 3rem;
      width: 136%;
      top: -0.6rem;
      left: -4rem;
      display: none;

      &:before {
        content: "";
        position: absolute;
        height: inherit;
        width: 5px;
        font-size: 3rem;
        top: 0;
        left: 0rem;
        background: rgba(24, 117, 240, 1);
        z-index: 1;
      }
    }

    &:hover .overlay {
      display: block;

      @media (max-width: 1024px) {
        display: none;
      }
    }

    & .text {
      margin-left: 1.452rem;

      @media (max-width: 1024px) {
        margin-left: 1rem;
      }
    }
  }
`;


