"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <div className="logo backdrop-blur-md bg-white/20 border-b z-50 flex items-center justify-center py-4 absolute w-full">
      <Image src={logo} alt="logo" width={180} />
    </div>
  );
};

export default Navbar;
