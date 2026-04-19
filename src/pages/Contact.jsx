import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const phoneNumber = "254790636213"; // 

  // Auto popup after 3s
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    const message = `
Hello Tevin,

Name: ${form.name}
Email: ${form.email}

Project Details:
${form.message}
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white py-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* LEFT SIDE */}
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>

            <p className="text-gray-400 mb-8">
              Have a project idea or need a developer? Reach out and let’s build something amazing.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-400" />
                <a href="mailto:tevintrax@gmail.com" className="hover:text-emerald-400">
                  tevintrax@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-emerald-400" />
                <a href="tel:+254790636213" className="hover:text-emerald-400">
                  +254 790 636 213
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub className="text-emerald-400" />
                <a href="https://github.com/TevinTrax" className="hover:text-emerald-400">
                  GitHub Profile
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaLinkedin className="text-emerald-400" />
                <a href="https://www.linkedin.com/in/echakara-tevin-269187377?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-emerald-400">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            variants={fadeUp}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:border-emerald-400 outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:border-emerald-400 outline-none"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your message..."
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:border-emerald-400 outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold"
              >
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* CHAT BOX */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div className="fixed bottom-24 right-6 w-80 bg-[#020617] rounded-2xl z-50 border border-white/10">
            <div className="bg-green-500 p-4 flex justify-between">
              <span>WhatsApp Chat</span>
              <button onClick={() => setChatOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="p-4">
              <p className="mb-4 text-sm">
                Hi 👋 I'm available. Let's talk about your project.
              </p>

              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                className="block text-center bg-green-500 py-2 rounded-lg"
              >
                Open WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔥 FLOAT BUTTON */}
      <button
        onClick={() => {
          setChatOpen(!chatOpen);
          setShowPopup(false);
        }}
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp size={22} />
      </button>
    </section>
  );
}

// animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default Contact;