import React from 'react';

// Configuration object for customizable charity content
const config = {
    badgeText: 'Join Our Mission',
    heading: {
        main: 'Together We Can',
        highlight: 'Make a Difference',
    },
    description:
        'We believe in building a kinder world through generosity and compassion. Your support helps provide food, shelter, education, and hope to communities in need. Every small act of kindness creates ripples of change.',
    buttons: [
        {
            text: 'Donate Now',
            link: '#donate',
            iconPath:
                'M50 5C27 5 5 27 5 50s22 45 45 45 45-22 45-45S73 5 50 5zm0 20c8 0 15 7 15 15s-7 15-15 15-15-7-15-15 7-15 15-15z',
        },
        {
            text: 'Become a Volunteer',
            link: '#volunteer',
            iconPath: 'M9 5l7 7-7 7',
        },
    ],
    stats: [
        { value: '$1M+', label: 'Funds Raised' },
        { value: '500+', label: 'Volunteers' },
        { value: '50+', label: 'Communities Helped' },
    ],
};

const Header = () => {
    return (
        <div className="min-h-screen bg-neutral-950 relative overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute inset-0">
                <div className="absolute left-[5%] top-[20%] w-[420px] h-[420px] bg-purple-500/30 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute right-[5%] top-[8%] w-[420px] h-[420px] bg-sky-500/30 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute left-[35%] top-[28%] w-[360px] h-[360px] bg-pink-500/25 rounded-full blur-[110px] animate-pulse" />
            </div>

            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light pointer-events-none" />

            {/* Subtle radial vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge with glow */}
                    <div className="inline-block mb-8">
                        <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-900/60 text-neutral-300 rounded-full border border-neutral-800 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(147,51,234,0.4)]">
                            <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse shadow-[0_0_12px_rgba(74,222,128,0.8)]"></span>
                            {config.badgeText}
                        </span>
                    </div>

                    {/* Heading with layered gradient */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">
                        <span className="bg-gradient-to-br from-white via-gray-100 to-neutral-400 text-transparent bg-clip-text">
                            {config.heading.main}
                        </span>
                        <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 text-transparent bg-clip-text drop-shadow-[0_8px_30px_rgba(236,72,153,0.25)]">
                            {config.heading.highlight}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-neutral-400 text-lg md:text-xl mb-14 leading-relaxed max-w-2xl mx-auto">
                        {config.description}
                    </p>

                    {/* Buttons with gradient borders, hover glow, and rings */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-18">
                        {config.buttons.map((button, index) => (
                            <a
                                key={index}
                                href={button.link}
                                className="group relative inline-flex items-center gap-3 rounded-xl px-6 sm:px-8 py-4 text-base font-semibold text-neutral-200 transition-all duration-300"
                            >
                                {/* Gradient border wrapper */}
                                <span className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-purple-500/60 via-pink-500/60 to-sky-500/60 opacity-70 blur-[0.5px]" />
                                <span className="relative z-10 flex items-center gap-3 rounded-[10px] bg-neutral-900/70 border border-neutral-800 backdrop-blur-md px-6 sm:px-8 py-4 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.35)] group-hover:shadow-[0_20px_40px_-12px_rgba(236,72,153,0.35)]">
                                    <svg
                                        className="w-6 h-6 fill-neutral-200 group-hover:fill-neutral-100 transition-colors"
                                        height="100"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 100 100"
                                        width="100"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d={button.iconPath} />
                                    </svg>
                                    {button.text}
                                </span>
                                {/* Hover ring/glow */}
                                <span className="absolute -inset-px rounded-xl ring-1 ring-white/5 group-hover:ring-2 group-hover:ring-pink-400/40 transition-all"></span>
                            </a>
                        ))}
                    </div>

                    {/* Stats Section with frosted card and subtle grid separators */}
                    <div className="mx-auto max-w-4xl rounded-2xl p-8 md:p-10 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 shadow-[0_30px_120px_-40px_rgba(56,189,248,0.25)]">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {config.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 text-transparent bg-clip-text">
                                        {stat.value}
                                    </div>
                                    <div className="text-neutral-400 text-sm mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Support caption */}
                    <p className="mt-10 text-neutral-400 text-sm">
                        Your generosity powers food drives, education programs, and emergency relief.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;