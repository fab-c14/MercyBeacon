import React from "react";
import {
  FaShieldAlt,
  FaRegNewspaper,
  FaGlobeAmericas,
  FaUserShield,
  FaBookOpen,
  FaHeartbeat,
  FaHandsHelping,
  FaChartPie,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="text-center mb-12">
    {eyebrow && (
      <p className="text-sm font-semibold text-[#2c798e] uppercase tracking-wide mb-2">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
    )}
  </div>
);

const LegacyStrip = () => (
  <section id="legacy" className="bg-[#e6f3f6] border-y-2 border-[#c7e2e8]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <FaShieldAlt className="text-[#2c798e] text-2xl" />
        <p className="text-gray-900 font-semibold">
          Serving communities since 1988 under Shams-ul-Huda Educational &amp;
          Research Trust.
        </p>
      </div>
      <p className="text-gray-700 text-sm md:text-base">
        MercyBeacon International Foundation builds on this legacy to expand
        healthcare access, education continuity, and dignified family support.
      </p>
    </div>
  </section>
);

const SpotlightSection = () => (
  <section
    id="community-protection"
    className="bg-white py-16 border-b border-gray-100"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Featured Spotlight"
        title="Public Health Protection"
        description="Addressing harmful food adulteration risks through awareness and community action."
      />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            What We Are Highlighting
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Communities deserve safe food and transparent practices. MercyBeacon
            is amplifying concerns around adulteration in honey, butter, and
            sweets, and the health impacts that follow.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#2c798e] mt-1" />
              <span>Awareness drives on food safety and prevention.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#2c798e] mt-1" />
              <span>Community action against harmful practices.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#2c798e] mt-1" />
              <span>Partnerships for public health protection.</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#1f3249] text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">How You Can Help</h3>
          <p className="mb-6 opacity-90">
            Join prevention campaigns, share verified information, and support
            households most at risk from unsafe food supplies.
          </p>
          <div className="space-y-3">
            <a
              href="#news"
              className="flex items-center justify-between bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition"
            >
              <span>Read the latest field updates</span>
              <FaArrowRight />
            </a>
            <a
              href="#get-involved"
              className="flex items-center justify-between bg-white text-[#2c798e] font-semibold rounded-xl px-4 py-3 transition hover:-translate-y-0.5"
            >
              <span>Partner with our community protection work</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhatWeDoSection = () => {
  const items = [
    {
      icon: FaBookOpen,
      title: "Education",
      problem:
        "Children lose education because of fees, uniforms, transport, or household instability.",
      action:
        "School fee support, tuition continuity, higher education assistance, and back-to-school essentials.",
      outcome:
        "Keeps students enrolled, reduces dropout risk, and protects long-term learning.",
      color: "blue",
    },
    {
      icon: FaHeartbeat,
      title: "Healthcare & Relief",
      problem:
        "Families delay care when they cannot afford medicines, diagnostics, or essentials.",
      action:
        "Support for basic healthcare, food kits during hardship, and wellbeing initiatives that lower risk.",
      outcome:
        "Enables timely treatment and stabilizes households during crises.",
      color: "teal",
    },
    {
      icon: FaHandsHelping,
      title: "Women & Family Support",
      problem:
        "Vulnerable households face financial and social barriers that affect dignity and stability.",
      action:
        "Need-based family assistance, girls’ education continuity, and dignified support for marriages with safeguards.",
      outcome:
        "Protects dignity, keeps families stable, and helps children remain in school.",
      color: "orange",
    },
    {
      icon: FaUserShield,
      title: "Community Protection",
      problem: "Public health threats and social harms often go unchecked.",
      action:
        "Prevention campaigns, community mobilization, and advocacy on food safety and social harm prevention.",
      outcome:
        "Reduces risk, informs communities, and builds protection systems together.",
      color: "green",
    },
  ];

  const colorMap = {
    blue: "bg-[#e6f3f6] border-[#c7e2e8]",
    teal: "bg-[#f1f7f9] border-[#c7e2e8]",
    orange: "bg-[#e6f3f6] border-[#c7e2e8]",
    green: "bg-[#f1f7f9] border-[#c7e2e8]",
  };

  return (
    <section id="what-we-do" className="bg-gray-50 py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Designed for impact at the household level"
          description="Each focus area is built to solve a clear problem with practical actions and measurable outcomes."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className={`${colorMap[item.color]} border-2 rounded-2xl p-6 shadow-sm`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow">
                  <item.icon className="text-2xl text-gray-900" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">
                    {item.title}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    Problem we solve
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{item.problem}</p>
              <div className="bg-white rounded-xl p-4 border border-gray-200 mb-4">
                <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  What we do
                </p>
                <p className="text-gray-800">{item.action}</p>
              </div>
              <p className="text-gray-800 font-semibold">
                How it helps: {item.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramsSection = () => {
  const programs = [
    {
      title: "Sponsor a Student",
      detail:
        "Covers fees, tuition, books, and transport for deserving students with verification and sponsor tiers.",
    },
    {
      title: "Education Continuity Fund",
      detail:
        "Emergency support to prevent dropout when families face sudden hardship.",
    },
    {
      title: "Medical Support Fund",
      detail:
        "Diagnostics, medicines, and urgent medical assistance with basic due diligence.",
    },
    {
      title: "Food & Essential Kits",
      detail:
        "Winter hardship and crisis-period deployments with transparent kit lists.",
    },
    {
      title: "Community Protection Initiatives",
      detail:
        "Drug prevention and food safety/public health awareness backed by evidence.",
    },
  ];

  return (
    <section id="programs" className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Programs"
          title="Dedicated pathways to support and protect communities"
          description="Structured programs make it easier to sponsor education, enable medical care, deploy relief kits, and drive prevention campaigns."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <FaGlobeAmericas className="text-[#2c798e]" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {program.title}
                </h3>
              </div>
              <p className="text-gray-700 flex-1">{program.detail}</p>
              <a
                href="#support"
                className="inline-flex items-center gap-2 text-[#2c798e] font-semibold hover:text-[#255f71]"
              >
                Learn more
                <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
  const stats = [
    { label: "Students supported", value: "5,000+", color: "text-[#2c798e]" },
    { label: "Fee cases covered", value: "2,100", color: "text-[#2c798e]" },
    { label: "Food kits delivered", value: "12,000", color: "text-[#2c798e]" },
    { label: "Medical support cases", value: "1,200", color: "text-[#2c798e]" },
    { label: "Higher education placements", value: "320", color: "text-[#2c798e]" },
  ];

  const stories = [
    {
      title: "Education continuity for a deserving student",
      situation:
        "Household instability put a promising student at risk of dropout.",
      support: "Tuition and transport support through the Education Continuity Fund.",
      outcome: "Student remained enrolled and progressed to the next grade.",
      next: "Monitoring attendance and tutoring support through volunteers.",
    },
    {
      title: "Emergency medical help during hardship",
      situation:
        "Family delayed diagnostics due to cost, risking worsening health.",
      support: "Diagnostics and medicines covered through the Medical Support Fund.",
      outcome: "Treatment started on time and recovery milestones tracked.",
      next: "Follow-up check scheduled; family connected to relief kit support.",
    },
  ];

  return (
    <section id="impact" className="bg-gray-50 py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Impact"
          title="Impact snapshot and stories"
          description="Verified numbers and field stories guide where support is needed most. Placeholder values shown until live data is connected."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border-2 border-gray-200 rounded-2xl p-4 text-center shadow-sm"
            >
              <p className={`${stat.color} text-2xl font-bold`}>{stat.value}</p>
              <p className="text-gray-700 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {stories.map((story) => (
            <div
              key={story.title}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {story.title}
              </h3>
              <dl className="space-y-3 text-gray-800">
                <div>
                  <dt className="font-semibold">Situation</dt>
                  <dd>{story.situation}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Support provided</dt>
                  <dd>{story.support}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Outcome</dt>
                  <dd>{story.outcome}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Next steps</dt>
                  <dd>{story.next}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center text-gray-700">
          <p className="font-semibold text-gray-900 mb-2">Story template</p>
          <p>
            Situation → Support provided → Outcome → Next steps. Use this
            template when publishing new impact stories with photos and evidence.
          </p>
        </div>
      </div>
    </section>
  );
};

const UpdatesSection = () => {
  const updates = [
    {
      title: "Food kit distribution field update",
      category: "Healthcare/Relief",
      summary:
        "Winter kits distributed to vulnerable households with transparent kit lists.",
      link: "#news",
    },
    {
      title: "Education sponsorship milestones",
      category: "Education",
      summary:
        "New sponsor tiers opened to keep students enrolled through the academic year.",
      link: "#programs",
    },
    {
      title: "Public health awareness on food adulteration",
      category: "Community Protection",
      summary:
        "Community sessions on spotting fake honey/butter/sweets and protecting families.",
      link: "#community-protection",
    },
  ];

  return (
    <section id="news" className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="News & Stories"
          title="Latest updates"
          description="Recent highlights from education, healthcare, community protection, and field updates."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {updates.map((update) => (
            <article
              key={update.title}
              className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col"
            >
              <span className="inline-flex w-fit px-3 py-1 text-xs font-semibold bg-[#d3e8ed] text-[#1f3249] rounded-full mb-3">
                {update.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {update.title}
              </h3>
              <p className="text-gray-700 flex-1">{update.summary}</p>
              <a
                href={update.link}
                className="mt-4 inline-flex items-center gap-2 text-[#2c798e] font-semibold hover:text-[#255f71]"
              >
                Read more
                <FaArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const TransparencySection = () => {
  const columns = [
    {
      title: "Governance",
      items: [
        "Board/Trustees list with names and roles",
        "Advisory group (optional)",
      ],
    },
    {
      title: "Policies",
      items: [
        "Beneficiary verification policy",
        "Child protection and safeguarding",
        "Anti-fraud, ethics, and donation use policies",
      ],
    },
    {
      title: "Financials",
      items: [
        "Annual reports and audit reports (PDF uploads)",
        "Donation allocation chart (program vs admin)",
        "Legacy statement: MercyBeacon builds on Shams-ul-Huda Educational & Research Trust service since 1988.",
      ],
    },
  ];

  return (
    <section
      id="transparency"
      className="bg-gray-50 py-16 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Transparency"
          title="Governance, policies, and financials"
          description="Credibility is built on clarity. Publish governance, safeguarding, and financial documents to keep donors informed."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((column) => (
            <div
              key={column.title}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaChartPie className="text-[#2c798e]" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {column.title}
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GetInvolvedSection = () => {
  const actions = [
    {
      title: "Donate",
      description:
        "One-time or monthly giving with transparent ‘what your donation does’ cards.",
      href: "#donate",
    },
    {
      title: "Volunteer",
      description:
        "Support education, medical camps, field logistics, or documentation efforts.",
      href: "#support",
    },
    {
      title: "Partner With Us",
      description:
        "CSR partnerships, educational institutions, healthcare partners, and community organizations.",
      href: "#get-involved",
    },
    {
      title: "Fundraise",
      description:
        "Create your own campaign or occasion-based fundraising to extend MercyBeacon’s reach.",
      href: "#donate",
    },
  ];

  return (
    <section
      id="get-involved"
      className="bg-white py-16 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get Involved"
          title="Ways you can help"
          description="Donate, volunteer, partner, or fundraise—every action lights another home with dignity and care."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => (
            <div
              key={action.title}
              className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {action.title}
              </h3>
              <p className="text-gray-700 flex-1">{action.description}</p>
              <a
                href={action.href}
                className="mt-3 inline-flex items-center gap-2 text-[#2c798e] font-semibold hover:text-[#255f71]"
              >
                Take action
                <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeSections = () => (
  <>
    <LegacyStrip />
    <SpotlightSection />
    <WhatWeDoSection />
    <ProgramsSection />
    <ImpactSection />
    <UpdatesSection />
    <TransparencySection />
    <GetInvolvedSection />
  </>
);

export default HomeSections;
