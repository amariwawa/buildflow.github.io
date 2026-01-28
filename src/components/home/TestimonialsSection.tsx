import { Section, SectionHeader } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Homeowner, Residential Project",
    content: "BuildFlow transformed how I experienced my home construction. I could see progress photos daily and knew exactly when each phase would complete. Zero stress.",
    rating: 5,
  },
  {
    name: "Sarah Martinez",
    role: "CEO, Tech Startup",
    content: "Our office build was completed 2 weeks ahead of schedule. The real-time dashboard meant I never had to chase updates—everything was transparent from day one.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Property Developer",
    content: "As someone who's done dozens of builds, BuildFlow's approach to transparency is industry-leading. Change orders are clear, costs are upfront. Highly recommend.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <Section dark>
      <SectionHeader
        badge="Testimonials"
        title="What Our Clients Say"
        description="Real feedback from homeowners and businesses who built with us."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="glass-card rounded-xl p-6 card-hover relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
            
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-foreground leading-relaxed mb-6">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
