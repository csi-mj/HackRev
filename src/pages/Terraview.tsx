import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Trophy, 
  GraduationCap,
  Database,
  FileText,
  ArrowLeft,
  Phone,
  Mail
} from "lucide-react";
import terraviewPoster from "@/assets/Terraview.jpeg";
import csiLogo from "@/assets/csi_logo.png";
import ecellLogo from "@/assets/ecell_logo.png";
import acesLogo from "@/assets/aces.png";

const Terraview = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <Link to="/#themes" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Hackathon Themes
          </Link>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Terraview Track
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <GraduationCap className="h-6 w-6 text-yellow-600" />
            <Badge variant="secondary" className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30 text-lg">
              Exclusive for 1st Year Students
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data Analytics track for first-year students using Terraview software
          </p>
        </div>

        {/* Poster Section */}
        <div className="mb-12 animate-slide-up">
          <Card className="glass-effect p-8 shadow-card border border-border text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Event Poster</h2>
            <div className="flex justify-center">
              <img 
                src={terraviewPoster} 
                alt="Terraview Track Poster" 
                className="max-w-full h-auto rounded-lg shadow-lg border border-border"
              />
            </div>
          </Card>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="glass-effect p-8 shadow-card border border-border animate-slide-up">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-primary" />
              Event Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Date:</span>
                <span>Saturday, November 8, 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Time:</span>
                <span>10:30 AM – 1:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Venue:</span>
                <span>Seminar Hall, Block 4, Muffakham Jah College of Engineering and Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Organized By:</span>
                <span>E-Cell & CSI</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Prize Pool:</span>
                <span className="text-primary font-bold">₹30,000</span>
              </div>
            </div>
          </Card>

          <Card className="glass-effect p-8 shadow-card border border-border animate-slide-up">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
              <Database className="h-6 w-6 mr-3 text-primary" />
              Track Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Data Analytics Using Terraview track introduces first-year students to the exciting field of data analysis using the Terraview software. This beginner-friendly track is tailored for participants with minimal coding knowledge, offering them an opportunity to explore the fundamentals of data processing, analysis, and visualization.
            </p>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Participants will:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Use datasets provided to create problem statements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Perform analysis to uncover insights using Terraview
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Generate compelling visualizations in OWBX format
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Present work through PPTs, abstracts, and OWBX files
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Guidelines */}
        <Card className="glass-effect p-8 shadow-card border border-border mb-12 animate-slide-up">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
            <FileText className="h-6 w-6 mr-3 text-primary" />
            Track Guidelines
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Eligibility:</h3>
              <p className="text-muted-foreground">Only first-year students are allowed to participate in this track.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Team Composition:</h3>
              <p className="text-muted-foreground">This track is individual-based; no teams are allowed.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Evaluation Criteria:</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Innovation</li>
                <li>• Insightfulness</li>
                <li>• Practical Relevance</li>
                <li>• Technical Execution</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Registration Notice */}
        <Card className="glass-effect p-8 shadow-card border border-border mb-12 animate-slide-up">
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">Registration Notice</h2>
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Registrations will begin after <span className="font-semibold text-primary">25th October 2025</span>
            </p>
            <p className="text-muted-foreground">
              Stay tuned for more updates on registration opening!
            </p>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="glass-effect p-8 shadow-card border border-border mb-12 animate-slide-up">
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="hackrevolution@mjcollege.ac.in" className="text-primary hover:text-primary/80">
              hackrevolution@mjcollege.ac.in
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+919908784538" className="text-primary hover:text-primary/80">
                +91 99087 84538
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+917780227803" className="text-primary hover:text-primary/80">
                +91 77802 27803
              </a>
            </div>
          </div>
        </Card>


        {/* Organized By */}
        <Card className="glass-effect p-8 shadow-card border border-border text-center animate-slide-up">
          <h2 className="text-2xl font-heading font-bold mb-6">Organized By</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-6">
            <img src={csiLogo} alt="CSI" className="h-24 sm:h-28 md:h-40 w-auto max-w-full object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]" />
            <img src={ecellLogo} alt="E‑Cell" className="h-24 sm:h-28 md:h-40 w-auto max-w-full object-contain drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]" />
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <span className="text-lg md:text-xl">Powered by</span>
            <img
              src={acesLogo}
              alt="ACES"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Terraview;
