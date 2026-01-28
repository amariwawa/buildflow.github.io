import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Building2, Award, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Building2,
    value: 247,
    suffix: "+",
    label: "Projects Completed",
    description: "Residential & commercial builds delivered on time",
  },
  {
    icon: Calendar,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Building trust through consistent excellence",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on post-project client surveys",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Expert Team",
    description: "Licensed contractors and project managers",
  },
];

export function StatsSection() {
  return (
    <Section dark>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="glass-card rounded-xl p-6 text-center card-hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <stat.icon className="w-7 h-7 text-primary" />
            </div>
            <p className="text-4xl font-bold text-foreground">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-foreground font-semibold mt-2">{stat.label}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
