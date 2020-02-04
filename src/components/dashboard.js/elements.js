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
    padding: 0 0;
  }
  .col-lg-2,
  .col-lg-10 {
    @media (min-width: 1024px) {
      padding: 0 !important;
    }
  }
`;
