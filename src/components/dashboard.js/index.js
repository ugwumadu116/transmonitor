import React, { lazy } from "react";
const NavBar = lazy(() => import("../Navbar"));
const SideBar = lazy(() => import("../Sidebar"));

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;
