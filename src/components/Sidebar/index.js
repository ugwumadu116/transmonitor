import React, { useState } from "react";
import Button from "../Button";
import List from "../List";
import { Container } from "./elements";
import Burger from "../BurgerMenu";

let overview = "assets/overview.svg";
let wallet = "assets/wallet.svg";
let wallet_complete = "assets/wallet-complete.svg";
let wallet_failed = "assets/wallet_failed.svg";
let manual = "assets/manual.svg";
let all_orders = "assets/all_orders.svg";
let orders_pending = "assets/orders-pending.svg",
  reconciled_orders = "assets/reconciled_orders.svg";
let person = "assets/person.svg";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Container toggle={toggle}>
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="containerr">
            <div className="desktop-sidebar-contents">
              <Button fill="green" color="white" transform="uppercase">
                Generate invoice
              </Button>
            </div>
            <p className="main">Main</p>
            <div className="overview">
              <List img={overview} text="Overview" />
            </div>
            <p className="main payments">Payments</p>
            <div className="payment-menu">
              <List img={wallet} text="All Payments" />
              <List img={wallet_complete} text="Reconciled Payments" />
              <List img={wallet_failed} text="Un-Reconciled Payments" />
              <List img={manual} text="Manual Settlement" />
            </div>

            <p className="main">Orders</p>
            <div className="order-menu payment-menu">
              <List img={all_orders} text="All Orders" />
              <List img={orders_pending} text="Pending Orders" />
              <List img={reconciled_orders} text="Reconciled Orders" />
            </div>

            <div className="main marchant-profile">
              <List img={person} text="Merchant Profile" />
            </div>
          </div>
        </div>

        <div className="mobile-sidebar">
          <div onClick={toggleMenu} className="burger">
            <Burger clicked={toggle} />
          </div>
         
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
