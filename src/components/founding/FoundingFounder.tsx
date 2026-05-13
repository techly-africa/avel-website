import React from "react";

export default function FoundingFounder() {
  return (
    <section className="bg-off-white py-60 px-6 relative overflow-hidden">
      {/* Large Decorative A Mark */}
      <div className="absolute -bottom-40 -left-40 text-[40rem] font-bold text-charcoal/[0.02] select-none pointer-events-none">
        A
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-charcoal/30 mb-16 block text-center">
          The Origin
        </h2>
        
        <div className="relative">
          <span className="absolute -left-12 -top-12 text-8xl font-serif text-orange/10 select-none">
            &ldquo;
          </span>
          <p className="text-3xl md:text-5xl font-medium text-charcoal leading-[1.2] tracking-tight mb-20 italic">
            AVEL Africa exists because we got tired of working around a problem that should be solved at the foundation. Built from years of working across African fintech, mobility, and enterprise systems — and hitting the same infrastructure wall every time.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40">
            <span>Kigali, Rwanda</span>
            <span className="w-1 h-1 rounded-full bg-orange" />
            <span>Founded 2024</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-charcoal/20">
            Infrastructure for Reality
          </div>
        </div>
      </div>
    </section>
  );
}
