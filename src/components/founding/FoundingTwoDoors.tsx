"use client";

import React from "react";

export default function FoundingTwoDoors() {
  return (
    <section id="waitlist" className="flex flex-col lg:flex-row min-h-[700px] bg-charcoal border-t border-white/5">
      {/* Left Door - Builders */}
      <div className="flex-1 p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 group">
        <div className="max-w-md">
          <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-white/30 mb-12 block">
            01 / Build
          </h2>
          <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">
            Be first to build on AVEL
          </h3>
          <p className="text-white/40 text-lg mb-16">
            Join the waitlist. We will reach out when we are ready for early integrators.
          </p>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white placeholder:text-white/10 focus:outline-none focus:border-orange transition-all font-mono text-xs tracking-widest"
              />
            </div>
            <button className="w-full py-6 bg-white text-charcoal rounded-none font-bold uppercase tracking-widest text-xs hover:bg-orange hover:text-white transition-all duration-500">
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* Right Door - Investors */}
      <div id="contact" className="flex-1 bg-orange/5 p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-md relative z-10">
          <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-orange mb-12 block">
            02 / Back
          </h2>
          <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">
            Back the team
          </h3>
          <p className="text-white/40 text-lg mb-16">
            We are in early conversations with aligned investors who believe in building from Africa.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="FULL NAME"
              className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white placeholder:text-white/10 focus:outline-none focus:border-orange transition-all font-mono text-xs tracking-widest"
            />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white placeholder:text-white/10 focus:outline-none focus:border-orange transition-all font-mono text-xs tracking-widest"
            />
            <textarea
              placeholder="BRIEF MESSAGE"
              rows={2}
              className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white placeholder:text-white/10 focus:outline-none focus:border-orange transition-all font-mono text-xs tracking-widest resize-none"
            />
            <button className="w-full py-6 bg-orange text-white rounded-none font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-charcoal transition-all duration-500">
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
