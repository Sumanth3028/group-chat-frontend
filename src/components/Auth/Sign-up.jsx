import React from "react";

const SignUp = () => {
  return (
    <div className="w-[30%] h-[88%] rounded-md   bg-white text-black ">
      <h2 className="font-semibold text-3xl text-center mt-4 mb-8 text-green-400 to to-blue-400">
        Register Here
      </h2>
      <form>
        <label className="text-xl ml-7 font-medium ">Name</label>
        <br />
        <input className="w-[85%] rounded-md border mx-7 mt-2 p-2 mb-5 border-black"></input>
        <label className="text-xl ml-7 font-medium ">Email</label>
        <br />
        <input className="w-[85%] rounded-md border mx-7 mt-2 p-2 mb-5 border-black"></input>
        <label className="text-xl ml-7 font-medium ">Phone Number</label>
        <br />
        <input className="w-[85%] rounded-md border mx-7 mt-2 p-2 mb-5 border-black"></input>
        <label className="text-xl ml-7 font-medium ">Password</label>
        <br />
        <input className="w-[85%] rounded-md border mx-7  mt-2 p-2 mb-7 border-black"></input>
        <button className="bg-gradient-to-r from-blue-300  to-green-400 mx-[90px] rounded-md px-[100px] py-4 border mb-6 font-semibold text-lg">
          Register
        </button>
        <p className="mx-[90px] text-lg">
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
