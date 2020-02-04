import React, { Suspense, lazy } from "react";
import Loading from "../../views/Loading";
import { Route, Switch } from "react-router-dom";

const Dashboard = lazy(() => import("../../views/Dashboard"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  </Suspense>
);

export default App;
