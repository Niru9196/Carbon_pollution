import React from "react";
import dropIcon from "../assets/icon.png";

const WhyCarbonCrunch = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 xl:py-12 flex flex-col xl:flex-row gap-10">
            <div className="w-full xl:w-1/2 text-center xl:text-left">
                <h3 className="text-[#239C0C] font-bold text-lg sm:text-xl relative inline-block md:after:block xl:after:content-[''] xl:after:w-16 xl:after:h-1 after:bg-[#239C0C] after:mt-1">
                    Why Carboncrunch
                </h3>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold md:mt-5 leading-tight">
                    Leading Sustainability <br className="hidden md:block" />{" "}
                    with Carboncrunch
                </h1>
                <p className="text-gray-600 mt-4 text-lg sm:text-xl md:text-2xl font-medium max-w-xl mx-auto xl:mx-0">
                    GHG (Greenhouse Gas) Accounting is a framework used to
                    measure and report greenhouse gas emissions.
                </p>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col space-y-12">
                <BenefitItem
                    feature1={true}
                    title="Regulatory Compliance and Reporting"
                    description="Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements."
                    highlighted
                />
                <BenefitItem
                    feature1={true}
                    title="Meeting Sustainability Goals and Net-Zero Targets"
                    description="Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements."
                    highlighted
                />
                <BenefitItem
                    feature1={true}
                    title="Cost Savings and Operational Efficiency"
                    description="Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements."
                />
            </div>
        </div>
    );
};

const BenefitItem = ({ title, description, highlighted, feature1 }) => {
    return (
        <div
            className={`relative flex xl:flex-col gap-5 items-start mb-14 ${
                highlighted ? "text-green-600 font-semibold" : "text-gray-400"
            }`}
        >
            <div className="w-16 h-16 bg-[#D6FFD0] flex items-center justify-center rounded-3xl">
                <img src={dropIcon} alt="drop icon" className="w-8 h-8" />
            </div>

            <div className="flex-1 max-md:flex max-md:flex-col">
                <h3
                    className={`text-2xl font-bold ${
                        feature1 ? "text-[#28B30E]" : ""
                    }`}
                >
                    {title}
                </h3>
                <p className="text-[#2D2D2D] mt-3 font-normal font-sans leading-6">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default WhyCarbonCrunch;
