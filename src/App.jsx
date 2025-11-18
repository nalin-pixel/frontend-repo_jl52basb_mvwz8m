import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import Developers from "./pages/Developers";
import Pricing from "./pages/Pricing";
import CaseStudies from "./pages/CaseStudies";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="platform" element={<Platform />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="developers" element={<Developers />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
