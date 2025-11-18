export default function Solutions() {
  const items = [
    {
      name: "E‑commerce",
      desc:
        "Optimise product discovery, PDPs, add‑to‑cart and checkout. Balance revenue and margin with multi‑metric guardrails.",
    },
    {
      name: "Retail",
      desc:
        "Drive store appointments, loyalty and omnichannel journeys. Sync audiences between POS and web for consistent experiences.",
    },
    {
      name: "Travel",
      desc:
        "Test pricing ladders, ancillaries and dynamic packaging. Personalise by route, fare class, inventory and loyalty tier.",
    },
    {
      name: "Finance",
      desc:
        "Reduce drop‑off in onboarding, KYC and applications. Introduce features safely with flags and risk‑based rollouts.",
    },
    {
      name: "B2B",
      desc:
        "Shorten trial‑to‑value and increase conversion. Powerful ABM personalisation with warehouse‑native audiences.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Solutions</h1>
      <p className="text-slate-300 mb-10 max-w-3xl">Designed for teams that need measurable uplift, faster experimentation and better governance.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.name} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-white font-semibold mb-2">{i.name}</h3>
            <p className="text-slate-300 text-sm">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
