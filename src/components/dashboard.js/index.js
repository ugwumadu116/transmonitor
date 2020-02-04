import React, { lazy } from "react";
const NavBar = lazy(() => import("../Navbar"));

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
