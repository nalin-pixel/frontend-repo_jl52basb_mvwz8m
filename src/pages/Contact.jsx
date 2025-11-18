import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Talk to an Optimisation Expert</h1>
      <p className="text-slate-300 mb-8 max-w-3xl">Book a demo of Webtrends Optimize tailored to your stack and KPIs. We’ll share relevant case studies and a recommended rollout plan.</p>

      {submitted ? (
        <div className="rounded-xl border border-emerald-600/40 bg-emerald-600/10 text-emerald-200 p-6">
          Thank you — we’ll be in touch shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input required className="w-full rounded-md bg-slate-950 border border-slate-800 px-3 py-2 text-sm text-white" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-slate-300 mb-1">Work Email</label>
            <input type="email" required className="w-full rounded-md bg-slate-950 border border-slate-800 px-3 py-2 text-sm text-white" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-slate-300 mb-1">Company</label>
            <input className="w-full rounded-md bg-slate-950 border border-slate-800 px-3 py-2 text-sm text-white" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-slate-300 mb-1">What would you like to achieve?</label>
            <textarea rows="4" className="w-full rounded-md bg-slate-950 border border-slate-800 px-3 py-2 text-sm text-white" />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <button className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 text-sm font-medium shadow-md">Book a Demo</button>
            <span className="text-slate-400 text-sm">or email: hello@wto.example</span>
          </div>
        </form>
      )}
    </div>
  );
}
