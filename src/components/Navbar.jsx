import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/platform", label: "Platform" },
  { to: "/solutions", label: "Solutions" },
  { to: "/developers", label: "Developers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact / Demo" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-blue-500 to-cyan-400 grid place-items-center text-white font-bold">W</div>
            <span className="text-white font-semibold tracking-tight">Webtrends Optimize</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg hover:brightness-110 transition"
            >
              Book a Demo
            </Link>
          </nav>
          <button
            className="lg:hidden text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-700/50">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 text-sm font-medium shadow-md"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
