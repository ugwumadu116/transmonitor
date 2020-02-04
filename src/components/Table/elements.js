import styled from 'styled-components';

export const Container = styled.div`
  .table-container {
    width: 100%;
    max-height: 72.6rem;
    overflow: scroll;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0rem auto;
  }

  tr:nth-of-type(odd) {
    background: #fff;
  }

  tr:nth-of-type(even) {
    background: #fff;
  }

  td {
    height: 72px;
    font-size: 1.4rem;
    color: #414042;
  }

  th {
    background: #eaeef0;
    height: 45px;
    font-size: 14px;
    color: #7f8fa4;

    box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  }

  td,
  th {
    padding: 12px 10px;
    border-bottom: 1px solid #cccfd4;
    text-align: left;
    font-size: 14px;
    color: #7f8fa4;
  }

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    table {
      width: 100%;
    }

    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      border: none;
      border-bottom: 1px solid #fff;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      /* Label the data */
      content: attr(data-column);

      color: #000;
    }
  }

  .status-container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

