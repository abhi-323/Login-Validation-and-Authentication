import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { authTokenAtom, userAtom } from "../recoil/recoil";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [authToken, setAuthToken] = useRecoilState(authTokenAtom);
  const [user, setUser] = useRecoilState(userAtom);

  const navigate = useNavigate();

  console.log(authToken);
  // if (authToken != null) {
  //   setUser(jwtDecode(authToken.access));
  // }
  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     // setAuthToken(JSON.parse(localStorage.getItem(authToken)));
  //     console.log(JSON.parse(localStorage.getItem(authToken)));
  //     // setUser(jwtDecode(authToken.access));
  //   } else setAuthToken(null);
  // }, []);

  // console.log(email);
  // console.log(password);

  const loginUser = async (email, password) => {
    let response = await fetch("http://127.0.0.1:8000/login/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password: password }),
    });

    let data = await response.json();

    if (response.status == 200) {
      setAuthToken(data);
      setUser(jwtDecode(data.access));
      // console.log(jwtDecode(authToken.access).username);
      localStorage.setItem("authToken", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Incorrect email or password");
    }
    // console.log(authToken);
    // console.log(user.username);
  };

  return (
    <div className="flex items-center justify-center m-20">
      <div className="w-1/4 h-96 border-2 border-black bg-[url('https://img.freepik.com/free-photo/white-painted-wall-texture-background_53876-138197.jpg?w=900&t=st=1663217679~exp=1663218279~hmac=52bc59c461c2ec74f08319c92bf3d07f0ee63b26428f078e78c28a82cb145db3')] p-6 rounded-3xl shadow-2xl bg-white ">
        <header className="font-bold m-3 mb-5 font-sans text-center text-3xl pb-2 ">
          Login
        </header>
        <span className="font-semibold ml-2">Username</span>
        <div className="p-0.5 border-2 border-gray-500 hover:border-black rounded-lg m-2 ">
          <input
            type="email"
            placeholder="abc@email.com"
            className="w-full outline-none"
            name="username"
            // value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
          {/* <img
            src="https://png2.cleanpng.com/dy/fb7951441f5002adc0e6d8cb883dcca7/L0KzQYm3VMEzN6V2j5H0aYP2gLBuTflxdZIyfd9qaXywhLbzhgBpd59qRd9uc4Pkd7a0hf1icZ0ygdV4bj24cbTtU8Y1PWlpS6tuNT63Q4G8VsQ5OWI6SqUAMkm1SIa8V8g2NqFzf3==/kisspng-ipma-email-telephone-message-email-icon-5acf36458d39e5.4305648115235292855785.png"
            class="absolute mr-2 w-10"
            alt="Search Icon"
          /> */}
        </div>
        <span className="font-semibold ml-2">Password</span>
        <div className="p-0.5 border-2 border-gray-500 hover:border-black rounded-lg m-2 ">
          <input
            type="password"
            placeholder="**********"
            className="w-full outline-none"
            name="password"
            // value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className=" text-center pt-8 ">
          <input
            type="submit"
            value="Login"
            onClick={(e) => {
              e.preventDefault();
              loginUser(email, password);
            }}
            className="py-1 px-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          />
          {/* login */}
          {/* </input> */}
        </div>
        <footer className="text-center m-4">
          <h2>
            Not a member? &nbsp;
            <a className=" font-bold hover:text-green-500" href="/">
              Sign up
            </a>
          </h2>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;
