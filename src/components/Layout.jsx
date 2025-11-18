import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-slate-800 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-blue-500 to-cyan-400 grid place-items-center text-white font-bold">W</div>
              <span className="text-white font-semibold tracking-tight">Webtrends Optimize</span>
            </div>
            <p className="text-sm text-slate-400">Warehouse-native experimentation, personalisation and feature flags for enterprise brands.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Experiments</li>
              <li>Personalisation</li>
              <li>Feature Flags</li>
              <li>ROI Analytics</li>
              <li>Integrations</li>
              <li>Privacy & Governance</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>E-commerce</li>
              <li>Retail</li>
              <li>Travel</li>
              <li>Finance</li>
              <li>B2B</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Get in touch</h4>
            <p className="text-sm text-slate-400 mb-4">Speak to an optimisation expert and see a tailored demo.</p>
            <a href="/contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 text-sm font-medium shadow-md">Book a Demo</a>
          </div>
        </div>
        <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Webtrends Optimize. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
