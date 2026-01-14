import React from 'react';
import {
    FaUtensils,
    FaHeartbeat,
    FaBook,
    FaHandsHelping,
    FaArrowRight,
} from 'react-icons/fa';

const CONFIG = {
    title: 'Focus Areas',
    subtitle:
        'MercyBeacon International Foundation prioritizes education continuity, healthcare access, dignity for families, and community protection.',
    services: [
        {
            icon: <FaBook className="text-4xl" />,
            title: 'Education Support',
            description:
                'Keep students enrolled through fee support, learning continuity, and back-to-school essentials so poverty never blocks a child’s education.',
            buttonText: 'Sponsor Education',
            href: '#programs',
        },
        {
            icon: <FaHeartbeat className="text-4xl" />,
            title: 'Healthcare & Relief',
            description:
                'Help families cover medicines, diagnostics, and urgent medical needs while providing food and essential kits during hardship.',
            buttonText: 'Request Medical Support',
            href: '#support',
        },
        {
            icon: <FaHandsHelping className="text-4xl" />,
            title: 'Women & Family Support',
            description:
                'Protect dignity for vulnerable households through need-based assistance, girls’ education continuity, and dignified family support.',
            buttonText: 'Support Families',
            href: '#get-involved',
        },
        {
            icon: <FaUtensils className="text-4xl" />,
            title: 'Community Protection',
            description:
                'Advance prevention campaigns and public health advocacy, including awareness on food safety and social harm prevention.',
            buttonText: 'Join Community Protection',
            href: '#community-protection',
        },
    ],
};

const Services = () => {
    return (
        <section id="focus-areas" className="relative bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {CONFIG.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        {CONFIG.subtitle}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CONFIG.services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl p-8
                         transition-all duration-300
                         hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="text-[var(--brand-accent)] mb-6">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                {service.description}
                            </p>

                            {/* Button */}
                            <a
                                href={service.href}
                                className="group inline-flex items-center gap-2
                           text-sm font-medium
                           text-[var(--brand-accent)]
                           border border-[var(--brand-accent)]
                           px-4 py-2 rounded-full
                           transition-all duration-300
                           hover:bg-[var(--brand-accent)]
                           hover:text-white"
                            >
                                {service.buttonText}
                                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
