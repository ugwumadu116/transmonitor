import React from "react";
import { Container } from "./elements";
import Chart from "../Chart";

import Box from "../Box";

const Main = () => {
  return (
    <Container>
      <div className="main-container">
        <div className="main-top-section">
          <div className="side">
            <Box title="Daily Transaction" numbers="2,434" />
            <Box title="Daily Transaction Value" numbers="₦4,000,000" />
          </div>
          <div className="side">
            <Box title="Total Transaction Volume" numbers="452,000" />
            <Box title="Total Transaction Value " numbers="₦4,000,000" />
          </div>
        </div>

        <div className="main-chart-section">
          <div className="chart-box">
            <Chart />
          </div>
          <div className="order-payment-box">
            <div className="order-box">
              <div className="title">Orders</div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `80%` }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="pending">
                pending: <span>20</span>
              </div>
              <div className="reconciled">
                Reconciled Order: <span>80</span>
              </div>
              <div className="total">
                Total Orders: <span>100</span>
              </div>
            </div>
            <div className="order-box">
              <div className="title">Payments</div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `80%` }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="pending">
                Un-Reconciled Payments: <span>20</span>
              </div>
              <div className="reconciled">
                Reconciled Payements: <span>80</span>
              </div>
              <div className="total">
                Total Payments: <span>100</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default Main;
