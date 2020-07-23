import React from "react";
import { Route } from "react-router-dom";
import AdminTemplate from "../AdminTemplate";

const AdminRoute = ({ component: Component, ...rest }) => {
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
