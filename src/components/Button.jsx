/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Button = () => (
  <Link to='/auth'>
  <button type="button" className={`py-2 px-5 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none cursor-pointer`}>
    Get Started
  </button>
  </Link>
);

export default Button;