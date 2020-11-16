import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../page/home';
import Carrier from '../page/carrier';
import Order from '../page/searchOrder';
function RouterComponent() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/carrier' component={Carrier} />
          <Route exact path='/search-order' component={Order} />
          {/* <Route component={NotFound} />  */}
        </Switch>
    </div>
  );
}

export default RouterComponent;