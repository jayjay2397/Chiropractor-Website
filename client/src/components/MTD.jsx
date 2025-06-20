import React from "react";

const MeetTheDoctor = () => (
    <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Meet the Doctor</h2>
        <img src="/doctor.jpg" alt="Dr. John Smith" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
        <h3 className="text-lg font-semibold text-blue-900">Dr. John Smith</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto mt-2">
            Dr. John Smith is an experienced chiropractor dedicated to helping patients achieve optimal health and wellness.
        </p>
    </section>
);

export default MeetTheDoctor;
