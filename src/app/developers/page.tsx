"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, BookOpen, Code2, Layers, Cpu, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export default function DevelopersPage() {
  const codeSnippet = `
// AVEL Flow: Normalized Payment Event
const response = await avel.flow.collect({
  amount: 5000,
  currency: "RWF",
  phone: "+250780000000",
  rail: "auto", // Automatically detects MTN/Airtel
  metadata: {
    order_id: "77a1-bc01",
    customer_id: "user_49"
  }
});

console.log(response.status); // "verified_on_chain"
  `;

  return (
    <div className="flex flex-col min-h-screen bg-charcoal text-white pt-20">
      {/* Hero */}
      <section className="fluid-y-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1),transparent_50%)]" />
        
        <div className="fluid-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange mb-6 block">
              Developer Portal
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
              Build on Africa&apos;s <br />
              New Foundation.
            </h1>
            <p className="text-xl text-white/50 mb-12 leading-relaxed">
              AVEL provides the APIs and SDKs to handle the complexity of the continent&apos;s fragmented payment and identity landscape. One integration, endless reach.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/developers/docs"
                className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-orange/90 transition-all"
              >
                Read the Docs
                <BookOpen size={18} />
              </Link>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                Request Early Access
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative p-1 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-[#0D0D0E] rounded-xl p-8 overflow-hidden">
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <span className="ml-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">avel-sdk-js</span>
              </div>
              <pre className="font-mono text-sm text-orange/80 overflow-x-auto">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start / Sections */}
      <section className="fluid-y-padding bg-black/20 border-t border-white/5">
        <div className="fluid-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Terminal, title: "Quick Start", desc: "Get up and running with our CLI and starter kits in under 5 minutes." },
              { icon: Code2, title: "API Reference", desc: "Full REST and GraphQL API documentation with real-time playgrounds." },
              { icon: Layers, title: "SDKs & Libs", desc: "Native support for Node.js, Python, Go, and Flutter. Built for high concurrency." }
            ].map((section, i) => (
              <div key={i} className="group p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-8 group-hover:bg-orange group-hover:text-white transition-all">
                  <section.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-8">{section.desc}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange">
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rail Status */}
      <section className="fluid-y-padding">
        <div className="fluid-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Integration Roadmap</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "MTN MoMo (RW)", status: "Architecture", color: "text-orange/50" },
              { name: "Airtel Money (RW)", status: "Architecture", color: "text-orange/50" },
              { name: "Irembo Gateway", status: "Planning", color: "text-white/20" },
              { name: "MPESA (KE)", status: "Roadmap", color: "text-white/10" },
              { name: "BK Bank Rails", status: "Architecture", color: "text-orange/50" },
              { name: "Sovereign ID", status: "Prototype", color: "text-blue-500" },
              { name: "USSD Fallback", status: "Development", color: "text-orange" },
              { name: "Pan-African Core", status: "Vision", color: "text-purple-500" }
            ].map((rail) => (
              <div key={rail.name} className="flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-2xl">
                <span className="text-sm font-bold text-white/80">{rail.name}</span>
                <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${rail.color}`}>
                  <Clock size={12} />
                  {rail.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="fluid-container text-center">
          <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center text-orange mx-auto mb-8">
            <Cpu size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-8">Ready to integrate?</h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-12">
            Join the thousand+ developers already building on AVEL. Our sandbox is free forever for testing.
          </p>
          <button className="px-12 py-5 bg-orange text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all active:scale-95">
            Create Sandbox Account
          </button>
        </div>
      </section>
    </div>
  );
}
