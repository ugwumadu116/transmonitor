import React, { lazy } from "react";
import { Container } from "./elements";

const NavBar = lazy(() => import("../Navbar"));
const SideBar = lazy(() => import("../Sidebar"));
const Main = lazy(() => import("../Main"));

function App() {
  return (
    <Container>
      <div className="App">
        <NavBar />
        <div className="row">
          <div className="col-lg-2">
            <SideBar />
          </div>
          <div className="col-lg-10">
            <Main />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
