import React from "react";
import Link from "next/link";

const audiences = [
  {
    title: "Developers & Builders",
    description: "If you are building financial products in Africa and you are tired of reinventing the same integrations on every project — we are building this for you. Join the waitlist and be first in line.",
    linkText: "Join the waitlist",
    href: "#waitlist"
  },
  {
    title: "African Businesses",
    description: "If you are running a business in Africa and the tools you need either don't exist or weren't built for your reality — we see the gap. We are building toward you.",
    linkText: "Follow our progress",
    href: "#waitlist"
  },
  {
    title: "Investors & Partners",
    description: "If you believe African businesses deserve infrastructure built for their reality — and you want to back the team building it from the ground up in Kigali — we want to talk.",
    linkText: "Get in touch",
    href: "#contact"
  }
];

export default function FoundingAudience() {
  return (
    <section className="bg-charcoal py-40 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {audiences.map((audience) => (
            <div key={audience.title} className="bg-charcoal p-12 flex flex-col group">
              <h3 className="text-xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-orange transition-colors" />
                {audience.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-12 flex-1 font-medium">
                {audience.description}
              </p>
              <Link
                href={audience.href}
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-orange hover:text-white transition-all"
              >
                {audience.linkText}
                <div className="w-8 h-px bg-orange group-hover:w-12 transition-all" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
