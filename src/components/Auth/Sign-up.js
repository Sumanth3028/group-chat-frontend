import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";



const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      let name = nameRef.current.value;
      let email = emailRef.current.value;
      let phone = phoneRef.current.value;
      let password = passwordRef.current.value;
      const obj = {name,email,phone,password};
      const response =await axios.post(
        "http://localhost:5000/signup",
        { obj },
        { returnSecureToken: true }
      );
      
      if (response.status === 201) {

         toast.success("Successfully Registered!")
       
      }
      
      if (response.status === 200) {
        toast.error("User Exists Already!")
      }
       
      
    } catch (err) {
      toast.error("Something went Wrong")
    }
  };

  return (
    <div className="w-[30%] h-[88%]   rounded-md   bg-white text-black ">
      <h2 className="font-semibold text-3xl text-center mt-4 mb-8 text-green-400 to to-blue-400">
        Register Here
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="text-lg  ml-7 font-medium ">Name</label>
        <br />
        <input
          type="text"
          className="w-[85%] md:w-[85%] rounded-md border mx-7 mt-2 p-2 mb-5 border-black "
          ref={nameRef}
        ></input>
        <label className="text-lg ml-7 font-medium ">Email</label>
        <br />
        <input
          type="email"
          className="w-[85%] md:w-[85%] rounded-md border mx-7 mt-2 p-2 mb-5 border-black"
          ref={emailRef}
        ></input>
        <label className="text-lg ml-7 font-medium ">Phone Number</label>
        <br />
        <input
          type="number"
          className="w-[85%] md:w-[85%] rounded-md border mx-7 mt-2 p-2 mb-5 border-black"
          ref={phoneRef}
        ></input>
        <label className="text-lg ml-7 font-medium ">Password</label>
        <br />
        <input
          type="password"
          className="w-[85%] md:w-[85%] rounded-md border mx-7  mt-2 p-2 mb-7 border-black"
          ref={passwordRef}
        ></input>
        <button type="submit" className="bg-gradient-to-r from-blue-300  to-green-400  md:mx-[90px] sm:mx-[20px] rounded-md md:px-[80px] sm:px-[40px]  md:py-4  sm:py-2 border mb-6 font-semibold text-lg">
          Register
        </button>
        <p className="mx-[90px]  text-lg">
          Already Have an Account?
          <a href="/login" className="text-blue-500 underline ml-2">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
