import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import CoursesList from "./pages/CoursesList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdminRoute from "./components/AdminRoute";
import UserRoute from "./components/UserRoute";
import DefaultTemplate from "./components/DefaultTemplate";
import UserManagement from "./pages/UserManagement";
import AdminTemplate from "./components/AdminTemplate";
import CoursesManagement from "./pages/CoursesManagement";
import { ComponentAWithForm, ComponentBWithForm } from "./pages/HOC/withForm";
import Counter from "./pages/Hooks/Counter";
import Form from "./pages/Hooks/Form";
import CourseDetail from "./pages/CourseDetail";
import { setToken } from "./utils/axiosClient";

function App() {
  const { userInfo } = useSelector((state) => state.authReducer);
  useEffect (() => {
    if (Object.keys(userInfo).length) {
      setToken(userInfo.accessToken);
    }
  }, []);

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/courses-list">CoursesList</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/signup">Signup</Link>
      <Switch>
        <UserRoute exact path="/" component={Home} />
        <UserRoute path="/courses-list" component={CoursesList} />
        <UserRoute path="/signin" component={SignIn} />
        <UserRoute path="/course/:id" component={CourseDetail} />
        <Route
          path="/signup"
          render={(routerProps) => {
            return (
              <DefaultTemplate>
                {/* SignUp tương đương this.props.children trong component DefaultTemplate */}
                <SignUp {...routerProps} />
              </DefaultTemplate>
            );
          }}
        />
        <AdminRoute path="/courses-management" component={CoursesManagement} />
        <AdminRoute path="/user-management" component={UserManagement} />
        <Route path="/hoc-1" component={ComponentAWithForm} />
        <Route path="/hoc-2" component={ComponentBWithForm} />
        <Route path="/hooks" component={Counter} />
        <Route path="/form-hook" component={Form} />
        {/* <Route
          path="/courses-management"
          render={(routerProps) => {
            return (
              <AdminTemplate>
                <CoursesManagement {...routerProps}/>
              </AdminTemplate>
            );
          }}
        />
        <Route
          path="/user-management"
          render={(routerProps) => {
            return (
              <AdminTemplate>
                <UserManagement {...routerProps}/>
              </AdminTemplate>
            );
          }}
        /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
