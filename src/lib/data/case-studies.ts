export interface CaseStudy {
    slug: string;
    title: string;
    subtitle: string;
    tags: string[];
    summary: string;
    challenge: string;
    approach: string;
    outcomes: string[];
    context: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "mobility-payments-reconciliation",
        title: "National-scale mobility payments: reconciliation and operational governance",
        subtitle: "Mobility",
        tags: ["Mobility", "Integrations", "Data"],
        summary: "Reconciliation and operational governance for a nationwide multimodal transit system.",
        context: "A national transport authority launched a contactless payment system across buses, trains, and ferries. However, settlement drift between hardware vendors and the central clearing house was leading to significant financial discrepancies.",
        challenge: "The system was processing over 1.2M transactions daily. Hardware latency and intermittent connectivity at terminal points caused 'ghost' transactions that didn't match the central ledger, leading to a 3% daily value drift.",
        approach: "AVEL implemented a custom reconciliation engine that synchronized terminal-level logs with clearing house settlement files. We established an automated exception management workflow for 'stale' transactions.",
        outcomes: ["Reduced processing drift to <0.01%", "Automated 95% of settlement exceptions", "Achieved 100% auditability for national treasury"],
    },
    {
        slug: "merchant-lending-ecosystem",
        title: "Merchant lending ecosystem: scorecards, flows, and compliance controls",
        subtitle: "Fintech",
        tags: ["Fintech", "Compliance", "Data"],
        summary: "Implementation of credit scorecards and automated compliance controls for SME lending.",
        context: "A regional fintech aimed to launch an instant lending product for micro-merchants based on their transaction history. They lacked a compliant, automated way to assess risk and secure credit approvals.",
        challenge: "Manual credit assessments were taking 48-72 hours, causing high drop-off. Furthermore, the central bank required strict evidence of scorecard logic and AML checks for every loan issued.",
        approach: "We designed and built a scorecard-driven decision engine that integrated directly with POS data. We mapped every decision to a 'Reason Code' ledger to satisfy regulatory transparency requirements.",
        outcomes: ["Reduced approval time from 72 hours to 4 minutes", "Zero regulatory findings in the first 12 months", "Supported $50M+ in disbursed credit"],
    },
    {
        slug: "multi-tenant-commerce-platform",
        title: "Multi-tenant commerce platform: IAM, auditability, and reporting",
        subtitle: "Public Sector",
        tags: ["Public Sector", "Compliance", "Integrations"],
        summary: "Identity and access management (IAM) with full auditability for inter-agency commerce.",
        context: "A government digital agency needed a unified commerce platform for multiple ministries to procure and sell services, requiring strict separation of data and budgets.",
        challenge: "Existing systems had overlapping access rights, leading to unauthorized budget visibility. The agency needed a rock-solid multi-tenant architecture with verifiable audit trails for every transaction.",
        approach: "AVEL built a custom IAM layer based on attribute-based access control (ABAC). We implemented a global decision log that recorded every permission check and resource access attempt.",
        outcomes: ["Isolated 12 distinct government entities on a single platform", "Reduced permission-related security incidents to zero", "Passed external security audit with zero critical items"],
    },
    {
        slug: "cbdc-sandbox-innovation",
        title: "CBDC Sandbox: Interoperability & Trust in Digital Currency",
        subtitle: "Banking",
        tags: ["Fintech", "Banking", "Integrations"],
        summary: "Exploratory sandbox for central bank digital currency interoperability.",
        context: "A central bank wanted to explore how a CBDC could interoperate with existing commercial bank ledgers and mobile money systems.",
        challenge: "The primary risk was system stability and finality of settlement across legacy and DLT-based systems. The bank needed a safe, high-fidelity sandbox to test stress scenarios.",
        approach: "AVEL engineered the interoperability layer between the CBDC prototype and three commercial bank APIs. We implemented a continuous monitoring dashboard for liquidity and finality latency.",
        outcomes: ["Successfully tested 50+ stress scenarios", "Demonstrated sub-2 second cross-platform finality", "Provided policy evidence for national digital currency roadmap"],
    },
    {
        slug: "telco-agent-banking",
        title: "Telco-led Agent Banking: Security, Fraud, and AML Controls",
        subtitle: "Telecom",
        tags: ["Telecom", "Fintech", "Compliance"],
        summary: "Security and AML lifecycle for a telco-led financial services agent network.",
        context: "A major telecommunications firm was expanding into agent banking. They faced significant fraud risks at the agent 'cash-in/cash-out' points.",
        challenge: "Rapid expansion led to a high volume of suspicious transactions that manual AML teams couldn't keep up with. Regulators threatened to freeze the license if fraud wasn't curtailed.",
        approach: "We implemented an automated fraud detection layer using real-time anomaly detection. We also rebuilt the agent KYC onboarding flow to include verifiable biometric checks.",
        outcomes: ["Reduced agent-level fraud incidents by 75%", "Automated 80% of Tier 1 AML alerts", "Secured full banking license renewal"],
    },
    {
        slug: "cross-border-logistics-id",
        title: "Cross-border Logistics: Verifiable Records and Digital ID",
        subtitle: "Logistics",
        tags: ["Logistics", "Data", "Integrations"],
        summary: "Digital ID and verifiable records for cross-border cargo movements.",
        context: "A regional logistics corridor suffered from paper-based document fraud, leading to significant delays and revenue leakage at border crossings.",
        challenge: "Cargo manifesting was prone to tempering. The corridor needed a way to ensure that the document issued at the port of entry was same one presented at the final destination.",
        approach: "AVEL implemented a digital identity system for cargo handlers and an immutable record system for manifest hashes. We integrated this with customs clearance APIs.",
        outcomes: ["Reduced border clearance time by 4 hours on average", "Eliminated manifest document tampering", "Increased revenue collection accuracy by 12%"],
    },
];
