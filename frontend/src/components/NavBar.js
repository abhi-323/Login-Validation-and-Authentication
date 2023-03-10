import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom, authTokenAtom } from "../recoil/recoil";

function NavBar() {
  const [authToken, setAuthToken] = useRecoilState(authTokenAtom);
  const [user, setUser] = useRecoilState(userAtom);

  return (
    <>
      <div className="flex text-center justify-center p-4 text-2xl font-bold">
        <Link to="/">
          <h2 className="px-4 hover:text-green-500">HOME</h2>
        </Link>
        <span> | </span>
        {user ? (
          <h2
            onClick={() => {
              setAuthToken(null);
              setUser(null);
              localStorage.removeItem("authToken");
            }}
            className="px-4 hover:text-green-500 cursor-pointer"
          >
            LOGOUT
          </h2>
        ) : (
          <Link to="/login">
            <h2 className="px-4 hover:text-green-500">LOGIN</h2>
          </Link>
        )}
        {!user && <span> | </span>}
        {!user && (
          <Link to="/signup">
            <h2 className="px-4 hover:text-green-500">SIGN UP</h2>
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
