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
        <Marquee pauseOnHover className="bg-gray-100">
          <Link className="mr-28 text-gray-500 hover:text-cyan-700">Parliament calls on NATO to invite Ukraine to join the alliance.</Link>
          <Link className="mr-28 text-gray-500 hover:text-cyan-700">Rare earthquake damages French homes, schools and churches</Link>
          <Link className="mr-28 text-gray-500 hover:text-cyan-700">Harry and Meghan: Spotify podcast deal with couple ends</Link>
          <Link className="mr-28 text-gray-500 hover:text-cyan-700">Trump defiant after pleading not guilty in classified documents case</Link>
        </Marquee>
      </div>
    </>
  );
};

export default Navbar;
