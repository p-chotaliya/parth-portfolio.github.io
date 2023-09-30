import React, { useState } from "react";
import Parth_resume from "./Parth_Resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="md:space-x-10">
      <div className="md:hidden flex justify-between items-center px-8">
        <button onClick={toggleMenu} className="px-4 py-1 rounded-lg text-gray">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {!menuOpen ? (
          <a
            href={Parth_resume}
            download="Parth-Resume"
            target="_blank"
            rel="noreferrer"
            className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg text-lg border border-black glow"
          >
            Resume
          </a>
        ) : null}
      </div>
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-center text-center`}
      >
        <li className="my-6 md:my-0  ">
          <a
            href="#Experience"
            onClick={closeMenu}
            className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Experience
          </a>
        </li>
        <li className="my-6 md:my-0  ">
          <a
            href="#Projects"
            onClick={closeMenu}
            className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Projects
          </a>
        </li>
        <li className="my-6 md:my-0  ">
          <a
            href="#Skill"
            onClick={closeMenu}
            className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Skill
          </a>
        </li>
        <li className="my-6 md:my-0  ">
          <a
            href="#contact"
            onClick={closeMenu}
            className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Contact
          </a>
        </li>
        <li className="my-6 md:my-0  ">
          <a
            href={Parth_resume}
            download="Parth-Resume"
            target="_blank"
            rel="noreferrer"
            className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg glow"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
