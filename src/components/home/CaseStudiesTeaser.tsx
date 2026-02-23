import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cases = [
    {
        title: "National Mobility Payments",
        subtitle: "Mobility",
        summary: "Reconciliation and operational governance for a nationwide multimodal transit system.",
        outcome: "Eliminated processing drift for 1M+ daily transactions.",
    },
    {
        title: "Merchant Lending Ecosystem",
        subtitle: "Fintech",
        summary: "Implementation of credit scorecards and automated compliance controls for SME lending.",
        outcome: "99.9% audit accuracy across the lending lifecycle.",
    },
    {
        title: "Multi-tenant Commerce Platform",
        subtitle: "Public Sector",
        summary: "Identity and access management (IAM) with full auditability for inter-agency commerce.",
        outcome: "Mapped 200+ control points to legal frameworks.",
    },
];

export default function CaseStudiesTeaser() {
    return (
        <section className="py-24 px-6 bg-neutral-bg">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">Case Studies</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-midnight tracking-tight"> Proven delivery in the <br /> real world.</h3>
                    </div>
                    <Link href="/case-studies" className="group flex items-center text-sm font-bold text-midnight/40 hover:text-midnight transition-colors">
                        Read all stories
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item) => (
                        <div key={item.title} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col">
                            <span className="text-xs font-bold text-electric-blue uppercase tracking-widest mb-4 inline-block">{item.subtitle}</span>
                            <h4 className="text-2xl font-bold text-midnight mb-4 tracking-tight leading-tight">{item.title}</h4>
                            <p className="text-midnight/60 text-sm leading-relaxed mb-8 flex-grow italic">
                                "{item.summary}"
                            </p>
                            <div className="pt-8 border-t border-gray-50">
                                <p className="text-xs font-bold text-midnight/40 uppercase tracking-widest mb-2">Outcome</p>
                                <p className="text-sm font-bold text-midnight">{item.outcome}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
