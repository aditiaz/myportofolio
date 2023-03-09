import Image from "next/image";
import React from "react";
import housyImg from "../public/assets/projects/portHousy.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const housy = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute z-1" layout="fill" objectFit="cover" src={housyImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Housy</h2>
          <h3>reactJS / ReactBootsrap / Golang / MySql</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Housy is marketplace property website for renters or homeowners to rent their property.
            And is built with ReactJs as front-end stack and golang and mySql as back-end stack.
            Users can specify the property you want to rent by period,number of bedroom ,bath room
            and the price.User authentication is available so you can signup and signin to your
            account with email addres in order to rent your chosen property.This made possible with
            REST API I built with golang and gorillamux as the library and other backend
            dependencies.I use midtrans as payment gateway , it&apos;s still dummy not a real
            payment.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Front-end code </button>
          <button className="px-8 py-2 mt-4 ml-8">Back-end code </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                ReactJs
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                React Bootsrap
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Axios
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Golang
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Gorilla Mux
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                MySql
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default housy;
