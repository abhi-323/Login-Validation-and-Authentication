import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/recoil";

function SignupPage() {
  let [username, setUsername] = useState(null);
  let [firstname, setFirstname] = useState(null);
  let [lastname, setLastname] = useState(null);
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);
  let [confirmPassword, setConfirmPassword] = useState(null);
  let [userData, setUserData] = useState(null);
  //   let [authToken, setAuthToken] = useRecoilState(authTokenAtom);
  let [user, setUser] = useRecoilState(userAtom);

  const navigate = useNavigate();

  const registerUser = async () => {
    let response = await fetch("http://127.0.0.1:8000/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        username: username,
        email: email,
        password: password,
        password2: confirmPassword,
      }),
    });

    let data = await response.json();
    setUserData(data);

    console.log(data);

    if (response.status === 201) {
      alert("User Registration Successful");
      navigate("/");
    } else {
      {
        data.email && alert(data.email);
      }
      {
        data.username && alert(data.username);
      }
    }
  };

  return (
    <div className="flex items-center justify-center m-10">
      {user && navigate("/")}
      <div className=" w-25% h-auto border-2 border-black bg-[url('https://img.freepik.com/free-photo/white-painted-wall-texture-background_53876-138197.jpg?w=900&t=st=1663217679~exp=1663218279~hmac=52bc59c461c2ec74f08319c92bf3d07f0ee63b26428f078e78c28a82cb145db3')] p-6 rounded-3xl shadow-2xl bg-white ">
        <header className="font-bold m-3 mb-5 font-sans text-center text-3xl pb-2 ">
          Sign Up
        </header>
        <div className="flex">
          <div>
            <span className="font-semibold ml-2">First Name</span>
            <div className="p-0.5 border-2 border-gray-500 hover:border-black rounded-lg m-2 ">
              <input
                type="firstname"
                placeholder="First Name"
                className="w-full outline-none"
                name="firstname"
                onChange={(e) => {
                  e.preventDefault();
                  setFirstname(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <span className="font-semibold ml-2">Last Name</span>
            <div className="p-0.5 border-2 border-gray-500 hover:border-black rounded-lg m-2 ">
              <input
                type="lastname"
                placeholder="Last Name"
                className="w-full outline-none"
                name="lastname"
                onChange={(e) => {
                  e.preventDefault();
                  setLastname(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <span className="font-semibold ml-2">Username</span>
        <div className="p-0.5 border-2 border-gray-500 hover:border-black rounded-lg m-2 ">
          <input
            type="email"
            placeholder="abc001"
            className="w-full outline-none"
            name="username"
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
          />
          {/* <img
          src="https://png2.cleanpng.com/dy/fb7951441f5002adc0e6d8cb883dcca7/L0KzQYm3VMEzN6V2j5H0aYP2gLBuTflxdZIyfd9qaXywhLbzhgBpd59qRd9uc4Pkd7a0hf1icZ0ygdV4bj24cbTtU8Y1PWlpS6tuNT63Q4G8VsQ5OWI6SqUAMkm1SIa8V8g2NqFzf3==/kisspng-ipma-email-telephone-message-email-icon-5acf36458d39e5.4305648115235292855785.png"
          class="absolute mr-2 w-10"
          alt="Search Icon"
        /> */}
        </div>
        <span className="font-semibold ml-2">Email</span>
        <div className="p-0.5 border-2 border-gray-500 hover:border-black rounded-lg m-2 ">
          <input
            type="email"
            placeholder="abhi@email.com"
            className="w-full outline-none"
            name="email"
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
        </div>
        <span className="font-semibold ml-2">Password</span>
        <div className="p-0.5 border-2 border-gray-500 hover:border-black rounded-lg m-2 ">
          <input
            type="password"
            placeholder="**********"
            className="w-full outline-none"
            name="password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </div>
        <span className="font-semibold ml-2">Confirm Password</span>
        <div className="p-0.5 border-2 border-gray-500 hover:border-black rounded-lg m-2 ">
          <input
            type="password"
            placeholder="**********"
            className="w-full outline-none"
            name="confirm_password"
            onChange={(e) => {
              e.preventDefault();
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className=" text-center pt-8 ">
          <input
            type="submit"
            value="Sign Up"
            onClick={(e) => {
              e.preventDefault();
              if (password !== confirmPassword)
                alert("Password and Confirm Password did not match");
              else registerUser();
            }}
            className="py-1 px-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          />
        </div>
        <footer className="text-center m-4">
          <h2>
            Already a member? &nbsp;
            <a className=" font-bold hover:text-green-500" href="/login">
              Login
            </a>
          </h2>
        </footer>
      </div>
    </div>
  );
}

export default SignupPage;
