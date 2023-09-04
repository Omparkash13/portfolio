import React from "react";
import myPic from "../../assets/images/home.png";
function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-20 p-8 w-full min-h-screen bg-gray-100">
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl"><span className="text-orange-500">Hello</span>,I Am</div>
          <h1 className="font-serif text-8xl text-sky-400 mt-6">Om Parkash</h1>
          <div className="text-3xl mt-6">
            A Young <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black animate-fade-down animate-twice animate-ease-linear ">Web Developer</span>
          </div>
          <div></div>
          <div className="flex mt-16 gap-8">
            <div>
              <button class="animate-bounce hover:animate-none bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 w-36 hover:bg-blue-950 text-white py-2 px-4 rounded-2xl">
                Hire Me
              </button>
            </div>
            <div>
              <button class="animate-bounce hover:animate-none bg-gradient-to-r from-teal-500 via-purple-500 to-green-500 w-36 hover:bg-blue-950 text-white py-2 px-4 rounded-2xl">
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-20 shrink-0">
          <img className="h-full w-3/5 " src={myPic} alt="ChitChat Logo" />
        </div>
      </div>
    </>
  );
}

export default Home;
