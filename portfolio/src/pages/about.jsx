import { FaReact, FaServer, FaPaintBrush, FaRocket, FaCode, FaTools } from "react-icons/fa";

function About() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-900/90 to-emerald-700/90 text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-6">
          About <span className="text-emerald-400">Me</span>
        </h1>

        <p className="max-w-3xl mx-auto text-base md:text-lg text-center text-gray-200 leading-relaxed mb-12">
          I'm a web developer passionate about crafting beautiful, functional, and
          user-friendly web experiences. With expertise in modern technologies and
          a keen eye for design, I transform complex problems into simple,
          elegant solutions.
        </p>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skill Card 1 */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition duration-300">
            <FaReact className="text-4xl text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Frontend Development</h2>
            <p className="text-gray-300">React, TypeScript, Tailwind CSS</p>
          </div>

          {/* Skill Card 2 */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition duration-300">
            <FaServer className="text-4xl text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Backend Integration</h2>
            <p className="text-gray-300">Node.js, PHP, REST APIs</p>
          </div>

          {/* Skill Card 3 */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition duration-300">
            <FaPaintBrush className="text-4xl text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
            <p className="text-gray-300">Responsive, Accessible Design</p>
          </div>

          {/* Skill Card 4 */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition duration-300">
            <FaRocket className="text-4xl text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Performance</h2>
            <p className="text-gray-300">Optimization & Speed</p>
          </div>

          {/* Skill Card 5 */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition duration-300">
            <FaCode className="text-4xl text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Web Standards</h2>
            <p className="text-gray-300">HTML5, CSS3, ES6+</p>
          </div>

          {/* Skill Card 6 */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition duration-300">
            <FaTools className="text-4xl text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Modern Tools</h2>
            <p className="text-gray-300">Vite, Git, CI/CD</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
