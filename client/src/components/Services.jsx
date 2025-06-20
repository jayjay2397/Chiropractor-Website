import React from "react";

const services = [
    {
        icon: "💆‍♂️",
        title: "Spinal Adjustment",
        desc: "Manual manipulation to improve spinal function",
    },
    {
        icon: "👐",
        title: "Massage Therapy",
        desc: "Hands-on techniques to relieve muscle tension",
    },
    {
        icon: "🧍",
        title: "Posture Correction",
        desc: "Exercises and advice to improve posture",
    },
];

const Services = () => (
    <section className="bg-teal-100 py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">Services</h2>
        <div className="max-w-5xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition">
                    <div className="text-4xl mb-4">{s.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
            ))}
        </div>
    </section>
);
export default Services;