import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-4xl font-semibold text-white mb-3">Page not found</h1>
      <p className="text-slate-300 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 text-sm font-medium shadow-md">Return home</Link>
    </div>
  )
}
