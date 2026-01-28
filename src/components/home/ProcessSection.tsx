import { Section, SectionHeader } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { 
  ClipboardList, 
  FileCheck, 
  HardHat, 
  Building, 
  PaintBucket, 
  Key 
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Planning & Design",
    description: "Define scope, budget, and timeline with our expert consultants.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Permits & Approvals",
    description: "We handle all permits and regulatory requirements.",
  },
  {
    icon: HardHat,
    number: "03",
    title: "Foundation Work",
    description: "Ground preparation and structural foundation laid.",
  },
  {
    icon: Building,
    number: "04",
    title: "Structure & Framing",
    description: "The building takes shape with walls and roofing.",
  },
  {
    icon: PaintBucket,
    number: "05",
    title: "Finishing Touches",
    description: "Interior fit-out, electrical, plumbing, and aesthetics.",
  },
  {
    icon: Key,
    number: "06",
    title: "Handover",
    description: "Final inspection and keys delivered to you.",
  },
];

export function ProcessSection() {
  return (
    <Section id="process">
      <SectionHeader
        badge="Our Process"
        title="How BuildFlow Works"
        description="A transparent, systematic approach to construction that keeps you informed at every stage."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="glass-card rounded-xl p-6 h-full card-hover">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-4xl font-bold text-muted/50 group-hover:text-primary/30 transition-colors">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
            
            {/* Connector line */}
            {index < steps.length - 1 && index % 3 !== 2 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
