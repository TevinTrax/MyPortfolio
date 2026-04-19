import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaPaintBrush,
  FaRocket,
  FaCode,
  FaTools,
} from "react-icons/fa";

const skills = [
  {
    icon: FaReact,
    title: "Frontend Development",
    desc: "React, JavaScript, Tailwind CSS",
  },
  {
    icon: FaServer,
    title: "Backend Integration",
    desc: "Node.js, Express, REST APIs",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    desc: "Responsive, Accessible Design",
  },
  {
    icon: FaRocket,
    title: "Performance",
    desc: "Optimization & Speed",
  },
  {
    icon: FaCode,
    title: "Web Standards",
    desc: "HTML5, CSS3, ES6+",
  },
  {
    icon: FaTools,
    title: "Modern Tools",
    desc: "Vite, Git, CI/CD",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* 🔹 Animated Wrapper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="text-center mb-4"
          >
            <span className="px-4 py-1 text-sm rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
              💡 My Expertise
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl text-center font-bold mb-6"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Me
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center text-gray-400 leading-relaxed mb-16"
          >
            I design and build scalable, high-performance applications with a strong
            focus on user experience, performance, and clean architecture.
            My goal is to create products that not only work—but feel exceptional.
          </motion.p>

          {/* 🔥 Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition duration-300 hover:border-emerald-400/30"
                >
                  {/* Glow Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 blur-xl" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <Icon className="text-4xl text-emerald-400 mb-4" />
                    <h2 className="text-lg font-semibold mb-2">
                      {skill.title}
                    </h2>
                    <p className="text-gray-400 text-sm">{skill.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 🔹 Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default About;