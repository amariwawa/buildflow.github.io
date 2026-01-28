import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectTimeline } from "@/components/dashboard/ProjectTimeline";
import { StatCard } from "@/components/dashboard/StatCard";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { 
  Lock, 
  Building2, 
  Calendar, 
  DollarSign, 
  Camera,
  FileText,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Clock
} from "lucide-react";

// Mock project data
const mockProject = {
  name: "Modern Family Residence",
  address: "456 Oak Street, Downtown",
  startDate: "Jan 15, 2024",
  estimatedCompletion: "Aug 30, 2024",
  progress: 65,
  budget: {
    total: 450000,
    spent: 285000,
    remaining: 165000,
  },
  timeline: [
    {
      id: "1",
      title: "Planning & Design",
      description: "Initial consultations, architectural plans, and permits.",
      status: "completed" as const,
      date: "Jan 15 - Feb 28",
    },
    {
      id: "2",
      title: "Permits & Approvals",
      description: "Building permits, HOA approvals, utility connections.",
      status: "completed" as const,
      date: "Mar 1 - Mar 20",
    },
    {
      id: "3",
      title: "Foundation",
      description: "Site preparation, excavation, and foundation pour.",
      status: "completed" as const,
      date: "Mar 21 - Apr 15",
    },
    {
      id: "4",
      title: "Structure & Framing",
      description: "Wall framing, roof structure, and exterior sheathing.",
      status: "in-progress" as const,
      date: "Apr 16 - Jun 10",
    },
    {
      id: "5",
      title: "Systems & Finishing",
      description: "Electrical, plumbing, HVAC, drywall, and finishes.",
      status: "pending" as const,
      date: "Jun 11 - Aug 15",
    },
    {
      id: "6",
      title: "Final Walkthrough & Handover",
      description: "Final inspection, punch list, and key handover.",
      status: "pending" as const,
      date: "Aug 16 - Aug 30",
    },
  ],
  recentUpdates: [
    { date: "Today", text: "Roof trusses installed, framing 85% complete" },
    { date: "Yesterday", text: "Electrical rough-in started on first floor" },
    { date: "May 28", text: "Window frames delivered and staged" },
  ],
  pendingApprovals: [
    { id: "1", title: "Change Order #003", description: "Upgraded kitchen fixtures (+$4,500)", status: "pending" },
  ],
};

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginCode, setLoginCode] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginCode === "demo" || loginCode.length >= 4) {
      setIsLoggedIn(true);
      toast.success("Welcome to your project dashboard!");
    } else {
      toast.error("Please enter a valid access code");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="section-container">
            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Client Portal
                </h1>
                <p className="text-muted-foreground">
                  Enter your project access code to view your dashboard
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleLogin}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Access Code
                    </label>
                    <Input
                      type="text"
                      value={loginCode}
                      onChange={(e) => setLoginCode(e.target.value)}
                      placeholder="Enter your code (try 'demo')"
                      className="bg-background border-border text-center text-lg tracking-widest"
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Access Dashboard
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-6">
                  Your access code was provided in your project welcome email.
                  <br />
                  Contact us if you need assistance.
                </p>
              </motion.form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Not a client yet?{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Start a project
                </a>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Dashboard Header */}
      <section className="pt-32 pb-8 bg-card border-b border-border">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <p className="text-primary text-sm font-medium mb-1">Project Dashboard</p>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                {mockProject.name}
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                {mockProject.address}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Documents
              </Button>
              <Button variant="outline" size="sm">
                <Camera className="w-4 h-4 mr-2" />
                Photos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={TrendingUp}
            value={`${mockProject.progress}%`}
            label="Overall Progress"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            icon={Calendar}
            value={mockProject.estimatedCompletion}
            label="Est. Completion"
          />
          <StatCard
            icon={DollarSign}
            value={`$${(mockProject.budget.spent / 1000).toFixed(0)}K`}
            label={`of $${(mockProject.budget.total / 1000).toFixed(0)}K Budget`}
          />
          <StatCard
            icon={Clock}
            value="On Track"
            label="Schedule Status"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Project Timeline
            </h2>
            <ProjectTimeline steps={mockProject.timeline} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Budget Summary */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Budget Overview
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Spent</span>
                    <span className="text-foreground font-medium">
                      ${mockProject.budget.spent.toLocaleString()}
                    </span>
                  </div>
                  <div className="progress-track">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(mockProject.budget.spent / mockProject.budget.total) * 100}%` }} 
                    />
                  </div>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-border">
                  <span className="text-muted-foreground">Remaining</span>
                  <span className="text-success font-medium">
                    ${mockProject.budget.remaining.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Updates */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Recent Updates
              </h3>
              <div className="space-y-4">
                {mockProject.recentUpdates.map((update, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">{update.date}</p>
                      <p className="text-sm text-foreground">{update.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Approvals */}
            {mockProject.pendingApprovals.length > 0 && (
              <div className="glass-card rounded-xl p-6 border-l-4 border-l-warning">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-warning" />
                  Pending Approval
                </h3>
                {mockProject.pendingApprovals.map((item) => (
                  <div key={item.id} className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="success" className="flex-1">
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Dashboard;
