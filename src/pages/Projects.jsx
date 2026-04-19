import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaUsers, FaBolt } from "react-icons/fa";

const filters = ["All", "Fullstack", "Frontend"];

const projects = [
  {
    title: "RentMate System",
    category: "Fullstack",
    description: "Rental management system with analytics dashboard.",
    tech: ["React", "Node.js", "PostgreSQL"],
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x401",
    ],
    live: "https://your-vercel-link.vercel.app",
    github: "https://github.com/TevinTrax/RentMate.git",
    stats: {
      users: "1.2K+",
      performance: "98%",
      uptime: "99.9%",
    },
  },
  {
    title: "Portfolio UI",
    category: "Frontend",
    description: "Modern animated portfolio UI.",
    tech: ["React", "Tailwind"],
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x402",
    ],
    live: "https://your-netlify-link.netlify.app",
    github: "https://github.com/your-repo",
    stats: {
      users: "500+",
      performance: "95%",
      uptime: "100%",
    },
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white py-20"
    >
      <div className="container mx-auto px-6">

        {/*HEADER */}
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-10">
          My{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        {/* 🔥 FILTER TABS */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                activeFilter === f
                  ? "bg-emerald-500 text-white"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {filtered.map((project, i) => (
            <TiltCard key={i}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl cursor-pointer"
                onClick={() => {
                  setSelected(project);
                  setCurrentImg(0);
                }}
              >
                <img
                  src={project.images[0]}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* 📊 ANALYTICS */}
                  <div className="flex justify-between text-xs text-gray-300 mb-4">
                    <span className="flex items-center gap-1">
                      <FaUsers /> {project.stats.users}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaBolt /> {project.stats.performance}
                    </span>
                    <span>{project.stats.uptime}</span>
                  </div>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/10 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0f172a] p-6 rounded-2xl max-w-2xl w-full border border-white/10"
          >
            {/* 🖼️ CAROUSEL */}
            <div className="relative mb-4">
              <img
                src={selected.images[currentImg]}
                className="w-full h-64 object-cover rounded-xl"
              />

              <button
                onClick={() =>
                  setCurrentImg(
                    (prev) =>
                      (prev - 1 + selected.images.length) %
                      selected.images.length
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-2 py-1 rounded"
              >
                ◀
              </button>

              <button
                onClick={() =>
                  setCurrentImg(
                    (prev) => (prev + 1) % selected.images.length
                  )
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-2 py-1 rounded"
              >
                ▶
              </button>
            </div>

            <h2 className="text-2xl font-bold mb-2">
              {selected.title}
            </h2>

            <p className="text-gray-400 mb-4">
              {selected.description}
            </p>

            {/* 📊 ANALYTICS */}
            <div className="flex gap-6 text-sm mb-4">
              <span>👥 {selected.stats.users}</span>
              <span>⚡ {selected.stats.performance}</span>
              <span>🟢 {selected.stats.uptime}</span>
            </div>

            {/* LINKS */}
            <div className="flex gap-4">
              <a
                href={selected.live}
                target="_blank"
                className="bg-emerald-500 px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live
              </a>

              <a
                href={selected.github}
                target="_blank"
                className="border border-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FaGithub /> Code
              </a>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 text-red-400 text-sm"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}

/* 🔥 3D TILT COMPONENT */
function TiltCard({ children }) {
  const [style, setStyle] = useState({});

  const handleMove = (e) => {
    const { offsetWidth: w, offsetHeight: h } = e.currentTarget;
    const { offsetX: x, offsetY: y } = e.nativeEvent;

    const rotateX = ((y - h / 2) / h) * -10;
    const rotateY = ((x - w / 2) / w) * 10;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle({ transform: "none" })}
      style={style}
      className="transition-transform duration-200"
    >
      {children}
    </div>
  );
}

export default Projects;