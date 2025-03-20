import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dashboard from "../assets/Frame 8.png";

gsap.registerPlugin(ScrollTrigger);

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const NetZeroCard = ({ number, showColor }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 90%",
                    end: "top 70%",
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative text-gray-800 p-4 rounded-lg w-full max-w-sm md:max-w-md h-48 shadow-lg transition-transform transform hover:scale-105"
        >
            <div
                className={`absolute top-0 left-0 w-1/2 h-[3px] ${
                    showColor && "bg-[#28B30E]"
                }`}
            ></div>
            <div
                className={`font-bold text-xl ${showColor && "text-[#28B30E]"}`}
            >
                {number}
            </div>
            <h2
                className={`font-bold mt-2 text-lg ${
                    showColor && "text-[#28B30E]"
                }`}
            >
                Track and manage your Net Zero Pathway
            </h2>
            <p className="text-gray-600 mt-1 font-normal">
                {truncateText(
                    "Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year, analyse the year-on-year progress against the targets and gain valuable analytics.",
                    100
                )}
            </p>
        </div>
    );
};

const AboutCompany = () => {
    const containerRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    end: "top 60%",
                    scrub: 1,
                },
            }
        );

        gsap.fromTo(
            imgRef.current,
            { opacity: 0, scale: 0.8, y: 50 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.5)",
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top 90%",
                    end: "top 70%",
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div
            ref={containerRef}
            className="px-6 md:py-12 flex flex-col items-center"
        >
            <div className="text-center mb-10 max-w-7xl">
                <h1 className="text-lg font-bold text-[#239C0C]">
                    How It Works?
                </h1>
                <p className="text-3xl sm:text-5xl mt-5 font-bold md:mt-9">
                    Getting Started is Easy
                </p>
                <p className="text-xl sm:text-2xl font-medium mt-6">
                    How Carboncrunch SAAS works
                </p>
            </div>

            <div className="flex flex-col xl:flex-row justify-center gap-16 xl:gap-8 max-w-7xl md:mt-11 max-xl:mb-11">
                <NetZeroCard number="01" showColor={true} />
                <NetZeroCard number="02" />
                <NetZeroCard number="03" />
            </div>

            <div className="flex items-center justify-center mt-12 max-xl:hidden">
                <img
                    ref={imgRef}
                    src={dashboard}
                    alt="dashboard"
                    className="w-full max-w-5xl"
                />
            </div>
        </div>
    );
};

export default AboutCompany;
