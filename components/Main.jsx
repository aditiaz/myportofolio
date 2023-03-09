import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/Bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&apos;S BUID SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi,I&apos;m <span className="text-[#5651e5]"> Aditia</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Fullstack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a fronnt-end web developer specializing in building exceptional digital
            experience.Currently, I&apos;m fucused on building on responsive front-end web designs
            while learning to develop mobile apps while still learning back-end technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/aditiaarianugraha/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://github.com/aditiaz" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="mailto:%20aditiaan96a@gmail.com" target="_blank" rel="noreferrer">
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://drive.google.com/file/d/1x1U4c8YWFRgbiBcWfKx3xG0RoPXnpMjb/view?usp=sharing">
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
