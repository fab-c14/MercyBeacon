import {
    FaWallet,
    FaChartLine,
    FaShieldAlt,
    FaGraduationCap,
} from "react-icons/fa";

// No TypeScript types here, just plain JS objects
const content = {
    heading: "What We Do",
    subheading:
        "We offer a comprehensive suite of Bitcoin services designed to make your journey into cryptocurrency smooth, secure, and rewarding.",
    services: [
        {
            icon: FaWallet,
            title: "Secure Wallet Solutions",
            description:
                "We provide cutting-edge wallet technology to keep your Bitcoin safe and easily accessible.",
        },
        {
            icon: FaChartLine,
            title: "Trading Platform",
            description:
                "Our user-friendly trading platform allows you to buy, sell, and trade Bitcoin with ease.",
        },
        {
            icon: FaShieldAlt,
            title: "Advanced Security",
            description:
                "We implement state-of-the-art security measures to protect your assets and personal information.",
        },
        {
            icon: FaGraduationCap,
            title: "Education & Resources",
            description:
                "We offer comprehensive educational materials to help you understand and navigate the world of Bitcoin.",
        },
    ],
    ctaText: "Explore Our Services",
    ctaLink: "#",
};

const theme = {
    gradientDirection: "bg-gradient-to-tl",
    bgGradientFrom: "from-gray-900",
    bgGradientTo: "to-gray-950",
    cardBg: "bg-gray-800/50",
    headingColor: "text-white",
    subheadingColor: "text-gray-300",
    cardTitleColor: "text-white",
    cardDescriptionColor: "text-gray-300",
    iconGradientFrom: "from-yellow-400",
    iconGradientTo: "to-orange-500",
    ctaGradientFrom: "from-yellow-400",
    ctaGradientTo: "to-orange-500",
    ctaHoverFrom: "hover:from-yellow-500",
    ctaHoverTo: "hover:to-orange-600",
};

const Heading = () => (
    <div className="mb-12 text-center">
        <h2 className={`text-3xl font-bold sm:text-4xl ${theme.headingColor} mb-6`}>
            {content.heading}
        </h2>
        <p
            className={`text-lg sm:text-xl ${theme.subheadingColor} mx-auto max-w-3xl`}
        >
            {content.subheading}
        </p>
    </div>
);

const ServiceCard = ({ service }) => (
    <div
        className={`${theme.cardBg} flex items-start space-x-4 rounded-xl p-6 shadow-md transition-shadow duration-300 hover:shadow-lg`}
    >
        <div className="flex-shrink-0">
            <div
                className={`h-12 w-12 bg-gradient-to-br ${theme.iconGradientFrom} ${theme.iconGradientTo} flex items-center justify-center rounded-full shadow-lg`}
            >
                <service.icon className="text-white" size={24} />
            </div>
        </div>
        <div>
            <h3 className={`text-xl font-semibold ${theme.cardTitleColor} mb-2`}>
                {service.title}
            </h3>
            <p className={theme.cardDescriptionColor}>{service.description}</p>
        </div>
    </div>
);

const CTAButton = () => (
    <div className="mt-16 text-center">
        <a
            href={content.ctaLink}
            className={`inline-block bg-gradient-to-r ${theme.ctaGradientFrom} ${theme.ctaGradientTo} rounded-full px-8 py-3 font-bold text-white ${theme.ctaHoverFrom} ${theme.ctaHoverTo} transition-colors duration-300`}
        >
            {content.ctaText}
        </a>
    </div>
);

const WhatWeDo = () => (
    <div
        className={`min-h-screen ${theme.gradientDirection} ${theme.bgGradientFrom} ${theme.bgGradientTo} px-4 py-20 sm:px-6 lg:px-8`}
    >
        <div className="mx-auto max-w-7xl">
            <Heading />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {content.services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </div>
            <CTAButton />
        </div>
    </div>
);

export default WhatWeDo;