import React from "react";
import Image from "next/image";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import mySql from "../public/assets/skills/mySql.png";
import golang from "../public/assets/skills/golang.png";
import github from "../public/assets/skills/github.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={html} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={css} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={javascript} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={react} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACTJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={tailwind} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWINDCSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={mySql} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MYSQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={golang} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GOLANG</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={github} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
