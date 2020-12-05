import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../page/Home';
import Carrier from '../page/carrier';
import OrderForm from '../page/OrderForm';
function RouterComponent() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/carrier' component={Carrier} />
          <Route exact path='/search-order' component={OrderForm} />
          {/* <Route component={NotFound} />  */}
        </Switch>
    </div>
  );
}

export default RouterComponent;