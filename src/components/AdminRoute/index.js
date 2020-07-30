import React from "react";
import { Route, Redirect } from "react-router-dom";
import AdminTemplate from "../AdminTemplate";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { userInfo } = useSelector((state) => state.authReducer);

  if (!Object.keys(userInfo).length) {
    return <Redirect to="/Signin" />;
  }

  return (
    <Route
      {...rest}
      render={(routerProps) => {
        return (
          <AdminTemplate>
            <Component />
          </AdminTemplate>
        );
      }}
    />
  );
};

export default AdminRoute;
