import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault()
    const target = document.querySelector(sectionId)
    if(target){
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <a className="flex flex-wrap " to="/">
          <img
            width={75}
            height={75}
            src="/assets/Logo/logo-wk1.png"
            alt="logo"
          />
          <p className="mt-3 font-bold">
            SMK Wikrama <br /> Bogor
          </p>
        </a>
      </div>

      <label
        htmlFor="menu-toggle"
        className="pointer-cursor lg:hidden block"
      >
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input
        className="hidden"
        type="checkbox"
        id="menu-toggle"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto w-full`}
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                href="#"
                onClick={(event) => scrollToSection(event, '#')}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                href="#"
                onClick={(event) => scrollToSection(event, '#carawakaf')}
              >
                Cara Wakaf
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                href="#"
                onClick={(event) => scrollToSection(event, '#datawakaf')}
              >
                Data Wakaf
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                href="#"
                onClick={(event) => scrollToSection(event, '#gallery')}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                href="#"
              >
                Web Wikrama
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
