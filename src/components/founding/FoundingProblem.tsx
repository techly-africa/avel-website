import React from "react";

const convictions = [
  {
    label: "01",
    title: "Structural Gaps",
    text: "African businesses operate without reliable financial infrastructure built for their context — fragmented payment rails, no portable identity, and no intelligence layer that understands how they actually operate."
  },
  {
    label: "02",
    title: "Misaligned Tools",
    text: "The tools that exist were built for other markets and adapted poorly — or they were built for compliance buyers, not for the businesses themselves."
  },
  {
    label: "03",
    title: "Window of Opportunity",
    text: "The ecosystem is maturing fast. Digital adoption, regulatory clarity, and national payment infrastructure are creating the conditions for a real solution — but nobody has built the intelligence and identity layer on top of it yet."
  }
];

export default function FoundingProblem() {
  return (
    <section className="bg-white py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Header Column */}
          <div className="lg:col-span-5">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-orange mb-12 block">
              The Thesis
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight">
              The gap is real. <br />
              The timing is right.
            </h3>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-24">
            {convictions.map((item) => (
              <div key={item.label} className="group relative">
                <span className="absolute -left-12 top-0 text-[10px] font-mono font-bold text-charcoal/20 group-hover:text-orange transition-colors">
                  {item.label}
                </span>
                <h4 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-widest">
                  {item.title}
                </h4>
                <p className="text-lg md:text-xl text-charcoal/60 leading-relaxed max-w-2xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
