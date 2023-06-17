import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from "react";
import './Navbar.css'


const Navbar = () => {


    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header className="flex items-center justify-center py-6 bg-cyan-500 text-white px-[2rem] text-xl">
            <Link className="flex-1" to='/'><h3>Blog</h3></Link>
            <nav
            ref={navRef}>
                <Link className="mx-[2em] hover:text-yellow-500" to='/'>About</Link>
                <Link className="mx-[2em] hover:text-yellow-500" to='/'>Contact</Link>
                <Link className="mx-[2em] hover:text-yellow-500" to='/'>Login</Link>
                <button 
                className="p-[5px] cursor-pointer bg-transparent
                md:hidden md:opacity-0" 
                onClick={showNavbar}>
                    <FaTimes></FaTimes>
                </button>
            </nav>
            <button 
            className="p-[5px] cursor-pointer bg-transparent
            md:hidden md:opacity-0" 
            onClick={showNavbar}>
                <FaBars></FaBars>
            </button>
        </header>
    );
};

export default Navbar;