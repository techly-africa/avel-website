import React from "react";

export default function TermsPage() {
    return (
        <div className="flex flex-col">
            <section className="pt-32 pb-20 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-12 tracking-tight">Terms of Service</h1>
                    <div className="prose prose-blue max-w-none text-midnight/70 leading-relaxed space-y-8">
                        <p className="font-bold text-midnight">Last Updated: February 23, 2026</p>
                        <p>Welcome to AVEL Africa. By accessing or using our website, you agree to be bound by these Terms of Service.</p>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">1. Use of Website</h2>
                            <p>The content on this website is for informational purposes only. It does not constitute technical or regulatory advice. You may use our website only for lawful purposes.</p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">2. Intellectual Property</h2>
                            <p>All content, trademarks, and intellectual property on this website are owned by AVEL Africa or its licensors. You may not use, reproduce, or distribute any content without our prior written consent.</p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">3. Limitation of Liability</h2>
                            <p>AVEL Africa shall not be liable for any indirect, incidental, or consequential damages arising out of your use of this website. We do not warrant that the website will be uninterrupted or error-free.</p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">4. Governing Law</h2>
                            <p>These terms shall be governed by and construed in accordance with the laws of the Republic of Rwanda.</p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
