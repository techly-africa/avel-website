"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Mail, Menu, MessageSquare, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SculptureHero from "@/components/ui/liquid-sculpture-hero";

const services = [
  {
    index: "01",
    title: "Tech Consultancy",
    description: "Clear technology direction for organizations making consequential decisions. We turn business priorities into practical roadmaps, architecture, and investment plans.",
    outcomes: ["Technology strategy", "Architecture advisory", "Digital transformation roadmaps"],
  },
  {
    index: "02",
    title: "Tech Audit",
    description: "Independent assessment of your systems, security posture, delivery practices, and technical debt, with findings your leadership team can act on.",
    outcomes: ["Architecture and code review", "Security and risk assessment", "Actionable remediation plan"],
  },
  {
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
        <SculptureHero
          src="/avel-sculpture-hero.webp"
          mobileSrc="/avel-sculpture-hero-mobile.webp"
          imageAlt="Abstract metallic sculpture representing connected technology systems"
          showNav={false}
          eyebrow="Technology consultancy — Kigali, Rwanda"
          headline={"Practical technology\nexpertise that delivers."}
          headlineAccent="expertise that delivers."
          body="We help organizations make sound technology decisions, uncover risk, and build digital solutions that create measurable value."
          primaryCta={{ label: "Discuss your project", href: "#contact" }}
          secondaryCta={{ label: "Explore services", href: "#services" }}
          background="#F6F8FB"
          darkBackground="#F6F8FB"
          theme="light"
          themeToggle={false}
          textColor="#10233E"
          accentColor="#34B3E4"
          headingFont="var(--font-bricolage), system-ui, sans-serif"
          accentFont="Georgia, 'Times New Roman', serif"
          bodyFont="var(--font-geist-sans), system-ui, sans-serif"
          loadFonts={false}
          sculptureScale={0.92}
          mobileSculptureScale={0.9}
          particleDensity={0.8}
          strength={0.85}
          radius={190}
          turbulence={0.8}
          liquid={0.75}
          returnSpeed={1.15}
          intro
          height="calc(100svh - 70px)"
          backdropText="AVEL"
          hint="Move across the form"
          hintTouch="Touch the form"
          showCredit={false}
          className="border-b border-border-subtle"
        />

        <section id="services" className="scroll-mt-20 border-b border-border-subtle bg-neutral-bg py-24 lg:py-36">
          <div className="fluid-container">
            <div className="grid gap-8 border-b border-border-subtle pb-14 lg:grid-cols-12 lg:items-end lg:pb-20">
              <div className="lg:col-span-8">
                <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted before:h-px before:w-7 before:bg-text-muted/60">What we do</p>
                <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] text-text-primary sm:text-6xl lg:text-7xl">
                  Three disciplines.<br />
                  <span className="font-serif font-normal italic text-accent">One accountable partner.</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-text-muted lg:col-span-4 lg:justify-self-end">We meet organizations where they are: shaping direction, validating what already exists, or building what comes next.</p>
            </div>

            <div>
              {services.map((service) => (
                <article key={service.title} className="group grid gap-7 border-b border-border-subtle py-10 transition-colors duration-200 hover:border-mid-navy sm:py-12 lg:grid-cols-12 lg:gap-10">
                  <div className="flex items-start justify-between lg:col-span-1">
                    <span className="font-mono text-xs text-accent">{service.index}</span>
                    <ArrowUpRight className="h-5 w-5 text-text-muted transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent lg:hidden" />
                  </div>
                  <h3 className="text-3xl font-medium leading-tight text-text-primary transition-colors duration-200 group-hover:text-mid-navy sm:text-4xl lg:col-span-4">{service.title}</h3>
                  <p className="max-w-xl text-[15px] leading-7 text-text-muted lg:col-span-4">{service.description}</p>
                  <div className="flex items-start justify-between gap-6 lg:col-span-3">
                    <ul className="space-y-3">
                      {service.outcomes.map((outcome) => <li key={outcome} className="flex items-start gap-3 text-sm font-medium text-text-primary"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{outcome}</li>)}
                    </ul>
                    <ArrowUpRight className="hidden h-5 w-5 text-text-muted transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent lg:block" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-20 border-b border-border-subtle bg-white py-24 lg:py-36">
          <div className="fluid-container">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted before:h-px before:w-7 before:bg-text-muted/60">How we work</p>
                <h2 className="max-w-lg text-5xl font-medium leading-[0.95] text-text-primary sm:text-6xl">
                  Rigorous thinking.<br />
                  <span className="font-serif font-normal italic text-accent">Visible progress.</span>
                </h2>
              </div>
              <p className="max-w-md self-end text-base leading-7 text-text-muted lg:col-span-4 lg:col-start-9">Senior attention stays on the work from the first conversation through handover.</p>
            </div>

            <div className="mt-16 grid border-y border-border-subtle sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
              {approach.map((step, index) => (
                <article key={step.number} className={`min-h-[280px] py-8 sm:p-8 lg:min-h-[330px] lg:px-8 lg:py-10 ${index > 0 ? "border-t border-border-subtle sm:border-t-0 sm:border-l" : ""} ${index === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""} ${index === 3 ? "sm:border-t lg:border-t-0" : ""}`}>
                  <span className="font-mono text-xs text-accent">{step.number}</span>
                  <div className="mt-20 lg:mt-28">
                    <h3 className="text-2xl font-medium text-text-primary">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-text-muted">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative scroll-mt-20 overflow-hidden border-b border-border-subtle bg-neutral-bg py-24 lg:py-36">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-10 text-center font-display text-[28vw] font-semibold leading-none text-text-primary/[0.025]">AFRICA</div>
          <div className="fluid-container relative">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted before:h-px before:w-7 before:bg-text-muted/60">About AVEL</p>
                <h2 className="max-w-4xl text-5xl font-medium leading-[0.96] text-text-primary sm:text-6xl lg:text-7xl">
                  Local context,<br />
                  <span className="font-serif font-normal italic text-accent">global engineering standards.</span>
                </h2>
                <p className="mt-10 max-w-2xl text-lg leading-8 text-text-muted">AVEL is a Kigali-based technology consultancy working with ambitious businesses and institutions across Africa. We combine business understanding, technical depth, and disciplined delivery to solve problems that matter.</p>
              </div>
              <div className="border-t border-border-subtle lg:col-span-3 lg:col-start-10">
                {["Independent advice", "Evidence-led decisions", "Solutions built to last"].map((principle, index) => (
                  <div key={principle} className="flex items-center gap-4 border-b border-border-subtle py-5 text-sm font-medium text-text-primary">
                    <span className="font-mono text-[10px] text-accent">0{index + 1}</span>{principle}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-white py-24 lg:py-36">
          <div className="fluid-container relative grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted before:h-px before:w-7 before:bg-text-muted/60">Start a conversation</p>
              <h2 className="text-5xl font-medium leading-[0.96] text-text-primary sm:text-6xl">
                What are you trying<br />
                <span className="font-serif font-normal italic text-accent">to move forward?</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-7 text-text-muted">Share the decision, risk, or digital product on your desk. We will help you identify a practical next step.</p>
              <div className="mt-12 border-t border-border-subtle">
                <a href="https://wa.me/250799903601" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-border-subtle py-5 text-sm font-medium text-text-primary transition-colors hover:text-mid-navy"><span className="flex items-center gap-3"><MessageSquare className="h-4 w-4 text-accent" />+250 799 903 601</span><ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
                <a href="mailto:contact@avel.africa" className="group flex items-center justify-between border-b border-border-subtle py-5 text-sm font-medium text-text-primary transition-colors hover:text-mid-navy"><span className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" />contact@avel.africa</span><ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="grid content-start gap-8 border-t border-text-primary pt-8 lg:col-span-7 lg:pt-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="grid gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">Name<input name="name" value={formState.name} onChange={(event) => setFormState((state) => ({ ...state, name: event.target.value }))} className="h-12 border-0 border-b border-border-subtle bg-transparent px-0 text-base font-normal normal-case tracking-normal text-text-primary outline-none transition-colors duration-200 focus:border-accent" required /></label>
                <label className="grid gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">Work email<input type="email" name="email" value={formState.email} onChange={(event) => setFormState((state) => ({ ...state, email: event.target.value }))} className="h-12 border-0 border-b border-border-subtle bg-transparent px-0 text-base font-normal normal-case tracking-normal text-text-primary outline-none transition-colors duration-200 focus:border-accent" required /></label>
              </div>
              <label className="grid gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">How can we help?<textarea name="message" rows={5} value={formState.message} onChange={(event) => setFormState((state) => ({ ...state, message: event.target.value }))} placeholder="Tell us about your objective, current challenge, or project." className="resize-none border-0 border-b border-border-subtle bg-transparent px-0 py-3 text-base font-normal normal-case leading-7 tracking-normal text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-accent" required /></label>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={formStatus === "submitting"} className="inline-flex h-12 min-w-[176px] items-center justify-center gap-3 rounded-full bg-text-primary px-6 text-sm font-medium text-white transition-[transform,background-color] duration-150 hover:bg-mid-navy active:scale-[0.97] disabled:opacity-60">{formStatus === "submitting" ? "Sending..." : "Send enquiry"}{formStatus !== "submitting" && <ArrowRight className="h-4 w-4" />}</button>
                {formStatus === "success" && <p className="flex items-center gap-2 text-sm font-medium text-emerald-700"><Check className="h-4 w-4" />Thank you. We will be in touch shortly.</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-subtle bg-neutral-bg py-10 lg:py-12">
        <div className="fluid-container">
          <div className="flex flex-col gap-10 border-b border-border-subtle pb-10 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="relative h-11 w-[126px] rounded bg-mid-navy"><Image src="/avel-new.png" alt="AVEL Africa" fill sizes="126px" className="object-contain px-2" /></div>
              <p className="mt-4 max-w-xs text-sm leading-6 text-text-muted">Practical technology expertise for ambitious organizations across Africa.</p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-text-muted" aria-label="Footer navigation">{navItems.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)} className="transition-colors hover:text-text-primary">{item.label}</button>)}</nav>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>Technology consultancy · Kigali, Rwanda</p>
            <p>© {CURRENT_YEAR} AVEL Africa Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
