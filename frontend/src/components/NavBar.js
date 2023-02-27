import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="flex text-center justify-center m-4 text-2xl font-bold">
        <Link to="/">
          <h2 className="px-4 hover:text-green-500">HOME</h2>
        </Link>
        <span> | </span>
        <Link to="/login">
          <h2 className="px-4 hover:text-green-500">LOGIN</h2>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default NavBar;
