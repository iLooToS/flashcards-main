import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
function Layout({ user, handleLogout }) {
  return (
    <div>
      <div>
        <Navbar user={user} handleLogout={handleLogout} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
