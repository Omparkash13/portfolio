import React from "react";

function Logo() {
  return (
    <>
      <div className=" flex gap-2">
        <div className="shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwF061_KCI39Omb_rc42KeasXo9tPddNwf1YECRbPNptBnBYkMvOgxV4q72xL7-vKK20&usqp=CAU"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div className="text-xl mt-2 font-medium text-yellow-100">OmiTech</div>
        </div>
      </div>
    </>
  );
}

export default Logo;
