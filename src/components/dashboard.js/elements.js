import styled from "styled-components";

export const Container = styled.div`
  .row {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0;
  }

  .col-lg-10 {
    padding: 55px 0 0 50px;
  }
  .col-lg-2 {
    padding: 55px 0 0 50px;
  }
  @media (max-width: 1024px) {
    .col-lg-10 {
      padding: 0 !important;
    }
  }

`;
