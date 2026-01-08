import React from 'react';
import { GiCircuitry, GiTechnoHeart, GiWireframeGlobe, GiCyberEye } from 'react-icons/gi';

// Configuration object for charity services, text, and styles
const CONFIG = {
    title: "SERVICES",
    subtitle: "OUR IMPACT",
    services: [
        {
            icon: <GiCircuitry className="text-4xl mb-4" />,
            title: "FOOD",
            subtitle: "RELIEF",
            description:
                "We provide meals to families facing hunger. Every donation helps us deliver hope and nourishment to those in need.",
            buttonText: "Donate Meals",
            bgColor: "bg-gray-800",
            textColor: "text-cyan-400",
            glowColor: "glow-cyan",
            rotation: "rotate-1",
            buttonBorderColor: "border-cyan-400",
            buttonHoverBgColor: "hover:bg-cyan-500",
            buttonHoverTextColor: "hover:text-gray-900",
        },
        {
            icon: <GiTechnoHeart className="text-4xl mb-4" />,
            title: "HEALTH",
            subtitle: "CARE",
            description:
                "We support medical aid programs, ensuring vulnerable communities receive essential treatment and life‑saving care.",
            buttonText: "Support Health",
            bgColor: "bg-purple-900",
            textColor: "text-pink-500",
            glowColor: "glow-pink",
            rotation: "-rotate-1",
            buttonBorderColor: "border-pink-500",
            buttonHoverBgColor: "hover:bg-pink-500",
            buttonHoverTextColor: "hover:text-gray-900",
        },
        {
            icon: <GiWireframeGlobe className="text-4xl mb-4" />,
            title: "EDUCATION",
            subtitle: "ACCESS",
            description:
                "We provide books, resources, and scholarships to empower children with knowledge and brighter futures.",
            buttonText: "Fund Education",
            bgColor: "bg-blue-900",
            textColor: "text-cyan-300",
            glowColor: "glow-cyan",
            rotation: "rotate-1",
            buttonBorderColor: "border-cyan-400",
            buttonHoverBgColor: "hover:bg-cyan-500",
            buttonHoverTextColor: "hover:text-gray-900",
        },
        {
            icon: <GiCyberEye className="text-4xl mb-4" />,
            title: "COMMUNITY",
            subtitle: "SUPPORT",
            description:
                "We strengthen communities through shelters, counseling, and empowerment programs. Together, we build resilience and hope.",
            buttonText: "Join Us",
            bgColor: "bg-gray-800",
            textColor: "text-purple-400",
            glowColor: "glow-purple",
            rotation: "-rotate-1",
            buttonBorderColor: "border-purple-500",
            buttonHoverBgColor: "hover:bg-purple-500",
            buttonHoverTextColor: "hover:text-gray-900",
        },
    ],
};

const Services = () => {
    return (
        <div className="relative bg-gray-900 overflow-hidden py-16">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(#1e1e31_1px,transparent_1px)] [background-size:40px_40px] opacity-50"></div>
                <div className="absolute inset-0 transition-opacity duration-300">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-cyan-500 glow-cyan animate-pulse"></div>
                    <div className="absolute top-0 right-1/4 w-px h-full bg-pink-500 glow-pink animate-pulse"></div>
                    <div className="absolute top-1/4 left-0 w-full h-px bg-yellow-500 glow-yellow animate-pulse"></div>
                    <div className="absolute bottom-1/4 left-0 w-full h-px bg-purple-500 glow-purple animate-pulse"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-12 font-cyber">
                    {CONFIG.title}
                    <br />
                    <span className="inline-block transform skew-x-12 text-gray-900 bg-cyan-500 px-4 py-2 transition-transform duration-300 hover:skew-x-0">
                        {CONFIG.subtitle}
                    </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {CONFIG.services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative p-8 ${service.bgColor} ${service.textColor} ${service.glowColor} transform ${service.rotation} hover:rotate-0 transition-all duration-300 ease-in-out`}
                        >
                            <div className={`absolute inset-0 ${service.bgColor} transform rotate-3 opacity-20`}></div>
                            <div className="relative z-10">
                                {service.icon}
                                <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-none tracking-tighter font-cyber">
                                    {service.title}
                                    <br />
                                    <span
                                        className={`inline-block transform skew-x-12 text-gray-900 px-4 py-2 transition-transform duration-300 hover:skew-x-0 ${service.bgColor.replace(
                                            'bg-',
                                            'bg-'
                                        )}`}
                                    >
                                        {service.subtitle}
                                    </span>
                                </h3>
                                <p className="text-gray-400 mt-4">{service.description}</p>
                                <button
                                    className={`mt-8 group relative ${service.buttonBorderColor} bg-gray-800 px-6 py-3 ${service.textColor} ${service.buttonHoverBgColor} ${service.buttonHoverTextColor} transition-all duration-300 ease-in-out font-bold uppercase text-lg ${service.glowColor} overflow-hidden transform ${service.rotation} hover:rotate-0 hover:scale-105 active:scale-95`}
                                >
                                    <div
                                        className={`absolute inset-0 ${service.bgColor.replace(
                                            'bg-',
                                            'bg-'
                                        )} transform rotate-3 opacity-20 group-hover:opacity-50 transition-opacity duration-300`}
                                    ></div>
                                    <span>{service.buttonText}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;