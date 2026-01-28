import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Building2, 
  Paintbrush, 
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign
} from "lucide-react";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import renovationImg from "@/assets/project-renovation.jpg";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Construction",
    description: "From custom single-family homes to multi-unit developments, we bring your residential vision to life with precision and transparency.",
    image: residentialImg,
    scope: [
      "Custom home design and construction",
      "Multi-family residential developments",
      "Luxury home building",
      "Sustainable and energy-efficient homes",
    ],
    timeline: "6-18 months depending on scope",
    process: "Consultation → Design → Permits → Construction → Walkthrough → Handover",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Projects",
    description: "Professional commercial construction for offices, retail, and industrial spaces. Built to code, on time, and within budget.",
    image: commercialImg,
    scope: [
      "Office buildings and corporate spaces",
      "Retail and shopping centers",
      "Industrial and warehouse facilities",
      "Mixed-use developments",
    ],
    timeline: "8-24 months depending on scale",
    process: "Feasibility Study → Design-Build → Permits → Construction → Commissioning → Occupancy",
  },
  {
    id: "renovations",
    icon: Paintbrush,
    title: "Renovations & Remodeling",
    description: "Transform existing spaces with expert renovation services. Kitchen, bath, full remodels, and additions.",
    image: renovationImg,
    scope: [
      "Kitchen and bathroom renovations",
      "Full home remodeling",
      "Home additions and extensions",
      "Historic restoration",
    ],
    timeline: "2-8 months depending on scope",
    process: "Assessment → Design → Demolition → Construction → Finishing → Final Walkthrough",
  },
  {
    id: "management",
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Expert oversight and coordination for complex construction projects. We manage timelines, budgets, and quality.",
    image: residentialImg,
    scope: [
      "Full project oversight and coordination",
      "Budget management and cost control",
      "Vendor and contractor management",
      "Quality assurance and inspections",
    ],
    timeline: "Varies by project",
    process: "Planning → Scheduling → Execution → Monitoring → Reporting → Closeout",
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              From concept to completion, we deliver premium construction services with 
              full transparency at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <Section>
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>

                  {/* Scope */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Scope
                    </h4>
                    <ul className="space-y-2">
                      {service.scope.map((item) => (
                        <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline & Process */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="glass-card rounded-lg p-4">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">Timeline</span>
                      </div>
                      <p className="text-foreground text-sm">{service.timeline}</p>
                    </div>
                    <div className="glass-card rounded-lg p-4">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm font-medium">Process</span>
                      </div>
                      <p className="text-foreground text-xs">{service.process}</p>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="default" size="lg">
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Get in touch with our team to discuss your construction needs and receive a detailed project proposal.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
