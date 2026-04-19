import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const phoneNumber = "254790636213"; // 

  const defaultMessage =
    "Hello Tevin, I came across your portfolio and I'm interested in working with you.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  // 🔥 Auto popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* POPUP */}
      <AnimatePresence>
        {showPopup && !open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-24 right-6 bg-[#0f172a] border border-white/10 text-white p-4 rounded-xl shadow-xl w-72 z-50"
          >
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-semibold">
                👋 Need help or have a project?
              </p>
              <button onClick={() => setShowPopup(false)}>
                <FaTimes className="text-gray-400 hover:text-white" />
              </button>
            </div>

            <p className="text-xs text-gray-400 mb-3">
              Chat with me directly on WhatsApp.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg text-sm font-medium"
            >
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/*CHAT BOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-24 right-6 w-80 bg-[#020617] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-green-500 p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">WhatsApp Chat</h3>
                <p className="text-xs">Typically replies instantly</p>
              </div>
              <button onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 text-sm text-gray-300">
              <p className="mb-3">
                Hi 👋<br />
                I'm available to help you with your project.
              </p>

              <a
                href={whatsappURL}
                target="_blank"
                className="block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium"
              >
                Continue on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setOpen(!open);
          setShowPopup(false);
        }}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp size={24} />
      </motion.button>
    </>
  );
}

export default WhatsAppChat;