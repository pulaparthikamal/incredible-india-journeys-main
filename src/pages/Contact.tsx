import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent! ✉️",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["TRENDZ UPTOWN, C9VX+26H, Rd No 7, Kakatiya Hills, Guttala_Begumpet, Kavuri Hills, Madhapur, Hyderabad, Telangana - 500081"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9666092444"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@triseaadventures.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Plan Your{" "}
              <span className="text-accent">Dream Trip</span>
            </h1>
            <p className="text-muted-foreground">
              Have questions about our tours? Want to customize a package? 
              Our travel experts are here to help you create the perfect Indian adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-5 shadow-soft"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
                <h2 className="font-serif text-2xl font-semibold text-card-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9666092444"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Tour Inquiry"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Your Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your travel plans, preferred dates, number of travelers, and any special requirements..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto btn-hero"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-card h-96 bg-muted"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3579313725722!2d78.39553667493607!3d17.442574383454016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9111fe31029b%3A0xd8f0defeb3d8bc6b!2sTRENDZ%20UPTOWN!5e0!3m2!1sen!2sin!4v1768989571996!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tri Sea Adventures Office Location"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Prefer to Talk Directly?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Our travel experts are available to help you plan the perfect trip. 
              Call us now for instant assistance!
            </p>
            <a
              href="tel:+919666092444"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-lg hover:bg-saffron-dark transition-colors"
            >
              <Phone className="h-5 w-5" />
              +91 9666092444
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
