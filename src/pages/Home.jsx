import { Link } from "react-router-dom";

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-semibold text-white">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800/80 border border-slate-700 text-slate-300">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <svg viewBox="0 0 800 600" className="w-full h-full">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <g fill="none" stroke="url(#g)" strokeOpacity="0.25">
              <circle cx="400" cy="300" r="220" />
              <circle cx="400" cy="300" r="280" />
              <circle cx="400" cy="300" r="340" />
              <path d="M0 320 C200 260, 600 380, 800 320" />
            </g>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Badge>Warehouse‑Native</Badge>
                <Badge>Enterprise Privacy</Badge>
                <Badge>Multi‑Model MAB</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                Experimentation, personalisation and feature flags built for measurable uplift
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Webtrends Optimize (WTO) is the full‑stack, warehouse‑native optimisation platform trusted by leading commerce and retail brands to run faster tests, personalise at scale and ship features safely.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 text-sm font-medium shadow-md hover:brightness-110">
                  Book a Demo
                </Link>
                <Link to="/pricing" className="inline-flex items-center rounded-md border border-slate-700 text-slate-200 px-5 py-3 text-sm font-medium hover:bg-slate-800">
                  Try Webtrends Optimize
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <Stat value="+8.4%" label="Median revenue uplift" />
                <Stat value="< 30 min" label="From idea to first test" />
                <Stat value="> 2.5x" label="Faster learn cycles" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-2xl">
                <h3 className="text-sm text-slate-300 mb-4">Real‑time Experiment Monitor</h3>
                <svg viewBox="0 0 640 360" className="w-full h-auto">
                  <defs>
                    <linearGradient id="l" x1="0" x2="1">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <rect width="640" height="360" rx="12" fill="#0f172a" />
                  <g transform="translate(24,24)">
                    <rect width="592" height="48" rx="8" fill="#111827" />
                    <circle cx="40" cy="24" r="10" fill="#22c55e" />
                    <text x="64" y="30" fill="#94a3b8" fontSize="14">MAB: Thompson Sampling · Prob. to beat control</text>
                  </g>
                  <g transform="translate(24,96)">
                    <rect width="592" height="200" rx="8" fill="#0b1220" stroke="#1f2937" />
                    <polyline fill="none" stroke="url(#l)" strokeWidth="2" points="0,160 60,150 120,120 180,140 240,100 300,110 360,80 420,90 480,70 540,60 592,40" />
                    <g fill="#94a3b8" fontSize="12">
                      <text x="8" y="182">0</text>
                      <text x="8" y="30">+12% uplift</text>
                    </g>
                  </g>
                  <g transform="translate(24,308)" fill="#94a3b8" fontSize="12">
                    <text>Bayesian credible interval · Multi‑metric correction (Holm)</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 mb-6">Trusted by data‑driven brands in commerce, retail and finance</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            {[
              "Aurora Commerce",
              "BlueRiver Retail",
              "Nimbus Travel",
              "NorthStar Finance",
              "Atlas Gear",
              "MonoCart",
            ].map((name) => (
              <div key={name} className="px-3 py-2 rounded border border-slate-800 bg-slate-900 text-slate-300 text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Why Webtrends Optimize?</h2>
          <p className="text-slate-300 mb-10 max-w-3xl">A warehouse‑native platform with enterprise privacy, multi‑model bandits and ROI analytics that translate experiments into revenue — not vanity metrics.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Warehouse‑Native Experimentation",
                desc: "Run analyses directly in Snowflake, BigQuery, Redshift, Databricks and Fabric. Keep data in your zone with no replication.",
              },
              {
                title: "Enterprise‑grade privacy",
                desc: "Regional data zones, IP hashing, PII controls and tamper‑proof audit logs without slowing down your site.",
              },
              {
                title: "Multi‑model MAB",
                desc: "Bayesian, Thompson Sampling and probability‑to‑beat‑control frameworks tuned for retail objectives.",
              },
              {
                title: "Feature flags for optimisation",
                desc: "Targeted rollouts, kill‑switches and audience targeting built for CRO teams and engineers alike.",
              },
              {
                title: "True ROI measurement",
                desc: "Uplift decay curves, cohort views and multi‑metric corrections (Bonferroni, Holm, Hochberg).",
              },
              {
                title: "Integrate everywhere",
                desc: "Shopify Pixel, Next.js, Cloudflare Workers, server‑side, client‑side and APIs.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Ready to see measurable uplift?</h3>
            <p className="text-slate-300 mb-6">Book a tailored walkthrough of WTO for your stack and KPIs, or start with a pay‑as‑you‑grow plan.</p>
            <div className="flex items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 text-sm font-medium shadow-md">Talk to an Optimisation Expert</Link>
              <Link to="/pricing" className="inline-flex items-center rounded-md border border-slate-700 text-slate-200 px-5 py-3 text-sm font-medium">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
