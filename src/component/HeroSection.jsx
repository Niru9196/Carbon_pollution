import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import bgImage from "../assets/Earth.png"; 
import heroImage from "../assets/industry.png";
import "../animation.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 px-6 md:px-14">

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <ul
                    className={`absolute md:relative top-full left-0 w-full md:w-auto md:flex space-x-6 md:space-x-14 md:max-xl:space-x-5 transition-all duration-300 ease-in-out ${
                        isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                    } md:opacity-100 md:flex-row md:items-center md:space-y-0 space-y-4 md:mt-0 mt-2 text-center md:text-left xl:ml-72 p-4 md:p-0 shadow-md md:shadow-none`}
                >
                    <li className="cursor-pointer hover:text-gray-600 transition-all duration-300">
                        Home
                    </li>
                    <li className="cursor-pointer hover:text-gray-600 transition-all duration-300">
                        Services
                    </li>
                    <li className="cursor-pointer hover:text-gray-600 transition-all duration-300">
                        Blog
                    </li>
                    <li className="cursor-pointer hover:text-gray-600 transition-all duration-300">
                        About Us
                    </li>
                    <li className="cursor-pointer hover:text-gray-600 transition-all duration-300">
                        Contact Us
                    </li>
                </ul>

                <div className="hidden md:flex space-x-6">
                    <button className="p-2 bg-[#D6FFD0] rounded-lg text-[#28B30E] xl:w-36 font-semibold hover:bg-[#bfffb5] transition-all duration-300">
                        Login
                    </button>
                    <button className="p-2 bg-[#28B30E] rounded-lg text-black min-w-32 xl:w-36  font-semibold hover:bg-[#22a50c] transition-all duration-300">
                        Book Demo
                    </button>
                </div>
            </div>
        </nav>
    );
};

const HeroSection = () => {
    return (
        <div
            className="relative w-full h-[60vh] xl:h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-12 fade-in"
            style={{ backgroundImage: `url(${bgImage})` }}
        >

            <div className="relative flex w-full max-w-7xl mx-auto flex-col md:flex-row">

                <div className="w-full xl:w-3/5 z-10 flex justify-center items-center flex-col text-center xl:text-left slide-in-left">
                    <h1 className="text-4xl md:text-8xl font-bold tracking-tight">
                        GHG Accounting <br /> Scope 1, Scope 2, Scope 3
                    </h1>
                    <p className="text-lg md:text-2xl mt-4 md:mt-8">
                        Track, minimize, offset, and report your carbon
                        emissions effortlessly to drive faster decarbonization
                        progress.
                    </p>
                </div>

                <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-6 md:mt-0 slide-in-right max-xl:hidden">
                    <img
                        src={heroImage}
                        alt="GHG Accounting"
                        className="w-3/4 md:w-full drop-shadow-[0_10px_10px_rgba(0,0,0,1)]"
                    />
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default App;
