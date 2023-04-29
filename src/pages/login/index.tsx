import React from "react";
import "./login.scss";
import { Outlet } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <Outlet />
    </div>
  );
}
