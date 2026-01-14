import React from 'react';
import { FaUtensils, FaHeartbeat, FaBook, FaHandsHelping } from 'react-icons/fa';

const CONFIG = {
    title: "Focus Areas",
    subtitle: "MercyBeacon International Foundation prioritizes education continuity, healthcare access, dignity for families, and community protection.",
    services: [
        {
            icon: <FaBook className="text-4xl" />,
            title: "Education Support",
            description:
                "Keep students enrolled through fee support, learning continuity, and back-to-school essentials so poverty never blocks a child’s education.",
            buttonText: "Sponsor Education",
            color: "blue",
            href: "#programs",
        },
        {
            icon: <FaHeartbeat className="text-4xl" />,
            title: "Healthcare & Relief",
            description:
                "Help families cover medicines, diagnostics, and urgent medical needs while providing food and essential kits during hardship.",
            buttonText: "Request Medical Support",
            color: "teal",
            href: "#support",
        },
        {
            icon: <FaHandsHelping className="text-4xl" />,
            title: "Women & Family Support",
            description:
                "Protect dignity for vulnerable households through need-based assistance, girls’ education continuity, and dignified family support.",
            buttonText: "Support Families",
            color: "orange",
            href: "#get-involved",
        },
        {
            icon: <FaUtensils className="text-4xl" />,
            title: "Community Protection",
            description:
                "Advance prevention campaigns and public health advocacy, including awareness on food safety and social harm prevention.",
            buttonText: "Join Community Protection",
            color: "green",
            href: "#community-protection",
        },
    ],
};

const getColorClasses = () => ({
    bg: 'bg-[var(--brand-accent-soft)]',
    icon: 'text-[var(--brand-accent)]',
    button: 'bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-dark)]',
    border: 'border-[var(--brand-border)]',
});

const Services = () => {
    return (
        <section id="focus-areas" className="relative bg-gray-50 py-20">
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
                                    href={service.href}
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
