export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">About Webtrends Optimize</h1>
      <p className="text-slate-300 mb-8 max-w-3xl">Our mission is to help brands create measurable value through rigorous experimentation and personalisation. We believe in evidence over opinions, privacy by design and engineering for performance.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { title: "Mission", text: "Enable faster, safer decisions through data‑driven experimentation." },
          { title: "Values", text: "Evidence‑based, privacy‑first, customer‑obsessed, performance‑minded." },
          { title: "Careers", text: "We’re hiring across engineering, data science and customer success." },
        ].map((b) => (
          <div key={b.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-white font-semibold mb-2">{b.title}</h3>
            <p className="text-slate-300 text-sm">{b.text}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-white font-semibold mb-2">Team</h3>
        <p className="text-slate-300 text-sm">Team profiles coming soon.</p>
      </div>
    </div>
  );
}
