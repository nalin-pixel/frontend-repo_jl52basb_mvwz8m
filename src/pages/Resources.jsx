export default function Resources() {
  const posts = [
    {
      title: "Warehouse‑Native Experimentation: A Practical Guide",
      type: "Whitepaper",
    },
    { title: "Choosing the Right MAB Model for Retail", type: "Article" },
    { title: "Feature Flags for Optimisation Teams", type: "Webinar" },
    { title: "Uplift Decay Curves Explained", type: "Article" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Resources</h1>
      <p className="text-slate-300 mb-10 max-w-3xl">Deep‑dives, how‑tos and research to help your team scale experimentation and personalisation.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <div key={p.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-xs text-slate-400 mb-1">{p.type}</div>
            <h3 className="text-white font-semibold mb-2">{p.title}</h3>
            <button className="text-sm text-cyan-400">Read more →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
