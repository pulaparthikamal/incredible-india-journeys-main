import { Users, Award, Globe, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-india.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Happy Travelers" },
  { icon: Globe, value: "10+", label: "Destinations" },
  { icon: Award, value: "6+", label: "Years Experience" },
  { icon: Heart, value: "98%", label: "Satisfaction Rate" },
];

const team = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    description: "With 20 years in the travel industry, Rahul's vision built TriSea Adventures from ground up.",
  },
  {
    name: "Priya Menon",
    role: "Head of Operations",
    description: "Priya ensures every trip runs seamlessly with her meticulous attention to detail.",
  },
  {
    name: "Amit Patel",
    role: "Lead Tour Designer",
    description: "Amit crafts unique itineraries that showcase the best of India's diversity.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Crafting Unforgettable{" "}
              <span className="text-accent">Indian Journeys</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Since 2010, TriSea Adventures has been India's trusted travel partner, 
              helping thousands explore the incredible diversity of our nation. 
              From the snow peaks of Kashmir to the backwaters of Kerala, 
              we turn travel dreams into cherished memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <span className="block text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </span>
                <span className="text-primary-foreground/70">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Passion for{" "}
                <span className="text-accent">Authentic Travel</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TriSea Adventures was born from a simple belief: every corner of India 
                  has a story worth telling, and every traveler deserves to experience 
                  it authentically. What started as a small venture in Delhi has grown 
                  into one of India's most trusted travel companies.
                </p>
                <p>
                  Our team of passionate travel designers personally scouts each 
                  destination, handpicks the best accommodations, and crafts 
                  itineraries that balance must-see highlights with hidden gems 
                  only locals know about.
                </p>
                <p>
                  We believe in responsible tourism that benefits local communities, 
                  preserves cultural heritage, and protects India's natural wonders 
                  for future generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the{" "}
              <span className="text-accent">Travel Experts</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Behind every great trip is a team of passionate individuals dedicated 
              to making your journey unforgettable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 text-center shadow-soft"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary-foreground">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              What Drives{" "}
              <span className="text-accent">Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Authentic Experiences
              </h3>
              <p className="text-muted-foreground text-sm">
                We go beyond tourist traps to deliver genuine cultural immersion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Responsible Travel
              </h3>
              <p className="text-muted-foreground text-sm">
                We support local communities and protect India's natural heritage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Excellence Always
              </h3>
              <p className="text-muted-foreground text-sm">
                From planning to execution, we strive for perfection in every detail.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
