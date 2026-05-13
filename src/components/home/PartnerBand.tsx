"use client";

import React from "react";

const partners = [
  "MTN MoMo",
  "Airtel Money",
  "IremboPay",
  "Africa's Talking",
  "RDB Rwanda",
  "Ecobank",
  "BK Rwanda"
];

export default function PartnerBand() {
  return (
    <section className="py-20 bg-white border-b border-charcoal/5 overflow-hidden">
      <div className="fluid-container">
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-charcoal/30 mb-12">
            The Ecosystem We&apos;re Bridging
          </span>
          <div className="w-full flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-lg font-bold text-charcoal/20 grayscale hover:grayscale-0 transition-all cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
