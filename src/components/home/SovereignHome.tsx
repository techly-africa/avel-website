"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Server,
  Mail,
  FileText,
  Fingerprint,
  Database,
  Coins,
  Shield,
  Menu,
  X,
  Check,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CURRENT_YEAR = 2026;

export default function SovereignHome() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["pillars", "why-sovereign", "about", "contact"];
      let currentSection = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormStatus("submitting");

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setFormStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  };

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent/20 selection:text-accent font-sans">

      {/* Grid Overlay Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* HEADER */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border-subtle py-4"
          : "bg-transparent py-6"
      }`}>
        <div className="fluid-container flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative h-12 w-[125px] cursor-pointer hover:opacity-95 transition-opacity"
            aria-label="AVEL Home"
          >
            <Image
              src="/avel-new.png"
              alt="AVEL Africa"
              fill
              className="object-contain"
              priority
              sizes="125px"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollTo("pillars")}
              className={`text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                activeSection === "pillars" ? "text-accent" : "text-text-muted hover:text-white"
              }`}
            >
              Pillars
            </button>
            <button
              onClick={() => scrollTo("why-sovereign")}
              className={`text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                activeSection === "why-sovereign" ? "text-accent" : "text-text-muted hover:text-white"
              }`}
            >
              Why Sovereign
            </button>
            <button
              onClick={() => scrollTo("about")}
              className={`text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                activeSection === "about" ? "text-accent" : "text-text-muted hover:text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className={`text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                activeSection === "contact" ? "text-accent" : "text-text-muted hover:text-white"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/250799903601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-sm font-semibold tracking-wide bg-accent text-background hover:bg-accent/90 transition-all px-5 py-2 rounded-lg cursor-pointer hover:scale-[1.01]"
            >
              Talk to us
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent transition-colors p-1"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] bottom-0 z-40 bg-background border-t border-border-subtle p-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col space-y-6 mt-6">
              <button
                onClick={() => scrollTo("pillars")}
                className="text-left text-lg font-medium text-text-muted hover:text-white transition-colors py-2 border-b border-border-subtle"
              >
                Pillars
              </button>
              <button
                onClick={() => scrollTo("why-sovereign")}
                className="text-left text-lg font-medium text-text-muted hover:text-white transition-colors py-2 border-b border-border-subtle"
              >
                Why Sovereign
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="text-left text-lg font-medium text-text-muted hover:text-white transition-colors py-2 border-b border-border-subtle"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-left text-lg font-medium text-text-muted hover:text-white transition-colors py-2 border-b border-border-subtle"
              >
                Contact
              </button>
            </div>

            <div className="mt-auto mb-12 flex flex-col space-y-4">
              <a
                href="https://wa.me/250799903601"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center text-center text-base font-semibold bg-accent text-background hover:bg-accent/90 transition-all py-3.5 rounded-lg"
              >
                Talk to us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
        {/* Soft Radial Glow behind SVG network */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mid-navy/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Quiet Abstract SVG Network */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[500px] lg:max-w-[650px] aspect-square opacity-20 lg:opacity-35 pointer-events-none px-6 select-none">
          <svg viewBox="0 0 500 500" className="w-full h-full text-text-muted">
            <defs>
              <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d="M 120,150 L 220,100 L 320,150 L 350,280 L 250,380 L 150,320 Z" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
            <path d="M 220,100 L 250,220 L 350,280" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <path d="M 120,150 L 250,220 L 150,320" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <path d="M 250,220 L 250,380" fill="none" stroke="currentColor" strokeWidth="0.8" />

            <line x1="220" y1="100" x2="320" y2="150" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" values="100;0" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="120" y1="150" x2="250" y2="220" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" values="100;0" dur="5s" repeatCount="indefinite" />
            </line>
            <line x1="250" y1="220" x2="250" y2="380" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" values="100;0" dur="6s" repeatCount="indefinite" />
            </line>

            <circle cx="220" cy="100" r="4" fill="var(--color-accent)" />
            <circle cx="220" cy="100" r="12" fill="url(#node-glow)" />
            <circle cx="120" cy="150" r="4" fill="currentColor" />
            <circle cx="320" cy="150" r="4" fill="currentColor" />

            <circle cx="250" cy="220" r="6" fill="var(--color-accent)" />
            <circle cx="250" cy="220" r="18" fill="url(#node-glow)">
              <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite" />
            </circle>

            <circle cx="350" cy="280" r="4" fill="currentColor" />
            <circle cx="150" cy="320" r="4" fill="currentColor" />

            <circle cx="250" cy="380" r="5" fill="var(--color-accent)" />
            <circle cx="250" cy="380" r="15" fill="url(#node-glow)" />
          </svg>
        </div>

        <div className="fluid-container relative z-10 py-16 lg:py-24">
          <div className="max-w-[760px] text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 border border-border-subtle bg-surface/50 rounded-full px-3.5 py-1.5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase text-text-muted">
                Hosted in Rwanda 🇷🇼 · Built for the continent.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]"
            >
              Sovereign infrastructure for African businesses.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-muted max-w-[620px] mb-10 leading-relaxed font-light"
            >
              Compute, communication, records, and identity — owned in Africa, hosted in Africa, built for African businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
            >
              <button
                onClick={() => scrollTo("pillars")}
                className="group inline-flex items-center justify-center text-sm font-semibold tracking-wide bg-accent text-background hover:bg-accent/90 transition-all px-8 py-4 rounded-xl cursor-pointer hover:scale-[1.01]"
              >
                <span>Explore the pillars</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href="https://wa.me/250799903601"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-semibold tracking-wide border border-border-subtle bg-surface/20 text-white hover:bg-surface/50 hover:border-white/20 transition-all px-8 py-4 rounded-xl cursor-pointer"
              >
                <span>Talk to us</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE SOVEREIGNTY THESIS */}
      <section className="border-t border-border-subtle bg-background py-24 md:py-36 relative overflow-hidden">
        <div className="fluid-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-accent mb-3 block">
                01 // THESIS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Your infrastructure shouldn&apos;t live on another continent.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-lg sm:text-xl text-text-muted mb-12 leading-relaxed font-light">
                African businesses run on tools hosted abroad — their data, communication, and records sit under foreign jurisdiction and foreign pricing. AVEL is building the alternative: core digital infrastructure owned and operated in Africa, so businesses keep control of their data, pay in local currency, and meet local regulatory requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border-subtle">
                <div className="flex flex-col space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    Data residency
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Hosted in-country to satisfy sovereign needs.
                  </p>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Coins className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    Local-first
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    RWF billing, mobile money, and direct support.
                  </p>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    Compliance-ready
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Built to comply with African regulatory regimes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE FOUR PILLARS */}
      <section id="pillars" className="border-y border-border-subtle bg-surface/30 py-24 md:py-36 relative">
        <div className="fluid-container relative z-10">

          <div className="max-w-[700px] mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-accent mb-3 block">
              02 // CORE SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Four pillars of sovereign infrastructure.
            </h2>
            <p className="text-lg text-text-muted font-light leading-relaxed">
              The foundation every modern business runs on — compute, communication, records, and identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Pillar 1: AvelCloud */}
            <a
              href="https://avel.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border-subtle bg-surface p-8 md:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 flex flex-col justify-between min-h-[300px] focus:outline-none focus:ring-2 focus:ring-accent/40"
              aria-label="Open AvelCloud"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Server className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md text-accent bg-accent/10 border border-accent/20">
                    Available now
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                  AvelCloud
                </h3>
                <p className="text-xs font-medium tracking-wide uppercase text-accent mb-4">
                  Sovereign cloud hosting.
                </p>
                <p className="text-sm text-text-muted leading-relaxed max-w-[480px]">
                  Compute, deployment, and DNS for African businesses, hosted in-country. Spin up servers, deploy apps, and run your infrastructure without it ever leaving the continent.
                </p>
              </div>
            </a>

            {/* Pillar 2: AvelMail */}
            <div className="group border border-border-subtle bg-surface p-8 md:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md text-amber-400 bg-amber-400/10 border border-amber-400/20">
                    Early access
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                  AvelMail
                </h3>
                <p className="text-xs font-medium tracking-wide uppercase text-accent mb-4">
                  Business email, hosted in Africa.
                </p>
                <p className="text-sm text-text-muted leading-relaxed max-w-[480px]">
                  Professional email on your own domain — billed in Rwandan francs, paid by mobile money, supported locally. A sovereign alternative to Google Workspace and Microsoft 365 that keeps your communication in-country.
                </p>
              </div>
            </div>

            {/* Pillar 3: AvelDoc */}
            <div className="group border border-border-subtle bg-surface p-8 md:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 flex flex-col justify-between min-h-[300px] opacity-85">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md text-text-muted bg-white/5 border border-white/10">
                    Coming soon
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                  AvelDoc
                </h3>
                <p className="text-xs font-medium tracking-wide uppercase text-text-muted mb-4">
                  Document management &amp; e-archive.
                </p>
                <p className="text-sm text-text-muted leading-relaxed max-w-[480px]">
                  Securely store, organize, search, and retain your business documents and records — with OCR and compliance-grade archiving, hosted in Africa to meet local data-retention and regulatory requirements.
                </p>
              </div>
            </div>

            {/* Pillar 4: AvelID */}
            <div className="group border border-border-subtle bg-surface p-8 md:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 flex flex-col justify-between min-h-[300px] opacity-85">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted">
                    <Fingerprint className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md text-text-muted bg-white/5 border border-white/10">
                    Coming soon
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                  AvelID
                </h3>
                <p className="text-xs font-medium tracking-wide uppercase text-text-muted mb-4">
                  Business identity &amp; trust.
                </p>
                <p className="text-sm text-text-muted leading-relaxed max-w-[480px]">
                  Verifiable business credentials and digital identity for African enterprises — the trust layer for onboarding, transacting, and proving who you are across digital services.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* WHY SOVEREIGN */}
      <section id="why-sovereign" className="py-24 md:py-36 relative">
        <div className="fluid-container relative z-10">

          <div className="max-w-[700px] mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-accent mb-3 block">
              03 // ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Why sovereignty matters now.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                [01]
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Control your data
              </h3>
              <p className="text-sm text-text-muted leading-relaxed font-light">
                Your business data stays under your jurisdiction, not a foreign provider&apos;s.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                [02]
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Local economics
              </h3>
              <p className="text-sm text-text-muted leading-relaxed font-light">
                Pay in local currency via the channels you already use; no forex friction, no per-seat foreign pricing.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                [03]
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Built for here
              </h3>
              <p className="text-sm text-text-muted leading-relaxed font-light">
                Designed around African regulatory, language, and payment realities from day one.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="border-t border-border-subtle bg-surface/25 py-24 md:py-36 relative">
        <div className="fluid-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-accent mb-3 block">
                04 // IDENTITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Building it, in the open.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-lg sm:text-xl text-text-muted leading-relaxed font-light max-w-[620px]">
                AVEL is a Kigali-based company building sovereign infrastructure for the continent, pillar by pillar. Some pieces are live today; others are in active development. We&apos;d rather tell you exactly where we are than oversell.
              </p>
              <div className="mt-8 flex items-center space-x-2 text-xs font-mono tracking-wider uppercase text-text-muted">
                <span>Kigali, Rwanda</span>
                <span>·</span>
                <span className="text-accent">Sovereign Builders</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="border-t border-border-subtle bg-background py-24 md:py-36 relative">
        <div className="fluid-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent mb-3 block">
                  05 // CONTACT
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-[420px]">
                  Let&apos;s build your business on infrastructure you own.
                </h2>
              </div>

              <div className="flex flex-col space-y-6 mt-8">
                <a
                  href="https://wa.me/250799903601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-3 text-text-muted hover:text-white transition-colors text-base font-semibold border-b border-border-subtle pb-3 max-w-[280px]"
                >
                  <MessageSquare className="w-5 h-5 text-accent" />
                  <span>WhatsApp: +250 799 903 601</span>
                </a>

                <a
                  href="mailto:contact@avel.africa"
                  className="group inline-flex items-center space-x-3 text-text-muted hover:text-white transition-colors text-base font-semibold border-b border-border-subtle pb-3 max-w-[280px]"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span>contact@avel.africa</span>
                </a>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="lg:col-span-7 bg-surface border border-border-subtle p-8 md:p-10 rounded-2xl w-full">
              <form onSubmit={handleFormSubmit} className="flex flex-col space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus === "submitting"}
                    className="w-full bg-background border border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted/40 transition-all outline-none"
                    placeholder="Gerard Muhire"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus === "submitting"}
                    className="w-full bg-background border border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted/40 transition-all outline-none"
                    placeholder="gerard@company.rw"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus === "submitting"}
                    className="w-full bg-background border border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted/40 transition-all outline-none resize-none"
                    placeholder="Tell us about your hosting or email requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting" || !formState.name || !formState.email || !formState.message}
                  className="w-full inline-flex items-center justify-center text-sm font-semibold tracking-wide bg-accent text-background hover:bg-accent/90 disabled:opacity-50 disabled:hover:bg-accent transition-all py-3.5 rounded-xl cursor-pointer"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>

                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center space-x-2 text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-3 rounded-lg text-sm"
                    >
                      <Check className="w-4 h-4 flex-shrink-0" />
                      <span>Thank you. We will get back to you shortly.</span>
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center space-x-2 text-rose-400 bg-rose-400/10 border border-rose-400/20 px-4 py-3 rounded-lg text-sm"
                    >
                      <X className="w-4 h-4 flex-shrink-0" />
                      <span>Something went wrong. Please try again or email us directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border-subtle bg-surface/20 py-16">
        <div className="fluid-container flex flex-col md:flex-row md:items-center md:justify-between space-y-10 md:space-y-0">

          <div className="flex flex-col space-y-3">
            <div className="relative h-10 w-[104px]">
              <Image
                src="/avel-new.png"
                alt="AVEL Africa"
                fill
                className="object-contain"
                sizes="104px"
              />
            </div>
            <p className="text-xs text-text-muted max-w-[280px] leading-relaxed">
              Sovereign digital infrastructure for African businesses. Built in Kigali, Rwanda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
            <a
              href="https://avel.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-xs font-mono text-text-muted hover:text-white transition-colors"
            >
              {"// AvelCloud"}
            </a>
            <button
              onClick={() => scrollTo("pillars")}
              className="text-left text-xs font-mono text-text-muted hover:text-white transition-colors"
            >
              {"// AvelMail"}
            </button>
            <button
              onClick={() => scrollTo("pillars")}
              className="text-left text-xs font-mono text-text-muted hover:text-white transition-colors"
            >
              {"// AvelDoc"}
            </button>
            <button
              onClick={() => scrollTo("pillars")}
              className="text-left text-xs font-mono text-text-muted hover:text-white transition-colors"
            >
              {"// AvelID"}
            </button>
          </div>

          <div className="flex flex-col md:items-end space-y-2 text-xs font-mono text-text-muted pt-8 md:pt-0 border-t border-border-subtle/50 md:border-t-0">
            <div className="flex items-center space-x-2">
              <span>AVEL Africa Ltd</span>
              <span>·</span>
              <span>Kigali, Rwanda</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>Hosted in Rwanda</span>
              <span aria-label="Rwanda Flag">🇷🇼</span>
            </div>
            <span className="text-[10px] opacity-60 mt-1">
              &copy; {CURRENT_YEAR} AVEL. All rights reserved.
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}
