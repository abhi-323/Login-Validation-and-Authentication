import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/recoil";

function HomePage() {
  const [user] = useRecoilState(userAtom);
  return (
    <div className="  text-center justify-center p-16 font-bold text-5xl">
      HomePage <br />
      <br />
      {user && <h2 className=" text-cyan-400">Welcome {user.username}</h2>}
    </div>
  );
}

export default HomePage;
