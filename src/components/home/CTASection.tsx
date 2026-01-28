import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-navy opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Ready to Build 
            <span className="text-primary"> Without the Anxiety?</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who experience construction the way it should be—
            transparent, on-time, and stress-free.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
