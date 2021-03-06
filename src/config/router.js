import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../page/Home";
import Career from "../page/Career";
import OrderForm from "../page/OrderForm";
import LoginForm from "../page/LoginForm";
import Products from "../page/Products";
import ProtectedRoute from "../authen/ProtectedRoute";
function RouterComponent() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/product-list" component={Products} />
        {/* <Route component={NotFound} />  */}
        <ProtectedRoute
          exact
          path={"/search-order"}
          component={OrderForm}
        />
      </Switch>
    </div>
  );
}

export default RouterComponent;
