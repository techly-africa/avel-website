"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronRight, ClipboardCheck, Code2, Mail, Menu, MessageSquare, Search, ShieldCheck, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  {
    icon: Sparkles,
    index: "01",
    title: "Tech Consultancy",
    description: "Clear technology direction for organizations making consequential decisions. We turn business priorities into practical roadmaps, architecture, and investment plans.",
    outcomes: ["Technology strategy", "Architecture advisory", "Digital transformation roadmaps"],
  },
  {
    icon: ClipboardCheck,
    index: "02",
    title: "Tech Audit",
    description: "Independent assessment of your systems, security posture, delivery practices, and technical debt, with findings your leadership team can act on.",
    outcomes: ["Architecture and code review", "Security and risk assessment", "Actionable remediation plan"],
  },
  {
    icon: Code2,
    index: "03",
    title: "Digital Solutions Development",
    description: "Purpose-built digital products and internal platforms designed around real workflows, delivered from discovery through launch and continuous improvement.",
    outcomes: ["Web and mobile applications", "Business process automation", "Systems integration"],
  },
];

const approach = [
  { number: "01", title: "Understand", text: "We align on the business problem, constraints, users, and measures of success." },
  { number: "02", title: "Assess", text: "We examine the current state and identify the highest-value path forward." },
  { number: "03", title: "Deliver", text: "We work in focused increments, with clear ownership and visible progress." },
  { number: "04", title: "Enable", text: "We document, transfer knowledge, and leave your team stronger than we found it." },
];

const navItems = [
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const CURRENT_YEAR = 2026;

export default function SovereignHome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const current = navItems.find(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      setActiveSection(current?.id ?? "");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setFormState({ name: "", email: "", message: "" });
    setFormStatus("success");
  };

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent/20 selection:text-mid-navy">
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled ? "border-border-subtle bg-white/95 py-3 shadow-sm backdrop-blur" : "border-transparent bg-white py-5"}`}>
        <div className="fluid-container flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="relative h-11 w-[126px] rounded bg-mid-navy px-2 transition-opacity hover:opacity-90" aria-label="AVEL home">
            <Image src="/avel-new.png" alt="AVEL Africa" fill priority sizes="126px" className="object-contain px-2" />
          </button>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`text-sm font-medium transition-colors ${activeSection === item.id ? "text-mid-navy" : "text-text-muted hover:text-text-primary"}`}>
                {item.label}
              </button>
            ))}
          </nav>
          <a href="https://wa.me/250799903601" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-md bg-mid-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-text-primary md:inline-flex">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </a>
          <button onClick={() => setIsMobileMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center text-text-primary md:hidden" aria-label="Toggle navigation" aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="fixed inset-x-0 top-[69px] z-40 border-b border-border-subtle bg-white px-6 py-6 shadow-lg md:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="border-b border-border-subtle py-4 text-left text-base font-medium text-text-primary">{item.label}</button>
              ))}
              <a href="https://wa.me/250799903601" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-mid-navy px-5 py-3 text-sm font-semibold text-white">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="relative overflow-hidden border-b border-border-subtle bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(19,56,99,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,56,99,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="fluid-container relative grid min-h-[680px] items-center gap-14 py-20 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-7">
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase text-mid-navy">
                <span className="h-px w-8 bg-accent" /> Technology that advances the business
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="max-w-[760px] text-5xl font-bold leading-[1.02] text-text-primary sm:text-6xl lg:text-7xl">
                Practical technology expertise, from decision to delivery.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-7 max-w-[650px] text-lg leading-8 text-text-muted sm:text-xl">
                AVEL helps organizations make sound technology decisions, uncover risk, and build digital solutions that create measurable value.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => scrollTo("contact")} className="inline-flex items-center justify-center gap-2 rounded-md bg-mid-navy px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-text-primary">
                  Discuss your project <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => scrollTo("services")} className="inline-flex items-center justify-center gap-2 rounded-md border border-border-subtle bg-white px-7 py-4 text-sm font-semibold text-text-primary transition-colors hover:border-mid-navy">
                  Explore services <ChevronRight className="h-4 w-4" />
                </button>
              </motion.div>
            </div>
            <div className="relative lg:col-span-5" aria-hidden="true">
              <div className="relative mx-auto aspect-square max-w-[450px]">
                <div className="absolute inset-[12%] rounded-full border border-mid-navy/15" />
                <div className="absolute inset-[25%] rounded-full border border-mid-navy/20" />
                <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -rotate-[28deg] bg-mid-navy/20" />
                <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 rotate-[34deg] bg-mid-navy/20" />
                <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-mid-navy text-white shadow-[0_18px_45px_rgba(19,56,99,0.22)]"><Search className="h-9 w-9" /></div>
                <div className="absolute left-[7%] top-[29%] grid h-14 w-14 place-items-center rounded-full border border-accent/30 bg-white text-mid-navy shadow-md"><Sparkles className="h-6 w-6" /></div>
                <div className="absolute right-[6%] top-[35%] grid h-14 w-14 place-items-center rounded-full border border-accent/30 bg-white text-mid-navy shadow-md"><ClipboardCheck className="h-6 w-6" /></div>
                <div className="absolute bottom-[5%] left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border border-accent/30 bg-white text-mid-navy shadow-md"><Code2 className="h-6 w-6" /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-neutral-bg py-24 lg:py-32">
          <div className="fluid-container">
            <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="mb-4 text-xs font-semibold uppercase text-mid-navy">What we do</p>
                <h2 className="text-4xl font-bold leading-tight text-text-primary sm:text-5xl">Three disciplines. One accountable partner.</h2>
              </div>
              <p className="max-w-[470px] text-base leading-7 text-text-muted lg:col-span-5 lg:justify-self-end">We meet organizations where they are: shaping direction, validating what already exists, or building what comes next.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border-subtle bg-border-subtle lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="group bg-white p-8 transition-colors hover:bg-[#F9FCFE] lg:p-10">
                  <div className="mb-12 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-md bg-accent/12 text-mid-navy"><service.icon className="h-6 w-6" /></div>
                    <span className="font-mono text-xs text-text-muted">{service.index}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">{service.title}</h3>
                  <p className="mt-4 min-h-[112px] text-sm leading-7 text-text-muted">{service.description}</p>
                  <ul className="mt-7 space-y-3 border-t border-border-subtle pt-6">
                    {service.outcomes.map((outcome) => <li key={outcome} className="flex items-center gap-3 text-sm font-medium text-text-primary"><Check className="h-4 w-4 shrink-0 text-accent" />{outcome}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-20 border-y border-border-subtle bg-white py-24 lg:py-32">
          <div className="fluid-container grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs font-semibold uppercase text-mid-navy">How we work</p>
              <h2 className="text-4xl font-bold leading-tight text-text-primary">Rigorous thinking. Visible progress.</h2>
              <p className="mt-6 text-base leading-7 text-text-muted">Senior attention stays on the work from the first conversation through handover.</p>
            </div>
            <div className="lg:col-span-8">
              {approach.map((step) => (
                <div key={step.number} className="grid gap-4 border-t border-border-subtle py-7 sm:grid-cols-[64px_180px_1fr] sm:items-start">
                  <span className="font-mono text-xs text-accent">{step.number}</span><h3 className="text-lg font-bold text-text-primary">{step.title}</h3><p className="text-sm leading-7 text-text-muted">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-b border-border-subtle bg-neutral-bg py-24 lg:py-32">
          <div className="fluid-container grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase text-accent">About AVEL</p>
              <h2 className="max-w-[760px] text-4xl font-bold leading-tight text-text-primary sm:text-5xl">Local context, global engineering standards.</h2>
              <p className="mt-7 max-w-[680px] text-lg leading-8 text-text-muted">AVEL is a Kigali-based technology consultancy working with ambitious businesses and institutions across Africa. We combine business understanding, technical depth, and disciplined delivery to solve problems that matter.</p>
            </div>
            <div className="border-l border-border-subtle pl-8 text-text-primary lg:col-span-5 lg:pl-12">
              <div className="flex items-center gap-3 text-sm font-semibold"><ShieldCheck className="h-5 w-5 text-accent" />Independent advice</div>
              <div className="mt-6 flex items-center gap-3 text-sm font-semibold"><ClipboardCheck className="h-5 w-5 text-accent" />Evidence-led decisions</div>
              <div className="mt-6 flex items-center gap-3 text-sm font-semibold"><Code2 className="h-5 w-5 text-accent" />Solutions built to last</div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-white py-24 lg:py-32">
          <div className="fluid-container grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="mb-4 text-xs font-semibold uppercase text-mid-navy">Start a conversation</p>
              <h2 className="text-4xl font-bold leading-tight text-text-primary sm:text-5xl">What are you trying to move forward?</h2>
              <p className="mt-6 text-base leading-7 text-text-muted">Share the decision, risk, or digital product on your desk. We will help you identify a practical next step.</p>
              <div className="mt-10 space-y-4">
                <a href="https://wa.me/250799903601" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-semibold text-text-primary hover:text-mid-navy"><MessageSquare className="h-5 w-5 text-accent" />+250 799 903 601</a>
                <a href="mailto:contact@avel.africa" className="flex items-center gap-3 text-sm font-semibold text-text-primary hover:text-mid-navy"><Mail className="h-5 w-5 text-accent" />contact@avel.africa</a>
              </div>
            </div>
            <form onSubmit={handleFormSubmit} className="grid gap-5 border-t-2 border-mid-navy pt-8 lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-semibold uppercase text-text-muted">Name<input name="name" value={formState.name} onChange={(event) => setFormState((state) => ({ ...state, name: event.target.value }))} className="h-12 rounded-md border border-border-subtle bg-white px-4 text-sm font-normal normal-case text-text-primary outline-none transition focus:border-mid-navy focus:ring-2 focus:ring-accent/20" required /></label>
                <label className="grid gap-2 text-xs font-semibold uppercase text-text-muted">Work email<input type="email" name="email" value={formState.email} onChange={(event) => setFormState((state) => ({ ...state, email: event.target.value }))} className="h-12 rounded-md border border-border-subtle bg-white px-4 text-sm font-normal normal-case text-text-primary outline-none transition focus:border-mid-navy focus:ring-2 focus:ring-accent/20" required /></label>
              </div>
              <label className="grid gap-2 text-xs font-semibold uppercase text-text-muted">How can we help?<textarea name="message" rows={5} value={formState.message} onChange={(event) => setFormState((state) => ({ ...state, message: event.target.value }))} placeholder="Tell us about your objective, current challenge, or project." className="resize-none rounded-md border border-border-subtle bg-white px-4 py-3 text-sm font-normal normal-case leading-6 text-text-primary outline-none transition placeholder:text-text-muted/60 focus:border-mid-navy focus:ring-2 focus:ring-accent/20" required /></label>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={formStatus === "submitting"} className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-md bg-mid-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-text-primary disabled:opacity-60">{formStatus === "submitting" ? "Sending..." : "Send enquiry"}{formStatus !== "submitting" && <ArrowRight className="h-4 w-4" />}</button>
                {formStatus === "success" && <p className="flex items-center gap-2 text-sm font-medium text-emerald-700"><Check className="h-4 w-4" />Thank you. We will be in touch shortly.</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-subtle bg-neutral-bg py-12">
        <div className="fluid-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div><div className="relative h-10 w-[116px] rounded bg-mid-navy"><Image src="/avel-new.png" alt="AVEL Africa" fill sizes="116px" className="object-contain px-2" /></div><p className="mt-3 text-xs text-text-muted">Technology consultancy based in Kigali, Rwanda.</p></div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-text-muted">{navItems.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)} className="hover:text-text-primary">{item.label}</button>)}</div>
          <p className="text-xs text-text-muted">© {CURRENT_YEAR} AVEL Africa Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
