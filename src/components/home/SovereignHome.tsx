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
  Globe, 
  Check, 
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Language = "en" | "rw";

interface TranslationSet {
  nav: {
    pillars: string;
    whySovereign: string;
    about: string;
    contact: string;
    talkToUs: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaExplore: string;
    ctaTalk: string;
    trustLine: string;
  };
  thesis: {
    heading: string;
    description: string;
    points: {
      dataResidency: { label: string; desc: string };
      localFirst: { label: string; desc: string };
      complianceReady: { label: string; desc: string };
    };
  };
  pillars: {
    heading: string;
    sub: string;
    badges: {
      live: string;
      early: string;
      soon: string;
    };
    avelCloud: { desc: string; text: string };
    avelMail: { desc: string; text: string };
    avelDoc: { desc: string; text: string };
    avelID: { desc: string; text: string };
  };
  whySovereign: {
    heading: string;
    control: { title: string; desc: string };
    economics: { title: string; desc: string };
    builtHere: { title: string; desc: string };
  };
  about: {
    heading: string;
    text: string;
  };
  contact: {
    heading: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
  };
}

const en: TranslationSet = {
  nav: {
    pillars: "Pillars",
    whySovereign: "Why Sovereign",
    about: "About",
    contact: "Contact",
    talkToUs: "Talk to us",
  },
  hero: {
    headline: "Sovereign infrastructure for African businesses.",
    subheadline: "Compute, communication, records, and identity — owned in Africa, hosted in Africa, built for African businesses.",
    ctaExplore: "Explore the pillars",
    ctaTalk: "Talk to us",
    trustLine: "Hosted in Rwanda 🇷🇼 · Built for the continent.",
  },
  thesis: {
    heading: "Your infrastructure shouldn't live on another continent.",
    description: "African businesses run on tools hosted abroad — their data, communication, and records sit under foreign jurisdiction and foreign pricing. AVEL is building the alternative: core digital infrastructure owned and operated in Africa, so businesses keep control of their data, pay in local currency, and meet local regulatory requirements.",
    points: {
      dataResidency: {
        label: "Data residency",
        desc: "Hosted in-country to satisfy sovereign needs.",
      },
      localFirst: {
        label: "Local-first",
        desc: "RWF billing, mobile money, and direct support.",
      },
      complianceReady: {
        label: "Compliance-ready",
        desc: "Built to comply with African regulatory regimes.",
      },
    },
  },
  pillars: {
    heading: "Four pillars of sovereign infrastructure.",
    sub: "The foundation every modern business runs on — compute, communication, records, and identity.",
    badges: {
      live: "Available now",
      early: "Early access",
      soon: "Coming soon",
    },
    avelCloud: {
      desc: "Sovereign cloud hosting.",
      text: "Compute, deployment, and DNS for African businesses, hosted in-country. Spin up servers, deploy apps, and run your infrastructure without it ever leaving the continent.",
    },
    avelMail: {
      desc: "Business email, hosted in Africa.",
      text: "Professional email on your own domain — billed in Rwandan francs, paid by mobile money, supported locally. A sovereign alternative to Google Workspace and Microsoft 365 that keeps your communication in-country.",
    },
    avelDoc: {
      desc: "Document management & e-archive.",
      text: "Securely store, organize, search, and retain your business documents and records — with OCR and compliance-grade archiving, hosted in Africa to meet local data-retention and regulatory requirements.",
    },
    avelID: {
      desc: "Business identity & trust.",
      text: "Verifiable business credentials and digital identity for African enterprises — the trust layer for onboarding, transacting, and proving who you are across digital services.",
    },
  },
  whySovereign: {
    heading: "Why sovereignty matters now.",
    control: {
      title: "Control your data",
      desc: "Your business data stays under your jurisdiction, not a foreign provider's.",
    },
    economics: {
      title: "Local economics",
      desc: "Pay in local currency via the channels you already use; no forex friction, no per-seat foreign pricing.",
    },
    builtHere: {
      title: "Built for here",
      desc: "Designed around African regulatory, language, and payment realities from day one.",
    },
  },
  about: {
    heading: "Building it, in the open.",
    text: "AVEL is a Kigali-based company building sovereign infrastructure for the continent, pillar by pillar. Some pieces are live today; others are in active development. We'd rather tell you exactly where we are than oversell.",
  },
  contact: {
    heading: "Let's build your business on infrastructure you own.",
    form: {
      name: "Your Name",
      email: "Email Address",
      message: "How can we help you?",
      submit: "Send Message",
      submitting: "Sending...",
      success: "Thank you. We will get back to you shortly.",
      error: "Something went wrong. Please try again or email us directly.",
    },
  },
};

const rw: TranslationSet = {
  nav: {
    pillars: "Inkingi",
    whySovereign: "Kuki ari ngombwa",
    about: "Turi bande",
    contact: "Twandikire",
    talkToUs: "Tuvugishe",
  },
  hero: {
    headline: "Ibikorwaremezo byizewe kandi byigenga ku bucuruzi bwa Afurika.",
    subheadline: "Compute, communication, records, and identity — owned in Africa, hosted in Africa, built for African businesses.",
    ctaExplore: "Sura inkingi zacu",
    ctaTalk: "Tuvugishe",
    trustLine: "Bibitswe mu Rwanda 🇷🇼 · Byubakiwe umugabane wose.",
  },
  thesis: {
    heading: "Ibikorwaremezo byawe ntibikwiye kuba ku wundi mugabane.",
    description: "African businesses run on tools hosted abroad — their data, communication, and records sit under foreign jurisdiction and foreign pricing. AVEL is building the alternative: core digital infrastructure owned and operated in Africa, so businesses keep control of their data, pay in local currency, and meet local regulatory requirements.",
    points: {
      dataResidency: {
        label: "Aho amakuru abikwa",
        desc: "Hosted in-country to satisfy sovereign needs.",
      },
      localFirst: {
        label: "Hafi yawe mbere",
        desc: "RWF billing, mobile money, and direct support.",
      },
      complianceReady: {
        label: "Bihuje n'amategeko",
        desc: "Built to comply with African regulatory regimes.",
      },
    },
  },
  pillars: {
    heading: "Inkingi enye z'ibikorwaremezo byigenga.",
    sub: "The foundation every modern business runs on — compute, communication, records, and identity.",
    badges: {
      live: "Bihari ubu",
      early: "Kugerageza mbere",
      soon: "Biri hafi",
    },
    avelCloud: {
      desc: "Sovereign cloud hosting.",
      text: "Compute, deployment, and DNS for African businesses, hosted in-country. Spin up servers, deploy apps, and run your infrastructure without it ever leaving the continent.",
    },
    avelMail: {
      desc: "Business email, hosted in Africa.",
      text: "Professional email on your own domain — billed in Rwandan francs, paid by mobile money, supported locally. A sovereign alternative to Google Workspace and Microsoft 365 that keeps your communication in-country.",
    },
    avelDoc: {
      desc: "Document management & e-archive.",
      text: "Securely store, organize, search, and retain your business documents and records — with OCR and compliance-grade archiving, hosted in Africa to meet local data-retention and regulatory requirements.",
    },
    avelID: {
      desc: "Business identity & trust.",
      text: "Verifiable business credentials and digital identity for African enterprises — the trust layer for onboarding, transacting, and proving who you are across digital services.",
    },
  },
  whySovereign: {
    heading: "Kuki ukwitegenga mu bikorwaremezo ari ngombwa ubu.",
    control: {
      title: "Control your data",
      desc: "Your business data stays under your jurisdiction, not a foreign provider's.",
    },
    economics: {
      title: "Local economics",
      desc: "Pay in local currency via the channels you already use; no forex friction, no per-seat foreign pricing.",
    },
    builtHere: {
      title: "Built for here",
      desc: "Designed around African regulatory, language, and payment realities from day one.",
    },
  },
  about: {
    heading: "Kubaka mu buryo bugaragara.",
    text: "AVEL is a Kigali-based company building sovereign infrastructure for the continent, pillar by pillar. Some pieces are live today; others are in active development. We'd rather tell you exactly where we are than oversell.",
  },
  contact: {
    heading: "Hubaka ubucuruzi bwawe ku bikorwaremezo utunga.",
    form: {
      name: "Amazina yanyu",
      email: "Imeri yanyu",
      message: "Ni gute twagufasha?",
      submit: "Ohereza ubutumwa",
      submitting: "Biracyoherezwa...",
      success: "Murakoze. Turagusubiza vuba.",
      error: "Hagize igikenda. Ongera ugerageze cyangwa utwandikire kuri imeri.",
    },
  },
};

const CURRENT_YEAR = 2026;

export default function SovereignHome() {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const t = lang === "en" ? en : rw;

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("avel-lang");
    if (stored === "en" || stored === "rw") {
      setLang(stored);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection
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

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "rw" : "en";
    setLang(nextLang);
    localStorage.setItem("avel-lang", nextLang);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormStatus("submitting");

    // Simulate backend call
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
      const offset = 80; // height of sticky header
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
              {t.nav.pillars}
            </button>
            <button 
              onClick={() => scrollTo("why-sovereign")}
              className={`text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                activeSection === "why-sovereign" ? "text-accent" : "text-text-muted hover:text-white"
              }`}
            >
              {t.nav.whySovereign}
            </button>
            <button 
              onClick={() => scrollTo("about")}
              className={`text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                activeSection === "about" ? "text-accent" : "text-text-muted hover:text-white"
              }`}
            >
              {t.nav.about}
            </button>
            <button 
              onClick={() => scrollTo("contact")}
              className={`text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                activeSection === "contact" ? "text-accent" : "text-text-muted hover:text-white"
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Language Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-sm font-mono text-text-muted hover:text-white transition-colors cursor-pointer border border-border-subtle px-3 py-1.5 rounded-lg bg-surface/50"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-accent" />
              <span>{lang === "en" ? "RW" : "EN"}</span>
            </button>

            <a 
              href="https://wa.me/250799903601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-sm font-semibold tracking-wide bg-accent text-background hover:bg-accent/90 transition-all px-5 py-2 rounded-lg cursor-pointer hover:scale-[1.01]"
            >
              {t.nav.talkToUs}
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-xs font-mono text-text-muted hover:text-white transition-colors cursor-pointer border border-border-subtle px-2 py-1.5 rounded-lg bg-surface/50"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-accent" />
              <span>{lang === "en" ? "RW" : "EN"}</span>
            </button>
            
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
                {t.nav.pillars}
              </button>
              <button 
                onClick={() => scrollTo("why-sovereign")}
                className="text-left text-lg font-medium text-text-muted hover:text-white transition-colors py-2 border-b border-border-subtle"
              >
                {t.nav.whySovereign}
              </button>
              <button 
                onClick={() => scrollTo("about")}
                className="text-left text-lg font-medium text-text-muted hover:text-white transition-colors py-2 border-b border-border-subtle"
              >
                {t.nav.about}
              </button>
              <button 
                onClick={() => scrollTo("contact")}
                className="text-left text-lg font-medium text-text-muted hover:text-white transition-colors py-2 border-b border-border-subtle"
              >
                {t.nav.contact}
              </button>
            </div>

            <div className="mt-auto mb-12 flex flex-col space-y-4">
              <a 
                href="https://wa.me/250799903601"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center text-center text-base font-semibold bg-accent text-background hover:bg-accent/90 transition-all py-3.5 rounded-lg"
              >
                {t.nav.talkToUs}
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
            {/* Grid Map connections simulating an abstract network */}
            {/* Outline nodes representing cities / infrastructure */}
            <path d="M 120,150 L 220,100 L 320,150 L 350,280 L 250,380 L 150,320 Z" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
            <path d="M 220,100 L 250,220 L 350,280" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <path d="M 120,150 L 250,220 L 150,320" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <path d="M 250,220 L 250,380" fill="none" stroke="currentColor" strokeWidth="0.8" />

            {/* Pulsing connections */}
            <line x1="220" y1="100" x2="320" y2="150" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" values="100;0" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="120" y1="150" x2="250" y2="220" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" values="100;0" dur="5s" repeatCount="indefinite" />
            </line>
            <line x1="250" y1="220" x2="250" y2="380" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" values="100;0" dur="6s" repeatCount="indefinite" />
            </line>

            {/* Nodes */}
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
                {t.hero.trustLine}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]"
            >
              {t.hero.headline}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-muted max-w-[620px] mb-10 leading-relaxed font-light"
            >
              {t.hero.subheadline}
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
                <span>{t.hero.ctaExplore}</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </button>
              
              <a 
                href="https://wa.me/250799903601"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-semibold tracking-wide border border-border-subtle bg-surface/20 text-white hover:bg-surface/50 hover:border-white/20 transition-all px-8 py-4 rounded-xl cursor-pointer"
              >
                <span>{t.hero.ctaTalk}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE SOVEREIGNTY THESIS */}
      <section className="border-t border-border-subtle bg-background py-24 md:py-36 relative overflow-hidden">
        <div className="fluid-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Sticky/Bold Heading */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-accent mb-3 block">
                01 // THESIS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.thesis.heading}
              </h2>
            </div>

            {/* Narrative & Points */}
            <div className="lg:col-span-7">
              <p className="text-lg sm:text-xl text-text-muted mb-12 leading-relaxed font-light">
                {t.thesis.description}
              </p>

              {/* Pillars sub-points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border-subtle">
                <div className="flex flex-col space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {t.thesis.points.dataResidency.label}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {t.thesis.points.dataResidency.desc}
                  </p>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Coins className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {t.thesis.points.localFirst.label}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {t.thesis.points.localFirst.desc}
                  </p>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {t.thesis.points.complianceReady.label}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {t.thesis.points.complianceReady.desc}
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
          
          {/* Section Header */}
          <div className="max-w-[700px] mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-accent mb-3 block">
              02 // CORE SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              {t.pillars.heading}
            </h2>
            <p className="text-lg text-text-muted font-light leading-relaxed">
              {t.pillars.sub}
            </p>
          </div>

          {/* Pillars Cards Grid */}
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
                    {t.pillars.badges.live}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                  AvelCloud
                </h3>
                <p className="text-xs font-medium tracking-wide uppercase text-accent mb-4">
                  {t.pillars.avelCloud.desc}
                </p>
                <p className="text-sm text-text-muted leading-relaxed max-w-[480px]">
                  {t.pillars.avelCloud.text}
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
                  {/* Styled as amber status badge for Early Access */}
                  <span className="font-mono text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md text-amber-400 bg-amber-400/10 border border-amber-400/20">
                    {t.pillars.badges.early}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                  AvelMail
                </h3>
                <p className="text-xs font-medium tracking-wide uppercase text-accent mb-4">
                  {t.pillars.avelMail.desc}
                </p>
                <p className="text-sm text-text-muted leading-relaxed max-w-[480px]">
                  {t.pillars.avelMail.text}
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
                    {t.pillars.badges.soon}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                  AvelDoc
                </h3>
                <p className="text-xs font-medium tracking-wide uppercase text-text-muted mb-4">
                  {t.pillars.avelDoc.desc}
                </p>
                <p className="text-sm text-text-muted leading-relaxed max-w-[480px]">
                  {t.pillars.avelDoc.text}
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
                    {t.pillars.badges.soon}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                  AvelID
                </h3>
                <p className="text-xs font-medium tracking-wide uppercase text-text-muted mb-4">
                  {t.pillars.avelID.desc}
                </p>
                <p className="text-sm text-text-muted leading-relaxed max-w-[480px]">
                  {t.pillars.avelID.text}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* WHY SOVEREIGN */}
      <section id="why-sovereign" className="py-24 md:py-36 relative">
        <div className="fluid-container relative z-10">
          
          {/* Section Header */}
          <div className="max-w-[700px] mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-accent mb-3 block">
              03 // ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              {t.whySovereign.heading}
            </h2>
          </div>

          {/* Three columns details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                [01]
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide">
                {t.whySovereign.control.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed font-light">
                {t.whySovereign.control.desc}
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                [02]
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide">
                {t.whySovereign.economics.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed font-light">
                {t.whySovereign.economics.desc}
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                [03]
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide">
                {t.whySovereign.builtHere.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed font-light">
                {t.whySovereign.builtHere.desc}
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
                {t.about.heading}
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-lg sm:text-xl text-text-muted leading-relaxed font-light max-w-[620px]">
                {t.about.text}
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
            
            {/* CTA Heading & Links */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent mb-3 block">
                  05 // CONTACT
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-[420px]">
                  {t.contact.heading}
                </h2>
              </div>

              <div className="flex flex-col space-y-6 mt-8">
                {/* WhatsApp Link */}
                <a 
                  href="https://wa.me/250799903601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-3 text-text-muted hover:text-white transition-colors text-base font-semibold border-b border-border-subtle pb-3 max-w-[280px]"
                >
                  <MessageSquare className="w-5 h-5 text-accent" />
                  <span>WhatsApp: +250 799 903 601</span>
                </a>

                {/* Public Email Link */}
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
                    {t.contact.form.name}
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
                    placeholder="Paul Kagame"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                    {t.contact.form.email}
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
                    placeholder="paul@company.rw"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                    {t.contact.form.message}
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
                  {formStatus === "submitting" ? t.contact.form.submitting : t.contact.form.submit}
                </button>

                {/* Form feedback status UI */}
                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center space-x-2 text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-3 rounded-lg text-sm"
                    >
                      <Check className="w-4 h-4 flex-shrink-0" />
                      <span>{t.contact.form.success}</span>
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
                      <span>{t.contact.form.error}</span>
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
          
          {/* Logo & Tagline */}
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

          {/* Pillars Links */}
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

          {/* Copyright & Sovereignty Mark */}
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
