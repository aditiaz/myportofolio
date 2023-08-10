import Image from 'next/image';
import React from 'react';
import onlineCinemaImg from '../public/assets/projects/canvaCinema.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const onlineCinema = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={onlineCinemaImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Online Cinema</h2>
          <h3>reactJS / Tailwind / Golang / MySql</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Online Cinema is an online movie streaming website that offers movies of various genres
            for purchase. And is built with ReactJs as front-end stack and golang and mySql as
            back-end stack. Users can filter out all the movies by category.User authentication is
            available so you can signup and signin to your account with email addres in order to
            purchase movie and the movie you already purchase will be stored in MyFilm page.This
            made possible with REST API I built with golang and gorillamux as the library and other
            backend dependencies.I use midtrans as payment gateway , it&apos;s still dummy not a
            real payment.
          </p>
          <a href="https://aditcinema.vercel.app/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/aditiaz/OnlineCinema" target="_blank">
            <button className="px-8 py-2 mt-4">Front-end code </button>
          </a>
          <a href="https://github.com/aditiaz/OnlineCinemaBE" target="_blank">
            <button className="px-8 py-2 mt-4 ml-8">Back-end code </button>
          </a>
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
                Tailwindcss
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

export default onlineCinema;
