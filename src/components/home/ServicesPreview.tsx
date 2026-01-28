import { Section, SectionHeader } from "@/components/ui/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import renovationImg from "@/assets/project-renovation.jpg";

const services = [
  {
    title: "Residential Construction",
    description: "Custom homes and residential developments built to your vision with complete transparency.",
    image: residentialImg,
    features: ["Custom Homes", "Multi-Family", "Luxury Builds"],
    link: "/services#residential",
  },
  {
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and industrial facilities delivered on time.",
    image: commercialImg,
    features: ["Office Buildings", "Retail Spaces", "Industrial"],
    link: "/services#commercial",
  },
  {
    title: "Renovations",
    description: "Transform existing spaces with our expert renovation and remodeling services.",
    image: renovationImg,
    features: ["Kitchen & Bath", "Full Remodels", "Additions"],
    link: "/services#renovations",
  },
];

export function ServicesPreview() {
  return (
    <Section>
      <SectionHeader
        badge="Our Services"
        title="Building Excellence Across All Sectors"
        description="From ground-up construction to complex renovations, we deliver premium results with full project transparency."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border card-hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link to={service.link}>
                <Button variant="outline" size="sm" className="group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services">
          <Button variant="default" size="lg">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
