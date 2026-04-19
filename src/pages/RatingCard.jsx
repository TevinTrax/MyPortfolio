import { motion } from "framer-motion";
import { FaCheck, FaWhatsapp } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "$150",
    description: "Perfect for small projects and landing pages.",
    features: [
      "1-3 Pages Website",
      "Responsive Design",
      "Basic SEO",
      "1 Week Delivery",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$400",
    description: "Ideal for growing businesses and startups.",
    features: [
      "Full Website (5-10 pages)",
      "Modern UI/UX Design",
      "API Integration",
      "Performance Optimization",
      "1 Month Delivery",
    ],
    popular: true, // 
  },
  {
    name: "Enterprise",
    price: "$900+",
    description: "Advanced solutions for serious products.",
    features: [
      "Custom Web Application",
      "Full Backend System",
      "Authentication & Security",
      "Database Design",
      "Ongoing Support",
    ],
    popular: false,
  },
];

function RatingCard() {
  const phoneNumber = "254790636213"; // 🔥 replace

  const getWhatsAppLink = (plan) => {
    const message = `Hello Tevin, I'm interested in your ${plan} plan. Can we discuss further?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="pricing"
      className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white py-20"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* 🔹 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pricing{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Plans
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent pricing designed to fit your needs. Choose a plan and let’s build something amazing.
          </p>
        </motion.div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 rounded-2xl border backdrop-blur-xl transition ${
                plan.popular
                  ? "border-emerald-400 bg-white/10 scale-105"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {/* 🔥 Popular Badge */}
              {plan.popular && (
                <span className="absolute top-4 right-4 text-xs bg-emerald-500 px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Plan Name */}
              <h2 className="text-xl font-semibold mb-2">
                {plan.name}
              </h2>

              {/* Price */}
              <p className="text-3xl font-bold mb-4">
                {plan.price}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <FaCheck className="text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={getWhatsAppLink(plan.name)}
                target="_blank"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition ${
                  plan.popular
                    ? "bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/20"
                    : "border border-white/20 hover:border-emerald-400"
                }`}
              >
                <FaWhatsapp />
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RatingCard;