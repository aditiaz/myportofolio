import React, { useState } from "react";
import ContactImg from "../public/assets/contact.jpg";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
const Contact = () => {
  // const emailBody = {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailBody = {
      name: name,
      phone: phone,
      email: email,
      message: message,
      subject: subject,
    };
    console.log(emailBody);
    // your email sending logic here
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2  py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
        <h2 className="py-4"> Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8  ">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className=" h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Fullstack Developer</p>
                <p className="py-4">I&apos;m open to work.Contact me and let&apos;s talk</p>
              </div>

              <div>
                <p className="uppercase pt-8"> Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/aditiaarianugraha/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://github.com/aditiaz" target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="mailto:%20aditiaan96a@gmail.com" target="_blank" rel="noreferrer">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://drive.google.com/file/d/1x1U4c8YWFRgbiBcWfKx3xG0RoPXnpMjb/view?usp=sharing">
                      <BsFillPersonLinesFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lgKp-4">
            <div className="p-4">
              <form
                // action="https://mail.google.com/mail/?view=cm&fs=1&to=<aditiaan96a@gmail.com>&su=<subject>&body=<message>"
                action={`mailto:aditiaan96a@gmail.com?subject=${subject}&body=Halo nama saya ${name}, ${message}, nomor telpon saya ${phone},dan email saya ${email}`}
                method="POST"
                enctype="multipart/form-data"
                target="_blank"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  ></textarea>
                </div>
                <button t className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
