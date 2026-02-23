import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { ArrowRight, Box, Shield, Zap } from "lucide-react";
import Link from "next/link";

const products = [
    {
        name: "AVEL Projects",
        href: "/products/avel-projects",
        tagline: "Delivery Intelligence",
        icon: Box,
        description: "Enterprise project intelligence and delivery governance for complex cross-functional programs.",
    },
    {
        name: "AVEL Varsity",
        href: "/products/avel-varsity",
        tagline: "Workforce Excellence",
        icon: Zap,
        description: "Structured certification journeys to build technical and compliance excellence in your workforce.",
    },
    {
        name: "RBI",
        href: "/products/rbi",
        tagline: "Public Infrastructure",
        icon: Shield,
        description: "Exploring public infrastructure for verifiable records, identity, and trust systems in Africa.",
    },
];

export default function ProductsPage() {
    return (
        <div className="flex flex-col">
            <section className="pt-32 pb-20 px-6 bg-midnight text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Modular tools for <span className="text-electric-blue">complex systems.</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-10">
                            Alongside our advisory and engineering services, AVEL builds specialized products that solve for visibility, upskilling, and institutional trust in Africa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product List */}
            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-12">
                        {products.map((product) => (
                            <Link
                                key={product.name}
                                href={product.href}
                                className="group flex flex-col md:flex-row items-center bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all hover:translate-y-[-4px]"
                            >
                                <div className="w-24 h-24 bg-neutral-bg rounded-3xl flex items-center justify-center text-electric-blue mb-8 md:mb-0 md:mr-12 shrink-0 group-hover:bg-electric-blue group-hover:text-white transition-colors">
                                    <product.icon size={48} />
                                </div>
                                <div className="flex-grow">
                                    <span className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-2 inline-block italic">
                                        {product.tagline}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-6 tracking-tight">
                                        {product.name}
                                    </h2>
                                    <p className="text-lg text-midnight/60 leading-relaxed mb-0 max-w-2xl">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="mt-8 md:mt-0 md:ml-12">
                                    <div className="w-16 h-16 bg-midnight text-white rounded-2xl flex items-center justify-center group-hover:bg-electric-blue transition-colors">
                                        <ArrowRight size={24} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / Waitlist CTA */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-midnight mb-6 tracking-tight">More coming soon.</h2>
                    <p className="text-lg text-midnight/60 mb-10">
                        We are constantly exploring new ways to enhance trust and efficiency in regulated environments. Join our waitlist to be the first to know about new product releases.
                    </p>
                    <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto">
                        <input required type="email" placeholder="Enter your email" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-electric-blue transition-all" />
                        <button className="w-full sm:w-auto bg-midnight text-white px-8 py-4 rounded-2xl font-bold whitespace-nowrap">Notify Me</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
