export default function Platform() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">The Webtrends Optimize Platform</h1>
        <p className="text-slate-300 max-w-3xl">Full‑stack experimentation, personalisation and feature flags with ROI analytics and warehouse‑native execution. Designed for CRO teams, product managers and engineers who need speed without compromising governance.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Experiments",
            body:
              "A/B, multivariate and multi‑page testing, plus multi‑armed bandits. Prebuilt templates for commerce flows and rich audience targeting.",
            points: [
              "A/B, MVT, MPT",
              "Bayesian and Frequentist stats",
              "Sequential testing and peeking control",
              "Holdout groups and CUPED",
            ],
          },
          {
            title: "Personalisation",
            body:
              "Target experiences using behavioural and contextual signals. Personalise on the edge with sub‑50ms latency.",
            points: [
              "Behavioural segments",
              "Contextual signals (geo, device, referrer)",
              "Edge rules and server‑side APIs",
              "Easily export audiences",
            ],
          },
          {
            title: "Feature Flags",
            body:
              "Real‑time flags and safe rollouts built for optimisation teams, not just engineers. Target by audience, KPI or risk.",
            points: [
              "Progressive delivery & kill‑switches",
              "Rules, schedules and triggers",
              "SDKs for web, iOS, Android, Node, Python",
              "Audit logs and change approvals",
            ],
          },
          {
            title: "ROI Analytics",
            body:
              "Move beyond CTR. Measure revenue impact with uplift decay curves, cohort analyses and multi‑metric corrections.",
            points: [
              "Uplift decay & time‑to‑value",
              "Bonferroni, Holm, Hochberg",
              "Multi‑KPI guardrails",
              "Export to your BI tool",
            ],
          },
          {
            title: "Integrations",
            body:
              "Warehouse‑native with Snowflake, BigQuery, Redshift, Databricks and Fabric. Tag manager, Shopify Pixel, Next.js, Cloudflare Workers and more.",
            points: [
              "Reverse ETL and CDP connectors",
              "Shopify/BigCommerce apps",
              "Edge, server and client delivery",
              "Webhooks and event streams",
            ],
          },
          {
            title: "Privacy & Governance",
            body:
              "Enterprise controls without slowdown. Regional data zones, IP hashing, consent tools and role‑based approvals.",
            points: [
              "IP hashing & PII controls",
              "Regional data residency",
              "Tamper‑proof audit logs",
              "SSO and SAML",
            ],
          },
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-white font-semibold mb-2">{s.title}</h3>
            <p className="text-slate-300 text-sm mb-4">{s.body}</p>
            <ul className="text-sm text-slate-400 space-y-1 list-disc pl-5">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
