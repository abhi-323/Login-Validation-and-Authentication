import React from "react";

function LoginPage() {
  return (
    <div className="flex items-center justify-center m-20">
      <div className="w-1/4 h-96  border p-6 rounded-lg shadow-2xl  border-gray-200 bg-white ">
        <header className="font-bold m-3 mb-5 font-sans text-center">
          Login
        </header>
        <span className="font-semibold ml-2">Username</span>
        <div className="p-1 border hover:border-2 border-black rounded-md m-2 ">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full outline-none"
            name="username"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <span className="font-semibold ml-2">Password</span>
        <div className="p-1 border hover:border-2 border-black rounded-md m-2 ">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full outline-none"
            name="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" text-center mt-16">
          <button
            // onClick={(e) => {
            //   e.preventDefault();
            //   context.login(email, password);
            // }}
            className="py-1 px-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          >
            login
          </button>
        </div>
        <footer className="text-center m-4">
          <a href="/">sign up</a>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;
