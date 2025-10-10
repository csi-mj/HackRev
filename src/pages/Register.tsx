import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, GraduationCap } from "lucide-react";

const Register = () => {
  // State for problem statements dialog
  const [selectedTrack, setSelectedTrack] = useState<typeof tracks[0] | null>(null);
  const tracks = [
    {
      image: "/SmartEd.png",
      title: "Smart Education",
      description: "Innovate educational technology to transform learning experiences.",
      link: "/Register/education",
      color: "from-red-500 to-pink-500",
      problemStatements: [
        "Gamified Environmental Education Platform for Schools and Colleges",
        "Smart Curriculum Activity & Attendance App",
        "Automated Student Attendance Monitoring and Analytics System for Colleges",
        "Digital Platform for Centralized Alumni Data Management and Engagement",
        "Centralised Digital Platform for Comprehensive student activity record in HEIs",
        "Smart Classroom & Timetable Scheduler"
      ]
    },
    {
      image: "/UrbanTech.png",
      title: "Urban Tech and Smart Cities",
      description: "Develop innovative solutions for smart cities and urban challenges.",
      link: "/Register/urban-tech",
      color: "from-blue-500 to-cyan-500",
      problemStatements: [
        "Real-Time Public Transport Tracking for Small Cities",
        "Smart Traffic Management System for Urban Congestion",
        "Crowdsourced Civic Issue Reporting and Resolution System",
        "AI-Based Rockfall Prediction and Alert System for Open-Pit Mines",
        "Recovery and Reuse of Fresh Water Resources",
        "Forecasting materials demand with machine learning for supply chain planning, procurement, and inventory optimization"
      ]
    },
    
    {
      image: "/Agriculture.png",
      title: "Agriculture and FoodTech",
      description: "Build technology solutions for sustainable and smart farming.",
      link: "/Register/agro-tech",
      color: "from-green-500 to-emerald-500",
      problemStatements: [
        "Image-based Breed Recognition for Cattle and Buffaloes of India",
        "Smart Crop Advisory System for Small and Marginal Farmers",
        "AI-Based Crop Recommendation System for Farmers",
        "AI-Powered Crop Yield Prediction and Optimization",
        "AI-Powered Monitoring of Crop Health, Soil Condition, and Pest Risks Using Sensor and Imaging Data",
        "Enhancing Farmer Productivity through Innovative Technology Solutions"
      ]
    },
    {
      image: "/Hardware.png",
      title: "Open Innovation (Hardware)",
      description: "Create cutting-edge hardware prototypes and IoT solutions.",
      link: "/Register/hardware",
      color: "from-purple-500 to-violet-500",
      problemStatements: []
    },
    
    {
      image: "/Terraview.png",
      title: "Terraview",
      description: "Data Analytics track for first-year students using Terraview software.",
      link: "/Terraview",
      color: "from-indigo-500 to-purple-500",
      problemStatements: [],
      isSpecial: true,
      specialLabel: "Exclusive for 1st Year Students"
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
            Choose Your Track
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-4">
            Pick a theme below to begin your registration.
          </p>
        </div>

        {/* Main 4 Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4">
          {tracks.slice(0, 4).map((track, index) => (
            <Card
              key={index}
              className="glass-effect p-4 sm:p-6 md:p-8 shadow-card transition-smooth hover:scale-105 hover:shadow-glow border border-border group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 sm:mb-6">
                {track.image ? (
                  <img src={track.image} alt={track.title} className="h-16 sm:h-20 md:h-24 w-full max-w-full object-contain rounded-xl mb-3 sm:mb-4 transition-smooth group-hover:scale-105" />
                ) : null}
                <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold mb-2 sm:mb-3">{track.title}</h2>
                <p className="text-muted-foreground text-sm sm:text-base">{track.description}</p>
              </div>
              
              <div className="flex flex-col gap-2 sm:gap-3">
                {track.problemStatements.length > 0 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-smooth text-xs sm:text-sm"
                        onClick={() => setSelectedTrack(track)}
                      >
                        View Problem Statements
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xs sm:max-w-2xl md:max-w-4xl max-h-[80vh] overflow-y-auto mx-4">
                      <DialogHeader>
                        <DialogTitle className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-center mb-4">
                          {track.title} - Problem Statements
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-3 sm:space-y-4">
                        {track.problemStatements.map((statement, idx) => (
                          <Card key={idx} className="p-3 sm:p-4 border border-border">
                            <div className="flex items-start gap-2 sm:gap-3">
                              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs sm:text-sm font-bold">
                                {idx + 1}
                              </div>
                              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{statement}</p>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                <Link to={track.link}>
                  <Button size="sm" className="w-full text-xs sm:text-sm gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                    Register Now <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Terraview Track - Centered */}
        <div className="flex justify-center mb-12 sm:mb-16 px-4">
          {tracks.slice(4).map((track, index) => (
            <Card
              key={index + 4}
              className="glass-effect p-4 sm:p-6 md:p-8 shadow-card transition-smooth hover:scale-105 hover:shadow-glow border border-border group animate-slide-up w-full max-w-xs sm:max-w-sm md:max-w-md"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="mb-4 sm:mb-6">
                {track.image ? (
                  <img src={track.image} alt={track.title} className="h-16 sm:h-20 md:h-24 w-full max-w-full object-contain rounded-xl mb-3 sm:mb-4 transition-smooth group-hover:scale-105" />
                ) : null}
                <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold mb-2 sm:mb-3">{track.title}</h2>
                {track.isSpecial && track.specialLabel && (
                  <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 dark:text-yellow-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 border border-yellow-500/30">
                    <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    {track.specialLabel}
                  </div>
                )}
                <p className="text-muted-foreground text-sm sm:text-base">{track.description}</p>
              </div>
              
              <div className="flex flex-col gap-2 sm:gap-3">
                <Link to={track.link}>
                  <Button size="sm" className="w-full text-xs sm:text-sm gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                    Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <Card className="glass-effect p-6 sm:p-8 text-center shadow-card border border-border mx-4">
          <h3 className="text-xl sm:text-2xl font-heading font-bold mb-4">Hackathon Themes</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Each theme offers unique opportunities to showcase your skills and build innovative solutions. 
            Stay tuned for future events!
          </p>
          <div className="flex justify-center">
            <a href="/#about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                Learn More About Hack Revolution
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
