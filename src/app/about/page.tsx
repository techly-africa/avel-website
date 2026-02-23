import React from "react";
import { ShieldCheck, Target, Zap, Heart, ArrowRight, BrainCircuit, DatabaseZap, Lock } from "lucide-react";
import Link from "next/link";

const principles = [
    {
        title: "Clarity Over Complexity",
        description: "We believe that complexity is the enemy of security and compliance. We strive for transparency in every architectural choice.",
        icon: Target,
    },
    {
        title: "Truth in Data",
        description: "Reconciliation and ledger integrity are not optional. We build systems where truth is verifiable and immutable.",
        icon: ShieldCheck,
    },
    {
        title: "Compliance-by-Design",
        description: "Governance shouldn't be a separate layer—it should be built into the code, from IAM to audit logging.",
        icon: Zap,
    },
    {
        title: "Measurable Outcomes",
        description: "We don't just deliver 'features'; we deliver stability, risk reduction, and operational resilience.",
        icon: Heart,
    },
];

const team = [
    { role: "Leadership & Strategy", bio: "Former institutional leads with deep roots in regional fintech and public sector digital transformation." },
    { role: "Engineering Excellence", bio: "Senior architects and developers specialized in multi-tenant cloud-native systems and secure integrations." },
    { role: "GRC & Risk Leads", bio: "Compliance experts focused on mapping international standards (ISO/NIST) to local regulatory needs." },
    { role: "Product & Design", bio: "Human-centric designers and product managers who specialize in high-spec system definitions." },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="pt-32 pb-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-midnight tracking-tight mb-8 leading-[1.1]">
                            Africa-first, <br /> <span className="text-electric-blue">Global-standard.</span>
                        </h1>
                        <p className="text-xl text-midnight/60 leading-relaxed mb-0">
                            AVEL Africa was founded on a simple premise: that regulated and high-trust organizations deserve technology delivery that is as rigorous as their mandates.
                        </p>
                    </div>
                    <div className="bg-neutral-bg aspect-square rounded-[4rem] border border-gray-100 p-12 flex items-center justify-center relative">
                        <div className="w-48 h-48 bg-electric-blue rounded-[3rem] shadow-2xl shadow-electric-blue/20 flex items-center justify-center">
                            <span className="text-white font-black text-9xl">A</span>
                        </div>
                        {/* Accents */}
                        <div className="absolute top-10 right-10 w-24 h-24 bg-soft-teal/20 rounded-full blur-2xl" />
                        <div className="absolute bottom-20 left-10 w-32 h-32 bg-midnight/5 rounded-full blur-xl" />
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-6">Our Story</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-midnight mb-10 tracking-tight">Bridging the gap between <br /> vision and verifiable reality.</h3>
                    <div className="space-y-6 text-lg text-midnight/70 leading-relaxed text-left">
                        <p>
                            In many emerging markets, digital transformation is often hindered by a 'delivery drift'—where the end product fails to satisfy the security, compliance, or operational needs of institutional stakeholders.
                        </p>
                        <p>
                            AVEL was built to solve this. We bring deep engineering expertise combined with a rigorous understanding of the GRC (Governance, Risk, and Compliance) frameworks that govern our clients' industries.
                        </p>
                        <p>
                            Based in Kigali, Rwanda, we work across the continent to help Fintechs, Banks, Telcos, and Public Sector entities ship products that are secure by design and compliant by default.
                        </p>
                    </div>
                </div>
            </section>

            {/* CEO Message */}
            <section className="py-24 px-6 bg-midnight relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/5">
                            <img
                                src="/ceo.png"
                                alt="Copain Bienaime - CEO, AVEL Africa"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-electric-blue/10 backdrop-blur-3xl rounded-3xl border border-white/10 p-8 flex flex-col justify-end hidden md:flex">
                            <p className="text-white font-bold text-sm">Copain Bienaime</p>
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">Founder & CEO</p>
                        </div>
                    </div>
                    <div className="relative">
                        <span className="text-soft-teal font-black text-6xl md:text-8xl absolute -top-12 -left-8 md:-left-12 opacity-20 pointer-events-none">"</span>
                        <div className="relative z-10">
                            <h2 className="text-sm font-bold text-soft-teal uppercase tracking-widest mb-8">Leadership Voice</h2>
                            <blockquote className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-12">
                                "The African digital economy is no longer an emerging narrative—it is the frontier of global institutional innovation. Technology without trust is a liability. At AVEL, we transform technical debt into digital assets for the continent's most ambitious institutions."
                            </blockquote>
                            <div className="flex items-center space-x-4">
                                <div className="h-px w-12 bg-white/20" />
                                <cite className="text-white/60 not-italic font-medium">
                                    Engineering Trust, Delivering Scale.
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">Our Principles</h2>
                        <h3 className="text-4xl font-bold text-midnight tracking-tight font-sans">The core of our delivery.</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {principles.map((p) => (
                            <div key={p.title} className="p-8 rounded-[2.5rem] bg-neutral-bg border border-gray-100 group hover:shadow-xl transition-all h-full">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-midnight mb-6 group-hover:bg-electric-blue group-hover:text-white transition-colors shadow-sm">
                                    <p.icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-midnight mb-4 tracking-tight">{p.title}</h4>
                                <p className="text-sm text-midnight/60 leading-relaxed">
                                    {p.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Structure */}
            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                        <div className="lg:sticky lg:top-32">
                            <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">Our Team</h2>
                            <h3 className="text-4xl font-bold text-midnight mb-8 tracking-tight leading-tight">Expertise that <br /> understands your domain.</h3>
                            <p className="text-lg text-midnight/60 mb-0">
                                We are a distributed team of engineers, designers, and risk professionals dedicated to the African digital ecosystem.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {team.map((t) => (
                                <div key={t.role} className="p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm flex flex-col h-full">
                                    <h4 className="text-xl font-bold text-midnight mb-6 pb-6 border-b border-gray-100">{t.role}</h4>
                                    <p className="text-midnight/60 text-sm leading-relaxed italic flex-grow">
                                        "{t.bio}"
                                    </p>
                                    <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-midnight/30">
                                        AVEL Specialist Team
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Emerging Technical Interests */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center lg:text-left">
                        <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">The Horizon</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-midnight tracking-tight max-w-2xl">Emerging technologies <br /> geared for trust.</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* AI Section */}
                        <div className="group p-12 rounded-[3.5rem] bg-neutral-bg border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-electric-blue/10 group-hover:text-electric-blue/20 transition-colors">
                                <BrainCircuit size={160} strokeWidth={1} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-electric-blue mb-8 shadow-sm">
                                    <BrainCircuit size={28} />
                                </div>
                                <h4 className="text-3xl font-bold text-midnight mb-6">AI for Predictive GRC</h4>
                                <p className="text-lg text-midnight/60 leading-relaxed mb-8 max-w-md">
                                    We are actively integrating AI not as a novelty, but as an engine for automated control mapping and predictive risk modeling. Our focus is on making GRC proactive—detecting drift before it becomes a failure.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Automated Control Mapping", "Predictive Risk Scoring", "NLP for Policy Audit"].map(tag => (
                                        <span key={tag} className="px-4 py-2 bg-white rounded-full text-xs font-bold text-midnight/40 border border-gray-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Blockchain Section */}
                        <div className="group p-12 rounded-[3.5rem] bg-midnight text-white hover:shadow-2xl transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors">
                                <DatabaseZap size={160} strokeWidth={1} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-soft-teal mb-8 border border-white/10">
                                    <DatabaseZap size={28} />
                                </div>
                                <h4 className="text-3xl font-bold text-white mb-6">Blockchain for Ledger Integrity</h4>
                                <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-md">
                                    In high-trust ecosystems, the ledger is the source of truth. We specialize in leveraging Distributed Ledger Technology (DLT) to build immutable audit trails and multi-party reconciliation systems.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Immutable Transaction Logs", "Cross-party Reconciliation", "Smart Contract Audits"].map(tag => (
                                        <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold text-white/40 border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto bg-midnight rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Work with us.</h2>
                        <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
                            Ready to partner with a team that values clarity and delivery excellence? Let's discuss your next milestone.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:sm:space-y-0 sm:space-x-4">
                            <Link href="/contact" className="bg-white text-midnight px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center group">
                                Contact the Team
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
