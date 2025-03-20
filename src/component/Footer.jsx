import React from "react";
import companyLogo from "../assets/Company Logo 1.png";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";
import arrow from "../assets/Arrow 1.png";

const Footer = () => {
    return (
        <footer className="bg-[#222222] text-[#989898] py-10 px-6 pb-36">
            <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row md:gap-28">
                <div className="md:w-2/6 w-full text-center md:text-left">
                    <img
                        src={arrow}
                        alt="pointing to sending email"
                        className="mx-auto md:ml-4 -mb-2"
                    />
                    <p className="md:mb-2 text-white">
                        Subscribe to our mailing
                    </p>
                    <div className="mb-6 relative w-full max-w-md mx-auto md:mx-0">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full p-3 pr-20 rounded-lg bg-[#fff] text-black placeholder-[#989898] focus:outline-none"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#28B30E] text-[#222222] font-medium px-4 py-2 rounded-lg">
                            Subscribe
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 md:mt-8">
                        <img
                            src={companyLogo}
                            alt="Company Logo"
                            className="w-20 h-20 md:w-28 md:h-28"
                        />
                        <span className="text-2xl md:text-4xl font-semibold text-white">
                            Carboncrunch
                        </span>
                    </div>
                </div>

                <div className="md:w-3/5 w-full md:mt-11">
                    <div className="w-full my-4 flex justify-center">
                        <div className="h-[1px] w-full max-w-3xl bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 max-md:text-center">
                        <div>
                            <ul className="space-y-2">
                                <li className="mt-5">
                                    <a href="#" className="hover:text-white">
                                        Home
                                    </a>
                                </li>
                                <li className="mt-5">
                                    <a href="#" className="hover:text-white">
                                        About
                                    </a>
                                </li>
                                <li className="mt-5">
                                    <a href="#" className="hover:text-white">
                                        How it Works
                                    </a>
                                </li>
                                <li className="mt-5">
                                    <a href="#" className="hover:text-white">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="space-y-2">
                                <li className="mt-5">
                                    <a href="#" className="hover:text-white">
                                        FAQs
                                    </a>
                                </li>
                                <li className="mt-5">
                                    <a href="#" className="hover:text-white">
                                        Start Your Transactions
                                    </a>
                                </li>
                                <li className="mt-5">
                                    <a href="#" className="hover:text-white">
                                        Why Choose Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="space-y-2">
                                <li className="mt-5">
                                    <a href="#">Business</a>
                                </li>
                                <li className="mt-5">
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li className="mt-5">
                                    <a href="#">Refund Policy</a>
                                </li>
                                <li className="mt-5">
                                    <a href="#">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="space-y-2">
                                <li className="flex items-center mt-5 max-md:justify-center">
                                    Email
                                </li>
                                <li className="flex items-center mt-5 max-md:justify-center">
                                    Facebook
                                </li>
                                <li className="flex items-center mt-5 max-md:justify-center">
                                    X - Twitter
                                </li>
                                <li className="flex items-center mt-5 max-md:justify-center">
                                    Instagram
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row justify-between items-center mt-11">
                        <div className="text-medium text-[#fff]">
                            ©Carboncrunch.All Rights Reserved.
                        </div>

                        <div className="flex space-x-5 mt-4 md:mt-0 text-[#fff]">
                            <FaEnvelope className="text-white cursor-pointer text-2xl" />
                            <FaFacebookF className="text-white cursor-pointer text-2xl" />
                            <FaTwitter className="text-white cursor-pointer text-2xl" />
                            <FaInstagram className="text-white cursor-pointer text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
