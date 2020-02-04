import styled from "styled-components";

export const Container = styled.div`
  .selection {
    background-color: transparent;
  }

  .css-1okebmr-indicatorSeparator {
    display: none !important;
  }

  .big {
    width: 15rem;
  }

  .big .css-yk16xz-control {
    background-color: #e5e5e5 !important;
  }

  .small .css-yk16xz-control {
    background-color: transparent !important;
  }
  .small .css-1wa3eu0-placeholder {
    color: #1875f0 !important;
    font-size: 1.2rem !important;
  }
  .small {
    width: 6rem;
    height: 4rem;
    display: flex;
    font-size: 1.1rem;
    border: none !important;
  }

  .small .css-yk16xz-control {
    border: none !important;

    &:focus {
      border: none !important;
    }
  }

  .css-6q0nyr-Svg {
    fill: #1875f0 !important;
    height: 1.5rem;
    width: 2rem;
  }
  .css-tlfecz-indicatorContainer {
    color: hsl(0, 0%, 80%);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    padding: 0px !important;
    -webkit-transition: color 150ms;
    transition: color 150ms;
    box-sizing: border-box;
  }
`;
