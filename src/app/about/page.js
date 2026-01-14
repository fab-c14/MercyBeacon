import {
    FaHandHoldingHeart,
    FaUsers,
    FaGlobe,
    FaHeart,
} from "react-icons/fa";

const content = {
    heading: "Who We Are",
    subheading:
        "MercyBeacon International Foundation is a social impact foundation protecting health, enabling education, and restoring dignity for vulnerable households. Our work is rooted in service carried out under Shams-ul-Huda Educational & Research Trust since 1988.",
    services: [
        {
            icon: FaHandHoldingHeart,
            title: "Healthcare & Relief",
            description:
                "Medical support, medicines, diagnostics, and relief kits deployed with household-level due diligence.",
            color: "orange",
        },
        {
            icon: FaUsers,
            title: "Education Continuity",
            description:
                "Fees, tuition continuity, higher education assistance, and back-to-school essentials to keep students enrolled.",
            color: "teal",
        },
        {
            icon: FaGlobe,
            title: "Dignity-First Family Support",
            description:
                "Support for vulnerable households with safeguards, including girls’ education and dignified family assistance.",
            color: "blue",
        },
        {
            icon: FaHeart,
            title: "Community Protection",
            description:
                "Prevention campaigns, food safety advocacy, and community mobilization to reduce social harms.",
            color: "green",
        },
    ],
    ctaText: "Explore Programs",
    ctaLink: "/#programs",
};

const getColorClasses = (color) => {
    const colors = {
        orange: 'bg-[#e6f3f6] border-[#c7e2e8]',
        teal: 'bg-[#f1f7f9] border-[#c7e2e8]',
        blue: 'bg-[#e6f3f6] border-[#c7e2e8]',
        green: 'bg-[#f1f7f9] border-[#c7e2e8]',
    };
    const iconColors = {
        orange: 'bg-[#2c798e]',
        teal: 'bg-[#2c798e]',
        blue: 'bg-[#2c798e]',
        green: 'bg-[#2c798e]',
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
            className="inline-block bg-[#2c798e] hover:bg-[#255f71] rounded-full px-8 py-3 font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
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
            
            {/* Mission & Vision */}
            <div className="mt-20 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-gray-900 text-2xl font-bold mb-4">Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                        To ensure poverty never blocks a child’s education, a patient’s healthcare, or a family’s dignity—by delivering reliable support systems at the household level.
                    </p>
                </div>
                <div className="bg-[#e6f3f6] border-2 border-[#c7e2e8] rounded-2xl p-8 shadow-lg">
                    <h3 className="text-gray-900 text-2xl font-bold mb-4">Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                        A society where communities thrive through education continuity, safer public health conditions, and strong family support, especially for those most at risk.
                    </p>
                </div>
            </div>

            {/* Values */}
            <div className="mt-12 bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-gray-900 text-2xl font-bold mb-6 text-center">Values</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
                    {["Mercy with accountability", "Dignity-first support", "Transparency", "Community partnership", "Prevention and protection", "Ethics and safeguarding"].map((value) => (
                        <div key={value} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                            {value}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legacy */}
            <div className="mt-12 bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
                <h3 className="text-gray-900 text-2xl md:text-3xl font-bold mb-4">
                    Our Legacy (1988–Present)
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Roots trace back to Shams-ul-Huda Educational &amp; Research Trust (1988), serving families with education support, relief, and wellbeing initiatives in Srinagar and beyond. MercyBeacon builds on this credibility with expanded programs and safeguards.
                </p>
            </div>

            {/* Leadership */}
            <div className="mt-12 bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-gray-900 text-2xl font-bold mb-6 text-center">Leadership</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            name: "Mufti Syed Ahmad Bukhari (Srinagar)",
                            role: "Patron / Guidance (verify title)",
                            note: "Referenced publicly in connection with SHERT leadership and patronage.",
                        },
                        {
                            name: "Hidayat Bukhari",
                            role: "Community Relief & Advocacy (verify title)",
                            note: "Referenced for SHERT field work and public-facing writing.",
                        },
                    ].map((leader) => (
                        <div key={leader.name} className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                            <p className="text-gray-900 font-semibold text-lg">{leader.name}</p>
                            <p className="text-[#2c798e] font-semibold text-sm mb-2">{leader.role}</p>
                            <p className="text-gray-700">{leader.note}</p>
                        </div>
                    ))}
                </div>
                <p className="text-gray-600 text-sm mt-4 text-center">
                    Add short bios, photos, and confirmed titles once provided by the team.
                </p>
            </div>
        </div>
    </div>
);

export default AboutPage;
