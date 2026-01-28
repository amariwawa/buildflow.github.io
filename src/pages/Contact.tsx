import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle2
} from "lucide-react";

const budgetRanges = [
  "Under $100K",
  "$100K - $250K",
  "$250K - $500K",
  "$500K - $1M",
  "$1M+",
];

const projectTypes = [
  "Residential - New Build",
  "Residential - Renovation",
  "Commercial - New Build",
  "Commercial - Renovation",
  "Project Management Only",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    location: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      location: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Let's Build Something Great Together
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              Tell us about your project and we'll get back to you within 24 hours 
              with a personalized consultation.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: "123 Construction Ave\nDowntown, City 10001" },
                  { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                  { icon: Mail, label: "Email", value: "hello@buildflow.com" },
                  { icon: Clock, label: "Hours", value: "Mon-Fri: 8AM - 6PM\nSat: 9AM - 2PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">
                What Happens Next?
              </h4>
              <ul className="space-y-3">
                {[
                  "We review your project details",
                  "Schedule a consultation call",
                  "Provide a detailed proposal",
                  "Begin your project journey",
                ].map((step, index) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Project Intake Form
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    required
                    className="bg-background border-border"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="bg-background border-border"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="bg-background border-border"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Project Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="City, State"
                    required
                    className="bg-background border-border"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    required
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget *</Label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    required
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Timeline */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="timeline">Desired Start Date / Timeline</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g., Q2 2024, ASAP, Flexible"
                    className="bg-background border-border"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project: size, style, special requirements, etc."
                    required
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full mt-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    Submit Project Request
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
