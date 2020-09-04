import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import UserDashboard from "./pages/user/UserDashboard";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/category/CreateCategory";
import CreateProduct from "./pages/admin/product/CreateProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/user/dashboard"
            component={UserDashboard}
          />
          {/* Admin routes */}
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <AdminRoute
            exact
            path="/category/create"
            component={CreateCategory}
          />
          <AdminRoute exact path="/product/create" component={CreateProduct} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
