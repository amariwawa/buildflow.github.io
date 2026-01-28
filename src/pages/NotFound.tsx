import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HardHat, Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
            <HardHat className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Page Under Construction
          </h2>
          <p className="text-muted-foreground mb-8">
            Looks like this page is still being built. Let's get you back to solid ground.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="hero" size="lg">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
