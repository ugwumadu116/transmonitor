import React from "react";

import App from "./main";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "../views/ErrorBoundary";

const Root = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </ErrorBoundary>
);

export default Root;
