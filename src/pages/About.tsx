import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Shield, 
  Target, 
  Users, 
  Award,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Complete visibility into every phase of your project. No hidden costs, no surprises.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to detail ensures every build meets the highest standards.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside you, treating your project as if it were our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Industry-leading practices and premium materials for lasting results.",
  },
];

const certifications = [
  "Licensed General Contractor",
  "OSHA Safety Certified",
  "LEED Accredited",
  "Bonded & Insured",
  "Energy Star Partner",
  "BBB A+ Rating",
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Building Trust Through Transparency
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              For over 15 years, BuildFlow has delivered premium construction with a commitment 
              to clear communication, honest pricing, and exceptional craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                BuildFlow was founded on a simple belief: construction doesn't have to be stressful. 
                Too many homeowners and businesses endure projects plagued by unclear timelines, 
                surprise costs, and constant uncertainty.
              </p>
              <p>
                We built our platform to solve this. Every project gets a dedicated dashboard where 
                clients can see real-time progress, upcoming milestones, budget tracking, and direct 
                communication with their project team.
              </p>
              <p>
                Today, we've completed over 247 projects with a 98% client satisfaction rate. 
                Our team of 50+ licensed professionals brings expertise across residential, 
                commercial, and renovation construction.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "247+", label: "Projects Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Team Members" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <SectionHeader
          badge="Our Values"
          title="What Drives Us"
          description="Core principles that guide every project we undertake."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="glass-card rounded-xl p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              badge="Credentials"
              title="Licensed & Certified"
              description="We maintain the highest industry standards and certifications to ensure quality and safety."
              align="left"
            />

            <div className="grid grid-cols-2 gap-4 mt-8">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Build With Us?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and show you how our transparent approach 
              can make your construction experience stress-free.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
