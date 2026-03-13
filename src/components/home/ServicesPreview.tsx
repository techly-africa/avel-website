import React from "react";
import { Search, PenTool, ShieldCheck, Layers, Share2, Database, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Technology Risk Diagnosis",
        description: "Deep-dive analysis of legacy debt and architectural risks.",
        icon: Search,
        href: "/services",
    },
    {
        title: "Product & Solution Design",
        description: "High-spec PRDs, FSDs, and API specifications.",
        icon: PenTool,
        href: "/services",
    },
    {
        title: "GRC as a Service",
        description: "Continuous compliance governance for regulated orgs.",
        icon: ShieldCheck,
        href: "/grc",
    },
    {
        title: "Security Engineering",
        description: "Controls, IAM, logging, and monitoring by design.",
        icon: Layers,
        href: "/services",
    },
    {
        title: "Integration & API Engineering",
        description: "Telco/bank payment rails and ecosystem alignment.",
        icon: Share2,
        href: "/services",
    },
    {
        title: "Data & Reconciliation",
        description: "Ledger alignment and audit-ready reporting systems.",
        icon: Database,
        href: "/services",
    },
];

export default function ServicesPreview() {
    const [content, setContent] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchContent = async () => {
            try {
                const { contentService } = await import("@/services/contentService");
                const data = await contentService.getContent('home_services');
                if (data) setContent(data.data);
            } catch (error) {
                console.error("ServicesPreview Fetch Error:", error);
            }
        };
        fetchContent();
    }, []);

    const label = content?.label || "Core Capabilities";
    const headline = content?.headline || "Specialized engineering for high-trust ecosystems.";
    const items = content?.items || services.map(s => s.title);

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">{label}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-midnight tracking-tight whitespace-pre-line">
                        {headline}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group p-8 border border-gray-100 rounded-[2rem] hover:border-electric-blue/30 hover:bg-electric-blue/5 hover:shadow-xl hover:translate-y-[-4px] transition-all"
                        >
                            <div className="w-12 h-12 bg-gray-50 text-midnight group-hover:bg-electric-blue group-hover:text-midnight rounded-xl flex items-center justify-center mb-6 transition-colors font-bold">
                                <service.icon size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-midnight mb-3 group-hover:text-electric-blue transition-colors">{service.title}</h4>
                            <p className="text-midnight/60 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div className="flex items-center text-xs font-bold text-midnight/40 group-hover:text-electric-blue uppercase tracking-widest transition-colors">
                                View detail
                                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
