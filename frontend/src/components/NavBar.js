import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/recoil";

function NavBar() {
  const [user] = useRecoilState(userAtom);

  return (
    <>
      <div className="flex text-center justify-center p-4 text-2xl font-bold">
        <Link to="/">
          <h2 className="px-4 hover:text-green-500">HOME</h2>
        </Link>
        <span> | </span>
        {user ? (
          <h2 className="px-4 hover:text-green-500">LOGOUT</h2>
        ) : (
          <Link to="/login">
            <h2 className="px-4 hover:text-green-500">LOGIN</h2>
          </Link>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default NavBar;
