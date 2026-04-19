import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Web Developer";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white"
    >
      {/* 🔥 Animated Background Glow */}
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -60, 60, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-[-100px] right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-6 py-20 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-block mb-6 px-4 py-1 text-sm rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
          >
            Available for freelance & full-time work
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Echakara Tevin Okemer
            </span>
          </motion.h1>

          {/* Typing Role */}
          <motion.h2
            variants={fadeUp}
            className="text-xl md:text-2xl text-gray-300 mb-6 h-[30px]"
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-gray-400 leading-relaxed mb-10"
          >
            I build scalable, high-performance web applications that feel like real SaaS products.
            Clean UI, smooth UX, and powerful backend systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-500/20"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 hover:border-emerald-400 px-8 py-3 rounded-xl font-semibold backdrop-blur-md"
            >
              Hire Me
            </motion.a>
          </motion.div>
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

export default Home;