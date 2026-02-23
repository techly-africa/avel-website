import React from "react";
import { Search, Map, Cpu, Zap } from "lucide-react";

const steps = [
    {
        title: "Diagnose",
        description: "2-3 week engagement to identify technology risk, legacy debt, and architectural gaps.",
        icon: Search,
    },
    {
        title: "Design",
        description: "Definition of high-spec PRDs, API schemas, and compliance-mapped architecture.",
        icon: Map,
    },
    {
        title: "Deliver",
        description: "Full-cycle engineering delivery with continuous validation and deployment pipelines.",
        icon: Cpu,
    },
    {
        title: "Operate & Improve",
        description: "Ongoing support, monitoring, and scaling of systems for long-term resilience.",
        icon: Zap,
    },
];

export default function HowWeEngage() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">Engagement Model</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-midnight tracking-tight mb-6">A clear path to excellence.</h3>
                    <p className="text-midnight/60 text-lg max-w-2xl mx-auto">
                        Our structured approach ensures every organization we work with achieves their digital transformation goals without the typical implementation risks.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gray-100 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.title} className="text-center flex flex-col items-center group">
                                <div className="w-20 h-20 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-electric-blue group-hover:text-midnight group-hover:border-electric-blue transition-all group-hover:shadow-xl group-hover:translate-y-[-4px]">
                                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-xs font-bold text-midnight/40 border border-gray-100 group-hover:bg-white group-hover:text-electric-blue">
                                        0{index + 1}
                                    </span>
                                    <step.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-midnight mb-4">{step.title}</h4>
                                <p className="text-midnight/60 text-sm leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
