import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full  md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px]  m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Worked in various jobs before I decided to pursue programming. I felt the need to make a
            change in my life and improve my family&apos;s quality of life. After watching numerous
            online tutorials on the internet and YouTube, I ultimately decided to become a web
            developer. Recently, I participated in a bootcamp offered by Dumbways, where I learned
            both front-end and back-end technologies, and successfully completed it.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">Check out my projects</p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto  shadow-xl shadow-gray-400 flex items-center p-4 hover:scale-105 ease-in duration-200 justify-center">
          <Image
            className="rounded-xl"
            width="400"
            height="10"
            src="/../public/assets/Aditia.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
