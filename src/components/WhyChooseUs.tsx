import { Shield, HeartHandshake, Clock, BadgeIndianRupee, Headphones, Award } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: BadgeIndianRupee,
    title: "Best Price Guarantee",
    description: "We offer the most competitive prices with no hidden charges. Your dream trip at pocket-friendly rates.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Travel with peace of mind. All our tours are fully insured and follow strict safety protocols.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted by 10K+",
    description: "Join thousands of happy travelers who have explored India with us. 4.9★ average rating.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is available round the clock to assist you throughout your journey.",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Change your plans? No problem! Enjoy free cancellation and easy date modifications.",
  },
  {
    icon: Award,
    title: "Curated Experiences",
    description: "Every package is thoughtfully designed by travel experts for authentic Indian experiences.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why TriSea Adventures?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Travelers{" "}
            <span className="text-accent">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just a travel company – we're your partners in creating
            unforgettable memories across incredible India.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <feature.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
