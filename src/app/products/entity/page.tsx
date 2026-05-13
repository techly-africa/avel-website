"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Fingerprint, ShieldCheck, Globe, Link2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function EntityPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero */}
      <section className="fluid-y-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-entity/5 blur-[120px] rounded-full -mr-20 -mt-20" />
        
        <div className="fluid-container relative z-10">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-entity mb-6 block">
              AVEL Entity
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              Your business identity. <br />
              Sovereign. Verifiable. <br />
              <span className="text-entity">Portable.</span>
            </h1>
            <p className="text-xl text-charcoal/60 mb-12 leading-relaxed">
              Blockchain-anchored verification ensures every credential is tamper-proof, consent-gated, and owned by the business — not by any institution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-entity transition-all"
            >
              Join the Waiting List
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* The Surface - Business Profile Card */}
      <section className="pb-32 bg-white">
        <div className="fluid-container">
          <div className="max-w-xl mx-auto relative p-12 bg-off-white rounded-[2rem] border-2 border-charcoal/5 shadow-xl">
            <div className="flex items-start justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-charcoal flex items-center justify-center text-white">
                  <Fingerprint size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AVEL Africa Ltd</h3>
                  <p className="text-charcoal/40 text-sm font-bold uppercase tracking-widest">Verified Infrastructure Provider</p>
                </div>
              </div>
              <div className="px-3 py-1 rounded bg-entity/10 text-entity text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 relative">
                <CheckCircle2 size={12} />
                On-Chain Verified
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-charcoal text-white text-[6px] font-bold uppercase tracking-widest whitespace-nowrap">Concept</div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-6 bg-white rounded-2xl border border-charcoal/5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mb-4">Legal Identity</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Registration No. 112191029</span>
                  <Link2 size={16} className="text-charcoal/20" />
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-charcoal/5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mb-4">Financial Score</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-entity font-bold">AAA (Verified Flow)</span>
                  <span className="text-xs text-charcoal/30">Last Updated: 2h ago</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-charcoal/5 flex justify-center">
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-charcoal/30">
                Secured by Ethereum Attestation Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="fluid-y-padding bg-charcoal text-white overflow-hidden">
        <div className="fluid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-10">Own your reputation. <br />Don&apos;t rent it.</h2>
              <div className="space-y-10">
                {[
                  { icon: Globe, title: "Universal Portability", desc: "Use your verified profile to unlock credit from banks or trade globally without re-verifying." },
                  { icon: ShieldCheck, title: "Privacy First", desc: "You control who sees your data. Share only what&apos;s necessary with selective disclosure." },
                  { icon: Link2, title: "On-Chain Verifiable", desc: "Zero-knowledge proofs ensure your data is real without revealing the raw sensitive details." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-entity">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-entity/10 blur-[100px] rounded-full" />
              <div className="relative p-10 bg-white/5 rounded-3xl border border-white/10 h-full flex flex-col justify-center">
                <span className="text-xs font-bold text-entity uppercase tracking-widest mb-6">The Thesis</span>
                <blockquote className="text-2xl font-medium leading-relaxed italic text-white/80">
                  &quot;AVEL Entity allowed us to prove our trade history to a lender in Singapore in under 3 minutes. We secured the funding we needed without a single physical document.&quot;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-entity/20" />
                  <div>
                    <p className="font-bold">Evariste Bagula</p>
                    <p className="text-xs text-white/30 uppercase tracking-widest">CEO, AgriTech East Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Signal */}
      <section className="fluid-y-padding bg-off-white">
        <div className="fluid-container text-center">
          <h2 className="text-3xl font-bold mb-8">Identity as Infrastructure</h2>
          <p className="text-charcoal/50 text-lg max-w-2xl mx-auto mb-12">
            We believe trust should be accessible. AVEL Entity uses a subscription model designed for businesses of all sizes.
          </p>
          <div className="max-w-sm mx-auto p-10 bg-white rounded-3xl border-2 border-charcoal/5">
            <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-4 block">Target Tier: Identity Basic</span>
            <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-charcoal/30">/mo</span></div>
            <p className="text-sm text-charcoal/50 mb-8">Verification for up to 5 institutional partners. Unlimited self-sovereign credentials.</p>
            <button className="w-full py-4 bg-charcoal text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-entity transition-all">
              Claim Your Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
