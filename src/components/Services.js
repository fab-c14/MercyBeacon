import React from 'react';
import { FaUtensils, FaHeartbeat, FaBook, FaHandsHelping } from 'react-icons/fa';

const CONFIG = {
    title: "Our Impact Areas",
    subtitle: "How We Help Communities",
    services: [
        {
            icon: <FaUtensils className="text-4xl" />,
            title: "Food Relief",
            description:
                "We provide meals to families facing hunger. Every donation helps us deliver hope and nourishment to those in need.",
            buttonText: "Support Food Relief",
            color: "orange",
        },
        {
            icon: <FaHeartbeat className="text-4xl" />,
            title: "Healthcare",
            description:
                "We support medical aid programs, ensuring vulnerable communities receive essential treatment and life-saving care.",
            buttonText: "Support Healthcare",
            color: "teal",
        },
        {
            icon: <FaBook className="text-4xl" />,
            title: "Education",
            description:
                "We provide books, resources, and scholarships to empower children with knowledge and brighter futures.",
            buttonText: "Fund Education",
            color: "blue",
        },
        {
            icon: <FaHandsHelping className="text-4xl" />,
            title: "Community Support",
            description:
                "We strengthen communities through shelters, counseling, and empowerment programs. Together, we build resilience and hope.",
            buttonText: "Join Our Mission",
            color: "green",
        },
    ],
};

const getColorClasses = (color) => {
    const colors = {
        orange: {
            bg: 'bg-orange-50',
            icon: 'text-orange-500',
            button: 'bg-orange-500 hover:bg-orange-600',
            border: 'border-orange-200',
        },
        teal: {
            bg: 'bg-teal-50',
            icon: 'text-teal-500',
            button: 'bg-teal-500 hover:bg-teal-600',
            border: 'border-teal-200',
        },
        blue: {
            bg: 'bg-blue-50',
            icon: 'text-blue-500',
            button: 'bg-blue-500 hover:bg-blue-600',
            border: 'border-blue-200',
        },
        green: {
            bg: 'bg-green-50',
            icon: 'text-green-500',
            button: 'bg-green-500 hover:bg-green-600',
            border: 'border-green-200',
        },
    };
    return colors[color];
};

const Services = () => {
    return (
        <section id="services" className="relative bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {CONFIG.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {CONFIG.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CONFIG.services.map((service, index) => {
                        const colorClasses = getColorClasses(service.color);
                        return (
                            <div
                                key={index}
                                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl`}
                            >
                                <div className={`${colorClasses.icon} mb-6`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <a
                                    href="#donate"
                                    className={`inline-block ${colorClasses.button} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg`}
                                >
                                    {service.buttonText}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
