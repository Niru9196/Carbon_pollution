import React from "react";
import factory from "../assets/factory.jpeg";

const Feature = () => {
    return (
        <div className="relative w-full h-[50vh] xl:h-[90vh]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${factory})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/96 to-transparent"></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <p className="text-4xl font-semibold tracking-wide">
                    Ready to take meaningful action on your ESG journey?
                </p>
                <p className="mt-6">
                    Drive impact with accurate carbon accounting, reduction
                    strategies, and transparent reporting.
                </p>
                <div className="mt-11 space-x-4">
                    <button className="bg-[#D6FFD0] text-[#28B30E] font-bold py-2 px-6 rounded w-36">
                        Login
                    </button>
                    <button className="bg-[#28B30E] text-black font-bold py-2 px-6 rounded w-36">
                        Book Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feature;
