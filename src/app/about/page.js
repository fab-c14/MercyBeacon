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
            color: "orange",
        },
        {
            icon: FaUsers,
            title: "Community-Driven",
            description:
                "Working hand-in-hand with local communities to identify needs and implement sustainable solutions.",
            color: "teal",
        },
        {
            icon: FaGlobe,
            title: "Global Reach",
            description:
                "Operating in 50+ communities across the world, bringing hope and resources to underserved populations.",
            color: "blue",
        },
        {
            icon: FaHeart,
            title: "Volunteer Network",
            description:
                "Powered by 500+ dedicated volunteers who share our vision of a more compassionate world.",
            color: "green",
        },
    ],
    ctaText: "Join Our Mission",
    ctaLink: "#donate",
};

const getColorClasses = (color) => {
    const colors = {
        orange: 'bg-orange-50 border-orange-200',
        teal: 'bg-teal-50 border-teal-200',
        blue: 'bg-blue-50 border-blue-200',
        green: 'bg-green-50 border-green-200',
    };
    const iconColors = {
        orange: 'bg-orange-500',
        teal: 'bg-teal-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
    };
    return { card: colors[color], icon: iconColors[color] };
};

const Heading = () => (
    <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-gray-900 mb-6">
            {content.heading}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mx-auto max-w-3xl">
            {content.subheading}
        </p>
    </div>
);

const ServiceCard = ({ service }) => {
    const colors = getColorClasses(service.color);
    return (
        <div className={`${colors.card} border-2 flex items-start space-x-4 rounded-2xl p-6 shadow-md transition-shadow duration-300 hover:shadow-xl`}>
            <div className="flex-shrink-0">
                <div className={`h-12 w-12 ${colors.icon} flex items-center justify-center rounded-xl shadow-lg`}>
                    <service.icon className="text-white" size={24} />
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
            </div>
        </div>
    );
};

const CTAButton = () => (
    <div className="mt-16 text-center">
        <a
            href={content.ctaLink}
            className="inline-block bg-orange-500 hover:bg-orange-600 rounded-full px-8 py-3 font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
            {content.ctaText}
        </a>
    </div>
);

const AboutPage = () => (
    <div className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
            <Heading />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {content.services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </div>
            <CTAButton />
            
            {/* Mission Statement */}
            <div className="mt-20 bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
                <h3 className="text-gray-900 text-2xl md:text-3xl font-bold mb-6 text-center">
                    Our Story
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto text-center">
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
