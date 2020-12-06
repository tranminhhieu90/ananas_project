import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../page/Home';
import Career from '../page/Career';
import OrderForm from '../page/OrderForm';
import Products from '../page/Products';
function RouterComponent() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/career' component={Career} />
          <Route exact path='/search-order' component={OrderForm} />
          <Route exact path='/product-list' component={Products} />
          {/* <Route component={NotFound} />  */}
        </Switch>
    </div>
  );
}

export default RouterComponent;