import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [copy, setCopy] = useState("");
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const CopyText = objCopy => {
    setCopy(objCopy.type);
    navigator.clipboard.writeText(objCopy.text);
  };

  const menu = [
    {
      aTag: "Home",
      to: "home",
    },
    {
      aTag: "About",
      to: "about",
    },
    {
      aTag: "Skills",
      to: "skills",
    },
    {
      aTag: "Work",
      to: "work",
    },
  ];

  const socialIcons = [
    {
      color: "bg-blue-500",
      link: "https://www.linkedin.com/in/aram-petrosyan-8a4040248/",
      name: "Linkedin",
      icon: FaLinkedin,
      copy: null,
    },
    {
      color: "bg-[#333333]",
      link: "https://github.com/AramPetrosyan07",
      name: "Github",
      icon: FaGithub,
      copy: null,
    },
    {
      color: "bg-blue-600",
      link: "https://www.facebook.com/aram.petrosyan.07",
      name: "Facebook",
      icon: FaFacebook,
      copy: null,
    },
    {
      color: "bg-green-600",
      link: null,
      name: "+37499044988",
      icon: FaPhoneSquareAlt,
      copy: { type: "phoneNumber", text: "+374 99 044 988" },
    },
    {
      color: "bg-[#26d4af]",
      link: null,
      name: "aspetrosyan@mail.ru",
      icon: HiOutlineMail,
      copy: { type: "mail", text: "aspetrosyan@mail.ru" },
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {/* <img src={Logo} alt="Logo Image" style={{ width: "50px" }} /> */}
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {menu.map((item, ind) => (
          <li key={ind}>
            <Link to={item.to} smooth={true} duration={500}>
              {item.aTag}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {menu.map((item, ind) => (
          <li key={ind}>
            <Link
              to={item.to}
              onClick={handleClick}
              smooth={true}
              duration={500}
            >
              {item.aTag}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://www.linkedin.com/in/aram-petrosyan-8a4040248/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://github.com/AramPetrosyan07"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://www.facebook.com/aram.petrosyan.07"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-10px] duration-300 bg-green-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 text-center"
              onClick={() =>
                CopyText({ type: "phoneNumber", text: "+374 99 044 988" })
              }
            >
              {copy === "phoneNumber" ? "Copied " : ""}
              +37499044988 <FaPhoneSquareAlt size={30} />
            </a>
          </li>
          <li className="w-[250px] h-[60px] flex justify-between items-center ml-[-190px] hover:ml-[-10px] duration-300 bg-[#26d4af]">
            <a
              className="flex justify-between items-center w-full text-gray-300 text-center "
              onClick={() =>
                CopyText({ type: "mail", text: "aspetrosyan@mail.ru" })
              }
            >
              {copy === "mail" ? "Copied " : ""}
              aspetrosyan@mail.ru <HiOutlineMail size={30} />
            </a>
          </li> */}

          {/* ---------------- */}

          {socialIcons.map((item, ind) => {
            const CustomTag = item.icon;
            return (
              <li
                key={ind}
                className={`w-[250px] h-[60px] flex justify-between items-center ml-[-190px] hover:ml-[-10px] duration-300 ${item.color}`}
              >
                {item.copy ? (
                  <a
                    className="flex justify-between items-center w-full text-gray-300 text-center "
                    onClick={() => CopyText(item.copy)}
                  >
                    {copy === item.copy.type ? "Copied " : ""}
                    {item.name} <CustomTag size={30} />
                  </a>
                ) : (
                  <a
                    className="flex justify-between items-center w-full text-gray-300"
                    target="_blank"
                    href={item?.link}
                  >
                    {item.name} <CustomTag size={30} />
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
