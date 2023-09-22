import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let email = emailRef.current.value;
      let password = passwordRef.current.value;
      const obj = { email, password };
      const response = await axios.post(
        "http://localhost:5000/login",
        { obj },
        { returnSecureToken: true }
      );
      if (response.status === 200) {
        toast.success("Successfully Logged In!");
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("email", JSON.stringify(response.data.email));
        navigate("/chatapp");
      } else {
        toast.error("Invalid Credentials!");
      }
    } catch (err) {
      toast.error("Something went Wrong");
    }
  };

  return (
    <div className="w-[30%] h-[60%]   rounded-md   bg-white text-black ">
      <h2 className="font-semibold text-3xl text-center mt-4 mb-8 text-green-400 to to-blue-400">
        Login to your Account
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="text-lg ml-7 font-medium ">Email</label>
        <br />
        <input
          type="email"
          className="w-[85%] md:w-[85%] rounded-md border mx-7 mt-2 p-2 mb-5 border-black"
          ref={emailRef}
          required
        ></input>

        <label className="text-lg ml-7 font-medium ">Password</label>
        <br />
        <input
          type="password"
          className="w-[85%] md:w-[85%] rounded-md border mx-7  mt-2 p-2 mb-7 border-black"
          ref={passwordRef}
          required
        ></input>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-300  to-green-400  md:mx-[100px] sm:mx-[20px] rounded-md md:px-[80px] sm:px-[40px]  md:py-4  sm:py-2 border mb-6 font-semibold text-lg"
        >
          Login
        </button>
        <p className="mx-[90px]  text-lg">
          Don't Have an Account?
          <a href="/" className="text-blue-500 underline ml-2">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
