import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "AVEL's clarity-first approach transformed our delivery pipeline. For the first time, we have 100% traceability from requirement to audit log.",
        role: "CTO, Fintech Organization",
    },
    {
        quote: "The GRC as a Service model allowed us to launch in a new market with confidence that our compliance controls were mapped correctly to local laws.",
        role: "Head of Compliance, Regional Bank",
    },
    {
        quote: "Engineering excellence combined with deep regulatory understanding. AVEL is the partner you call when failure is not an option.",
        role: "Program Director, Public Sector Digitalization",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">Testimonials</h2>
                    <h3 className="text-4xl font-bold text-midnight tracking-tight">Trusted by institutional leaders.</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="p-10 rounded-[2.5rem] bg-neutral-bg border border-gray-100 relative group hover:bg-white hover:shadow-2xl transition-all">
                            <Quote className="text-electric-blue/20 absolute top-8 right-8" size={48} />
                            <p className="text-lg text-midnight/70 leading-relaxed mb-8 relative z-10 italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="pt-8 border-t border-gray-200">
                                <p className="text-sm font-bold text-midnight group-hover:text-electric-blue transition-colors tracking-tight">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
