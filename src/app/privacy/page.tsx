import React from "react";

export default function PrivacyPage() {
    return (
        <div className="flex flex-col">
            <section className="pt-32 pb-20 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-12 tracking-tight">Privacy Policy</h1>
                    <div className="prose prose-blue max-w-none text-midnight/70 leading-relaxed space-y-8">
                        <p className="font-bold text-midnight">Last Updated: February 23, 2026</p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">1. Data Controller</h2>
                            <p>AVEL Africa, located in Kigali, Rwanda, is the data controller for the processing of your personal data as described in this policy. For any inquiries regarding your data, please contact contact@avel.africa.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">2. Information We Collect</h2>
                            <p>We collect information you provide directly to us through our contact forms, booking modals, and assessment requests. This may include your name, work email, company name, industry, and any messages you send.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">3. Legal Basis for Processing</h2>
                            <p>Under GDPR, we process your personal data based on the following legal grounds:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Consent:</strong> Where you have gave us explicit permission (e.g., checking a box on a contact form).</li>
                                <li><strong>Contractual Necessity:</strong> To fulfill requests you make (e.g., scheduling a call or demo).</li>
                                <li><strong>Legitimate Interests:</strong> To improve our services and maintain security.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">4. Data Retention</h2>
                            <p>We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Lead information is generally stored for 24 months after the last interaction unless a longer period is required by law.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">5. Your Rights under GDPR</h2>
                            <p>You have the following rights regarding your personal data:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Right to Access:</strong> Request a copy of the data we hold about you.</li>
                                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
                                <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your data.</li>
                                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service.</li>
                                <li><strong>Right to Object:</strong> Object to processing of your data for specific purposes.</li>
                            </ul>
                            <p>To exercise these rights, please contact us at <strong>contact@avel.africa</strong>.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">6. International Data Transfers</h2>
                            <p>As a global delivery partner, your data may be processed in jurisdictions outside of the European Economic Area (EEA). We ensure all transfers comply with GDPR by implementing Standard Contractual Clauses (SCCs) and working with partners who maintain high standards of data protection.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-midnight">7. Data Security</h2>
                            <p>As a company focused on Governance, Risk, and Compliance, we take data security seriously. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.</p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
