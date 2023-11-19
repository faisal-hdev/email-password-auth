import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav className="d-flex justify-content-center mt-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
