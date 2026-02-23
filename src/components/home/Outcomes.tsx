import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Activity } from "lucide-react";

const outcomes = [
    {
        title: "Reduced Rework",
        metric: "40% reduction",
        description: "Architecture-grade specifications ensure builds match requirements the first time, saving months of expensive drift.",
        icon: Activity,
    },
    {
        title: "Audit Readiness",
        metric: "Continuous",
        description: "Compliance controls are mapped early, providing evidence logs that make audits a non-event for regulators.",
        icon: ShieldCheck,
    },
    {
        title: "Operational Clarity",
        metric: "100% visibility",
        description: "Monitoring, reconciliation, and SLA tracking built for teams that manage critical national-scale infrastructure.",
        icon: TrendingUp,
    },
];

export default function Outcomes() {
    return (
        <section className="py-24 bg-midnight text-white px-6 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-soft-teal uppercase tracking-widest mb-4 font-mono">Measurable Impact</h2>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Built for outcomes that matter.</h3>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        We don't just deliver software. We deliver stability, compliance, and predictable operations for high-stakes environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {outcomes.map((outcome) => (
                        <div key={outcome.title} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-soft-teal group-hover:text-midnight transition-colors">
                                <outcome.icon size={24} />
                            </div>
                            <div className="text-soft-teal font-black text-2xl mb-4 tracking-tighter">
                                {outcome.metric}
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{outcome.title}</h4>
                            <p className="text-white/50 leading-relaxed italic">
                                "{outcome.description}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
