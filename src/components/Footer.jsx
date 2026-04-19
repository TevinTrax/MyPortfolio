import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const phoneNumber = "2547XXXXXXXX"; // 🔥 replace

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello Tevin, I’d like to work with you."
  )}`;

  return (
    <footer className="relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white pt-16 pb-8 border-t border-white/10">
      
      {/* 🔥 Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 🔹 TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              My<span className="text-emerald-400">Portfolio</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Building modern, scalable web applications with clean UI and powerful backend systems.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-emerald-400">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-400">About</a></li>
              <li><a href="#projects" className="hover:text-emerald-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-emerald-400">Contact</a></li>
            </ul>
          </motion.div>

          {/* CTA + Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-semibold mb-4">Start a Project</h3>

            <a
              href={whatsappLink}
              target="_blank"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-medium mb-4 shadow-lg shadow-emerald-500/20"
            >
              Chat on WhatsApp
            </a>

            <div className="flex gap-4 text-xl text-gray-400">
              <a href="https://github.com/TevinTrax" className="hover:text-emerald-400">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/echakara-tevin-269187377?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-emerald-400">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-emerald-400">
                <FaTwitter />
              </a>
              <a href={whatsappLink} className="hover:text-emerald-400">
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 🔹 DIVIDER */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {year} Echakara Tevin Okemer. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-emerald-400 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-emerald-400 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;