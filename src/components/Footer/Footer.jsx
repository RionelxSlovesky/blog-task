import { Link } from "react-router-dom";
import logo from '../../../public/android-chrome-192x192.png'


const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-10 md:py-16">
            {/* <h2 className="pb-[0.3em] text-2xl md:text-4xl">Blog</h2> */}
            <img className="mx-auto pb-2 w-12" src={logo} alt="" />
            <h4 className="pb-[1.5em] text-lg md:text-xl">Copyright © 2023 Blog, Inc.</h4>
            <p className="text-sm md:text-lg"><Link className="hover:text-cyan-500">About</Link> | <Link className="hover:text-cyan-500">Contact</Link> | <Link className="hover:text-cyan-500">Policy</Link></p>
        </footer>
    );
};

export default Footer;