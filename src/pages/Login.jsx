import React, { useState } from "react";

const Login = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="h-screen flex-center page-frame">
      <div className="w-96 border rounded-md shadow-md page-frame sm:px-[4%]">
        <h2 className="text-2xl font-sans font-bold mb-4">Login</h2>
        <form action="">
          <div className="w-full">
            <p className="py-2">Email</p>
            {/* <label htmlFor="">Email</label> */}
            <input
              value={""}
              type="email"
              placeholder="Enter your Email"
              className="w-full border-b py-2 outline-none"
            />
          </div>
          <div className="w-full">
            <p className="py-2">Password</p>
            {/* <label htmlFor="">Email</label> */}
            <div className="flex">
              <input
                value={""}
                type={isShown ? "text" : "password"}
                placeholder="Enter your Password"
                className="w-full border-b py-2 outline-none"
              />
              <button
                onClick={() => setIsShown(true)}
                className="bg-gray-50 px-3 py-1"
              >
                S
              </button>
            </div>
          </div>
          <div className="w-full flex-between py-3">
            <input
              type="checkbox"
              placeholder="Enter your Email"
              className=" border-b py-2"
            />
            <span>|</span>
            <span className="text-[#696969]">
              Read Carefully{" "}
              <a href="#" className="border-b">
                Term
              </a>{" "}
              &{" "}
              <a href="#" className="border-b">
                Condition
              </a>
            </span>
          </div>
          <button
            className="w-full py-2 border rounded-lg my-4 text-xl shadow-sm"
            type="submit"
          >
            Login
          </button>

          <span className="text-[#696969]">
            Create a new Account |{" "}
            <a href="/sign-up" className="border-b-2">
              Sign Up
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
