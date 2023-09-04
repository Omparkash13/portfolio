import React from "react";
import Logo from "../logo/Logo";

function Header() {
  return (
    <>
      <div className="max-w-full bg-amber-700 fixed top-0 left-0 w-full">
        <div className="grid grid-cols-2">
          <div className="items-center p-5">
            <Logo />
          </div>
          <div>
            <ul className="flex space-x-8 text-white items-center justify-end m-6">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">
                <button className="bg-blue-700 hover:bg-yellow-100 text-white py-2 px-4 rounded-2xl hover:text-black">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
