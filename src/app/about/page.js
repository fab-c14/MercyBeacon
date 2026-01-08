import {
    FaHandHoldingHeart,
    FaUsers,
    FaGlobe,
    FaHeart,
} from "react-icons/fa";

const content = {
    heading: "About Our Mission",
    subheading:
        "We are dedicated to creating lasting positive change in communities worldwide through compassion, generosity, and collaborative action.",
    services: [
        {
            icon: FaHandHoldingHeart,
            title: "Direct Impact",
            description:
                "100% of donations go directly to those in need. We operate with full transparency and accountability.",
        },
        {
            icon: FaUsers,
            title: "Community-Driven",
            description:
                "Working hand-in-hand with local communities to identify needs and implement sustainable solutions.",
        },
        {
            icon: FaGlobe,
            title: "Global Reach",
            description:
                "Operating in 50+ communities across the world, bringing hope and resources to underserved populations.",
        },
        {
            icon: FaHeart,
            title: "Volunteer Network",
            description:
                "Powered by 500+ dedicated volunteers who share our vision of a more compassionate world.",
        },
    ],
    ctaText: "Join Our Mission",
    ctaLink: "#donate",
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
    iconGradientFrom: "from-purple-500",
    iconGradientTo: "to-pink-500",
    ctaGradientFrom: "from-purple-500",
    ctaGradientTo: "to-pink-500",
    ctaHoverFrom: "hover:from-purple-600",
    ctaHoverTo: "hover:to-pink-600",
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
        className={`${theme.cardBg} flex items-start space-x-4 rounded-xl p-6 shadow-md transition-shadow duration-300 hover:shadow-lg border border-neutral-700`}
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
            className={`inline-block bg-gradient-to-r ${theme.ctaGradientFrom} ${theme.ctaGradientTo} rounded-full px-8 py-3 font-bold text-white ${theme.ctaHoverFrom} ${theme.ctaHoverTo} transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-pink-500/50`}
        >
            {content.ctaText}
        </a>
    </div>
);

const AboutPage = () => (
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
            
            {/* Mission Statement */}
            <div className="mt-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 md:p-12">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
                    Our Story
                </h3>
                <p className="text-neutral-300 text-lg leading-relaxed max-w-4xl mx-auto text-center">
                    Founded on the belief that every person deserves dignity, opportunity, and hope, 
                    CharityWeb brings together compassionate individuals from around the world. 
                    Through food relief, healthcare support, education programs, and community development, 
                    we're building a brighter future—one act of kindness at a time.
                </p>
            </div>
        </div>
    </div>
);

export default AboutPage;