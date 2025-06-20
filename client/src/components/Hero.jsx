import React from "react";
import reliefStartsImg from "../assets/images/reliefstarts.png";


const Hero = () => (
    <section className="relative w-full overflow-hidden" >
        <img
            src={reliefStartsImg}
            alt="Relief Starts Here"
            className="w-full h-auto max-h-[500px] object-cover object-top md:object-center rounded-b-[2rem]"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-start px-6 md:px-20">
            <div className="text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight drop-shadow-md mb-6">
                    Relief<br />Starts Here
                </h1>
                <button className="px-6 py-3 text-white bg-teal-600 rounded-full font-semibold shadow hover:bg-teal-700 transition">
                    Book Appointment
                </button>
            </div>
        </div>
    </section>
);

export default Hero;