import React from "react";
import AvelLogo from "@/components/ui/AvelLogo";

export default function FoundingFooter() {
  return (
    <footer className="bg-charcoal py-32 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 right-24 w-px h-full bg-white/[0.02]" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-20">
        <div className="flex flex-col gap-8">
          <AvelLogo size={48} light />
          <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.5em] leading-relaxed max-w-[200px]">
            Building the Foundation <br />
            for African Reality.
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
          <div className="flex flex-col gap-4">
            <span className="text-white/40">Headquarters</span>
            <span className="text-white/10">Kigali, Rwanda</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white/40">Established</span>
            <span className="text-white/10">2024</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white/40">Legal</span>
            <a href="#" className="hover:text-orange transition-colors">&copy; AVEL Africa Ltd</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
