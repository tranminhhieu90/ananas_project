import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
function ProtectedRoute({ component: Component, ...rest }) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Route
      {...rest}
      render={(props) => (
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      )}
    />
  );
}
export default ProtectedRoute;
