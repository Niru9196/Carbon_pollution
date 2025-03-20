import React from "react";
import Footer from "./component/Footer";
import Feature from "./component/Feature";
import AboutCompany from "./component/AboutCompany";
import WhyCarbonCrunch from "./component/WhyCarbonCrunch";
import HeroSection from "./component/HeroSection";

function App() {
    return (
        <>
            <HeroSection />
            <WhyCarbonCrunch />
            <AboutCompany />
            <Feature />
            <Footer />
        </>
    );
}

export default App;
