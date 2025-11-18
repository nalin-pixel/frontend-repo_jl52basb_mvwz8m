export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$299/mo",
      blurb: "Essential A/B testing and flags for growing teams.",
      features: [
        "A/B testing & audiences",
        "50k monthly visitors",
        "3 feature flags",
        "Email support",
      ],
      cta: "Try Webtrends Optimize",
    },
    {
      name: "Growth",
      price: "$899/mo",
      blurb: "Multivariate tests, MAB and warehouse‑native analytics.",
      features: [
        "A/B, MVT, MAB (Bayesian, TS, PTBC)",
        "500k monthly visitors",
        "Unlimited flags",
        "Priority support",
      ],
      highlight: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      blurb: "Advanced privacy, SSO, regional data zones and SLAs.",
      features: [
        "Warehouse‑native across clouds",
        "Regional data residency",
        "SSO/SAML & audit logs",
        "24/7 support & uptime SLAs",
      ],
      cta: "Talk to an Optimisation Expert",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Pricing</h1>
      <p className="text-slate-300 mb-10 max-w-3xl">Transparent tiers that scale with traffic. Pay‑as‑you‑grow with enterprise options when you need them.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`rounded-2xl border ${t.highlight ? "border-blue-500/50 bg-blue-600/10" : "border-slate-800 bg-slate-900"} p-6 flex flex-col`}>
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-1">{t.name}</h3>
              <div className="text-3xl font-semibold text-white mb-2">{t.price}</div>
              <p className="text-slate-300 text-sm mb-4">{t.blurb}</p>
              <ul className="text-sm text-slate-300 space-y-2 list-disc pl-5">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <button className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 text-sm font-medium shadow-md">{t.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
