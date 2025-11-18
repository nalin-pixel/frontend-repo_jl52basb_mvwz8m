export default function Developers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Developers</h1>
        <p className="text-slate-300 max-w-3xl">SDKs, APIs and edge delivery to integrate WTO anywhere in your stack. Built for performance with transparent governance.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-white font-semibold mb-2">API Overview</h3>
          <p className="text-slate-300 text-sm mb-4">REST and event APIs for experiments, flags, audiences and results. Webhooks for experiment lifecycle events.</p>
          <pre className="text-xs bg-slate-950/60 border border-slate-800 rounded p-4 overflow-auto">
{`GET /v1/flags/:key -> { enabled: boolean, variants: [...] }
POST /v1/events -> { userId, event, properties }
GET /v1/experiments/:id/results -> { uplift, ci, ptbc }`}
          </pre>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-white font-semibold mb-2">SDKs & Edge</h3>
          <ul className="text-sm text-slate-300 space-y-2 list-disc pl-5">
            <li>JavaScript (browser, Node), React, Next.js middleware</li>
            <li>iOS (Swift), Android (Kotlin)</li>
            <li>Python, Go, Java</li>
            <li>Edge delivery via Cloudflare Workers</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-white font-semibold mb-2">Warehouses</h3>
          <p className="text-slate-300 text-sm mb-4">Run analyses where your data lives. No replication, no lag.</p>
          <ul className="text-sm text-slate-300 space-y-2 list-disc pl-5">
            <li>Snowflake, BigQuery, Redshift</li>
            <li>Databricks, Microsoft Fabric</li>
            <li>Native SQL models and dbt packages</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-white font-semibold mb-2">Docs & Webhooks</h3>
          <p className="text-slate-300 text-sm mb-4">Comprehensive documentation and examples. Subscribe to experiment start/stop, variant win and flag change events.</p>
          <ul className="text-sm text-slate-300 space-y-2 list-disc pl-5">
            <li>docs.wto.dev (coming soon)</li>
            <li>Webhook retries with signatures</li>
            <li>Event streams for real‑time BI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
