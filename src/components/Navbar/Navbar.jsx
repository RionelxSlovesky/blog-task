import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./Navbar.css";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header className="flex items-center justify-center py-6 bg-cyan-500 text-white px-8 text-xl">
          <Link to="/" className="me-auto">
            <h3>Blog</h3>
          </Link>
        <nav ref={navRef}>
          <Link className="mx-[2em] hover:text-yellow-500" to="/">
            About
          </Link>
          <Link className="mx-[2em] hover:text-yellow-500" to="/">
            Contact
          </Link>
          <Link className="mx-[2em] hover:text-yellow-500" to="/">
            Login
          </Link>
          <button
            className="p-[5px] cursor-pointer bg-transparent
                md:hidden md:opacity-0"
            onClick={showNavbar}
          >
            <FaTimes></FaTimes>
          </button>
        </nav>
        <button
          className="p-[5px] cursor-pointer bg-transparent
            md:hidden md:opacity-0"
          onClick={showNavbar}
        >
          <FaBars></FaBars>
        </button>
      </header>
      <div className="flex text-lg">
        <div className="flex-grow py-2 px-8 bg-red-500 text-white">
          Breaking:
        </div>
        <Marquee className="bg-gray-100">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </>
  );
};

export default Navbar;
