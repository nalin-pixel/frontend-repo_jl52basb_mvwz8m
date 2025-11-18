export default function CaseStudies() {
  const cases = [
    {
      brand: "Aurora Commerce",
      uplift: "+12.3% revenue",
      summary:
        "Introduced dynamic sort on PLP using Thompson Sampling. Faster learn cycles and a 12.3% revenue uplift in 4 weeks.",
    },
    {
      brand: "Nimbus Travel",
      uplift: "+7.1% bookings",
      summary:
        "Tested ancillaries bundles with multi‑metric guardrails. Increased bookings while maintaining margin targets.",
    },
    {
      brand: "NorthStar Finance",
      uplift: "‑18% drop‑off",
      summary:
        "Flagged progressive onboarding to 10% audience. Reduced application drop‑off by 18% with risk‑based rollout.",
    },
    {
      brand: "BlueRiver Retail",
      uplift: "+9.6% AOV",
      summary:
        "Personalised product recommendations by location and stock. Achieved a 9.6% increase in average order value.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Case Studies</h1>
      <p className="text-slate-300 mb-10 max-w-3xl">Evidence over anecdotes. Explore sample outcomes achieved with Webtrends Optimize.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c) => (
          <div key={c.brand} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">{c.brand}</h3>
              <span className="text-emerald-400 text-sm font-medium">{c.uplift}</span>
            </div>
            <p className="text-slate-300 text-sm">{c.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
