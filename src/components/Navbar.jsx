import { useState, useEffect } from "react";

const sections = ["home", "about", "projects", "contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop - 120;
          if (window.scrollY >= offsetTop) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `relative px-2 py-1 transition duration-300 ${
      active === section
        ? "text-emerald-400"
        : "text-white hover:text-emerald-300"
    }`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#020617]/90 via-[#0f172a]/90 to-[#020617]/90 backdrop-blur-xl border-b border-white/10 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          My<span className="text-emerald-400">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {sections.map((section) => (
            <li key={section}>
              <a href={`#${section}`} className={linkClass(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}

                {/* Active underline */}
                {active === section && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-emerald-400 rounded-full transition-all duration-300"></span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#020617]/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center space-y-6 py-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className={`text-lg transition ${
                active === section
                  ? "text-emerald-400"
                  : "text-white hover:text-emerald-300"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;