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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent ✉️",
      description: "We’ll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: (
        <a
          href="https://maps.google.com/?q=TRENDZ+UPTOWN+Kavuri+Hills+Madhapur"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          TRENDZ UPTOWN, Rd No 7, Kavuri Hills, Madhapur, Hyderabad,
          Telangana – 500081
        </a>
      ),
    },
    {
      icon: Phone,
      title: "Call Us",
      content: (
        <a
          href="tel:+919666092444"
          className="hover:text-accent transition-colors"
          aria-label="Call Tri Sea Adventures"
        >
          +91 96660 92444
        </a>
      ),
    },
    {
      icon: Mail,
      title: "Email Us",
      content: (
        <a
          href="mailto:info@triseaadventures.com"
          className="hover:text-accent transition-colors"
          aria-label="Email Tri Sea Adventures"
        >
          info@triseaadventures.com
        </a>
      ),
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: (
        <>
          <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
          <p>Sunday: 10:00 AM – 4:00 PM</p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Let’s Plan Your <span className="text-accent">Dream Trip</span>
          </h1>
          <p className="text-muted-foreground">
            Have questions or want a custom itinerary? Our travel experts are
            here to help.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-5 shadow-soft"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      {info.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-6 md:p-8 shadow-soft">
            <h2 className="font-serif text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <Textarea
                name="message"
                placeholder="Tell us about your travel plans..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" disabled={isSubmitting} className="btn-hero">
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Prefer to Talk Directly?
        </h2>
        <p className="text-primary-foreground/80 mb-6">
          Call our travel experts for instant assistance.
        </p>
        <a
          href="tel:+919666092444"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-lg hover:bg-saffron-dark transition-colors"
        >
          <Phone className="h-5 w-5" />
          +91 96660 92444
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
