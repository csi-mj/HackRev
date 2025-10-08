import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CountDown from "@/components/CountDown";
import { 
  Code2, 
  Users, 
  Trophy, 
  Zap, 
  Target, 
  Heart, 
  Building2,
  Calendar,
  MapPin,
  Clock,
  Lightbulb,
  Award,
  Medal,
  Database,
  GraduationCap
} from "lucide-react";
import csiLogo from "@/assets/csi_logo.png";
import ecellLogo from "@/assets/ecell_logo.png";
import acesLogo from "@/assets/aces.png";
import img2014 from "@/assets/history/google-2014.webp";
import img2015 from "@/assets/history/mozilla-2015.webp";
import img2016 from "@/assets/history/xtreme-2016.webp";
import img2017 from "@/assets/history/mjhack-2017.webp";
import img2018 from "@/assets/history/mjhack-2018.webp";
import img2019 from "@/assets/history/mjhack-2019.webp";
import img2020 from "@/assets/history/hackrev-2020.webp";
import img2022 from "@/assets/history/hackrev-2022.webp";
import img2023a from "@/assets/history/hackrev-2023.webp";
import img2023b from "@/assets/history/hackrev-2.jpeg";
import img2025 from "@/assets/history/HackRev_2025.png";

const Index = () => {
  // Countdown target date: 5 November 2025
  const targetDate = new Date("2025-11-08T07:00:00");
  
  // State for problem statements dialog
  const [selectedTrack, setSelectedTrack] = useState<typeof tracks[0] | null>(null);

  const tracks = [
    {
      icon: Target,
      title: "Smart Education",
      description: "Innovate educational technology to transform learning experiences.",
      link: "/Register/education",
      problemStatements: [
        "Gamified Environmental Education Platform for Schools and Colleges",
        "Smart Curriculum Activity & Attendance App",
        "Automated Student Attendance Monitoring and Analytics System for Colleges",
        "Digital Platform for Centralized Alumni Data Management and Engagement",
        "Centralised Digital Platform for Comprehensive student activity record in HEIs"
      ]
    },
    {
      icon: Code2,
      title: "Urban Tech and Smart Cities",
      description: "Develop innovative solutions for smart cities and urban challenges.",
      link: "/Register/urban-tech",
      problemStatements: [
        "Development of a mobile application for secure water level data collection from rivers using image processing",
        "AI-Driven Pollution Source Identification, Forecasting & Policy Dashboard for Delhi-NCR",
        "Centralized Vulnerability Detection and Intelligent Query Interface",
        "Government offices productivity and engagement platform",
        "Automated Comprehensive Technology Intelligence and Forecasting Platform"
      ]
    },
    
    {
      icon: Heart,
      title: "Agriculture and FoodTech",
      description: "Build technology solutions for sustainable and smart farming.",
      link: "/Register/agro-tech",
      problemStatements: [
        "Smart Crop Advisory System for Small and Marginal Farmers",
        "Develop a blockchain-based system for botanical traceability of Ayurvedic herbs, including geo-tagging from the point of collection (farmers/wild collectors) to the final Ayurvedic formulation label.",
        "Blockchain-Based Supply Chain Transparency for Agricultural Produce",
        "AI-Powered Personal Farming Assistant for Kerala Farmers",
        "Development of a Digital Farm Management Portal for implementing Biosecurity measures in Pig and Poultry Farms"
      ]
    },
    {
      icon: Building2,
      title: "Open Innovation (Hardware)",
      description: "Create cutting-edge hardware prototypes and IoT solutions.",
      link: "/Register/hardware",
      problemStatements: []
    }
    ,
    {
      icon: Database,
      title: "Terraview",
      description: "Data Analytics track for first-year students using Terraview software.",
      link: "/Terraview",
      problemStatements: [],
      isSpecial: true,
      specialLabel: "Exclusive for 1st Year Students"
    },
  ];

  const timeline = [
    { step: 1, date: "18th October", title: "Pre Hackathon Workshop 1" },
    { step: 2, date: "25th October", title: "Pre Hackathon Workshop 2" },
    // { step: 3, date: "21st December", title: "Pre Hackathon Workshop 3" },
    { step: 3, date: "9th Oct - 27th Oct", title: "Registrations & Idea Submission" },
    { step: 4, date: "27th Oct - 3rd Nov", title: "Idea Evaluation" },
    { step: 5, date: "5th November", title: "Announcement Of Finalist" },
    { step: 6, date: "8th November 2025", title: "Grand Finale of Hack Revolution" },
  ];

  const history = [
    {
      year: "2014",
      title: "Google Hackathon",
      img: img2014,
      description:
        "Google Student Club VCE collaborated with CSI-MJCET to conduct 'India's 1st Digital Footprint' in Hyderabad, a 12-hour hackathon on 23rd February 2014 at MJCET, Hyderabad.",
    },
    {
      year: "2015",
      title: "Mozilla Hackathon",
      img: img2015,
      description:
        "CSI-MJCET with Mozilla Firefox organized a 12-hour programming event on 25th January 2015. Theme: Creating Jobs for Millions.",
    },
    {
      year: "2016",
      title: "XTREMEHACK",
      img: img2016,
      description:
        "12-hour hackathon by CSI-MJCET with XtreamIT focusing on app and web development, with strong participation across Hyderabad.",
    },
    {
      year: "2017",
      title: "MJ-Hack 2017",
      img: img2017,
      description:
        "Held on 8th Oct 2017 at Ghulam Ahmed Hall, a 12-hour hackathon with 150 participants from various engineering colleges.",
    },
    {
      year: "2018",
      title: "MJ-Hack 2018",
      img: img2018,
      description:
        "CSI-MJCET hosted a 12-hour hackathon on 19th Jan 2018 at MJCET, mentored by developers from Mozilla Hyderabad and esteemed judges.",
    },
    {
      year: "2019",
      title: "Hack Revolution 2019",
      img: img2019,
      description:
        "MJCET held the much-anticipated Hack Revolution on 27th Jan 2019, bringing together bright minds across the city.",
    },
    {
      year: "2020",
      title: "Hack Revolution 2020",
      img: img2020,
      description:
        "CSI with E-Cell MJCET organized a 12-hour hackathon on 19th Jan 2020 at MJCET. Solutions were reviewed by mentors, faculties, and judges.",
    },
    {
      year: "2022",
      title: "Hack Revolution 2022",
      img: img2022,
      description:
        "15-hour event on Jan 8, 2022 at Ghulam Ahmed Hall by CSI and E-Cell with participants from top colleges; prize pool INR 25,000.",
    },
    {
      year: "2023",
      title: "Hack Revolution 1.0",
      img: img2023a,
      description:
        "Social coding competition aligned with Smart India Hackathon on 8th Jan 2023, duration ~15 hours; winners advanced to national-level rounds.",
    },
    {
      year: "2023",
      title: "Hack Revolution 2.0",
      img: img2023b,
      description:
        "Conducted on 17th Dec 2023, 4-6 members per team; collaboration between CSI and E-Cell, sponsored by ACES; ~15 hours.",
    },
    {
      year: "2025",
      title: "HackRevolution 2025",
      img: img2025,
      description:
        "A 15 hour  national-level hackathon conducted on 5th January 2025, jointly organized by the E-CELL and CSI MJCET , powered by ACES.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container mx-auto relative z-10 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse-glow">
                Hack Revolution
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6 text-muted-foreground">
              <span className="text-lg md:text-xl">Powered by</span>
              <img
                src={acesLogo}
                alt="ACES"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-3xl mx-auto">
              Where Innovation Meets Collaboration. Build the Future in 15 Hours.
            </p>
            <PrizePoolCountUp />
            
            <div className="flex flex-wrap gap-6 justify-center mb-20">
              <Link to="/Register">
                <Button size="lg" className="text-xl px-10 py-6 rounded-2xl gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                  Register Now
                </Button>
              </Link>
            </div>
            {/* Trimmed hero: ends at Register button as requested */}
          </div>
        </div>
      </section>

      {/* Countdown below hero */}
      <section id="home" className="px-4 anchor-offset">
        <div className="container mx-auto">
          <div className="glass-effect rounded-2xl p-8 max-w-5xl mx-auto -mt-10 shadow-card">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center">Event Starts In</h2>
            <CountDown targetDate={targetDate} />
          </div>
        </div>
      </section>

      {/* About HackRevolution removed per spec */}

      {/* Tracks Section */}
      <section id="themes" className="py-20 px-4 bg-gradient-to-b from-transparent to-card/50 anchor-offset">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hackathon Themes
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Select a theme that excites you and build solutions that make a difference
          </p>
          
          {/* Main 4 Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {tracks.slice(0, 4).map((track, index) => (
              <Card
                key={index}
                className="glass-effect p-8 shadow-card transition-smooth hover:scale-105 hover:shadow-glow border border-border group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <track.icon className="h-16 w-16 text-primary mb-4 transition-smooth group-hover:scale-110" />
                <h3 className="text-2xl font-heading font-bold mb-3">{track.title}</h3>
                <p className="text-muted-foreground mb-6">{track.description}</p>
                <div className="flex flex-col gap-3">
                  {track.problemStatements.length > 0 && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-smooth"
                          onClick={() => setSelectedTrack(track)}
                        >
                          View Problem Statements
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-heading font-bold text-center mb-4">
                            {track.title} - Problem Statements
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          {track.problemStatements.map((statement, idx) => (
                            <Card key={idx} className="p-4 border border-border">
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                                  {idx + 1}
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{statement}</p>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                  <Link to={track.link}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth w-full">
                      Register for This Track
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Special Terraview Track - Centered */}
          <div className="flex justify-center">
            {tracks.slice(4).map((track, index) => (
              <Card
                key={index + 4}
                className="glass-effect p-8 shadow-card transition-smooth hover:scale-105 hover:shadow-glow border border-border group animate-slide-up max-w-md"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <track.icon className="h-16 w-16 text-primary mb-4 transition-smooth group-hover:scale-110" />
                <h3 className="text-2xl font-heading font-bold mb-3">{track.title}</h3>
                {track.isSpecial && track.specialLabel && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 dark:text-yellow-400 text-sm font-semibold mb-3 border border-yellow-500/30">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    {track.specialLabel}
                  </div>
                )}
                <p className="text-muted-foreground mb-6">{track.description}</p>
                <div className="flex flex-col gap-3">
                  <Link to={track.link}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-24 px-4 anchor-offset">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <div className="relative mx-auto">
            {/* center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary opacity-70" />

            <div className="space-y-16">
              {timeline.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={item.step} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    {/* node */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-4 ring-primary/30" />
                    </div>
                    <div className={`${isLeft ? 'mr-8' : 'ml-8'} w-full md:w-[45%]`}>
                      <Card className="glass-effect p-6 shadow-card border border-border">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-3">
                          Step {item.step} • {item.date}
                        </div>
                        <div className="text-lg font-heading font-semibold">{item.title}</div>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section id="prizes" className="py-20 px-4 bg-gradient-to-b from-transparent to-card/50 anchor-offset">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Prizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <Card className="glass-effect p-8 shadow-card border border-border flex flex-col items-center">
              <Medal className="h-16 w-16 text-primary mb-4" />
              <div className="text-2xl font-heading font-bold">₹25,000</div>
              <div className="text-muted-foreground">2nd Prize</div>
            </Card>
            <Card className="glass-effect p-8 shadow-card border border-border flex flex-col items-center">
              <Trophy className="h-16 w-16 text-primary mb-4" />
              <div className="text-2xl font-heading font-bold">₹35,000</div>
              <div className="text-muted-foreground">1st Prize</div>
            </Card>
            <Card className="glass-effect p-8 shadow-card border border-border flex flex-col items-center">
              <Award className="h-16 w-16 text-primary mb-4" />
              <div className="text-2xl font-heading font-bold">₹10,000</div>
              <div className="text-muted-foreground">3rd Prize</div>
            </Card>
          </div>
          <div className="text-xl text-center text-primary font-heading">
            Consolation Prize of ₹5,000 in each track will also be given
          </div>
          <div className="mt-4 text-xl text-center text-primary font-heading">
            Prizes worth ₹75,000 in each track
          </div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <section id="rules" className="py-20 px-4 anchor-offset">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Rules & Regulations
          </h2>
          <Card className="glass-effect p-8 shadow-card border border-border space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Team Specification</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>Each team should consist of 4-6 participants.</li>
                <li>Students can form teams from different branches and years.</li>
                <li>The Hackathon will be on Saturday 8th November 2025 from 7.00 AM – 10.00 PM. Prizes will be announced immediately after the hackathon.</li>
                <li>All participant will have to make their own travel and accommodation arrangements.</li>
                <li>The organisers will provide Lunch, Tea and Snacks along with registration kits and goodies.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Registration</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>Teams can submit only one abstract.</li>
                <li>A student can be part of only one team.</li>
                <li>The teams must follow the PPT template provided for idea submission.</li>
                <li>The registration window will be open from 9th Oct 2025 to 27th Oct 2025.</li>
                <li>The hardware track must include a block diagram and list of components along with the abstract. 220V AC power will be provided; teams should arrange their components/batteries.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Abstract Submission</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>Abstracts should justify how the problem is being solved; cost‑effective solutions with a business model are encouraged.</li>
                <li>Abstracts should not contain any form of code.</li>
                <li>Ideas/solutions must be new and not presented in any previous program.</li>
                <li>Include an algorithm/flow chart explaining the workflow.</li>
                <li>Provide details of software tools/languages/environment used.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Shortlisting of teams</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>Post submission, ideas will be evaluated by experts from Industry and Academia.</li>
                <li>Evaluation criteria: novelty, complexity, clarity, feasibility, practicability, sustainability, impact, UX, and potential for future work.</li>
                <li>A max of 15 teams will be shortlisted per track and 5 waitlisted.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Final Registration</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>Shortlisted teams will be informed through their registered emails.</li>
                <li>Team must register before 27th October.</li>
                <li>Teams that fail to register will be disqualified.</li>
                <li>College photo ID is mandatory for participating.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Other Details</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>There will be three prizes per track: ₹35,000, ₹25,000, ₹10,000 and a consolation prize of ₹5,000. Prize worth ₹75,000 per track; total ₹3 Lakhs across four tracks.</li>
                <li>Prize money will be transferred equally to team members within 15 days. Provide name, account number, and IFSC. No cash prizes.</li>
                <li>In case of a tie, organisers’ decision on prize distribution is final.</li>
                <li>Projects with large peripheral hardware must be pre‑approved by organizers.</li>
                <li>At least one team member must be physically present during sign‑in.</li>
                <li>Teams must be available to present during their assigned slot.</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-20 px-4 bg-gradient-to-b from-card/50 to-transparent anchor-offset">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            History
          </h2>
          <div className="relative">
            {/* left vertical rail */}
            <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-secondary to-primary opacity-70" />

            <div className="space-y-24">
              {history.map((h, idx) => (
                <div key={`${h.year}-${idx}`} className="relative pl-20 md:pl-28">
                  {/* year marker */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 flex items-center">
                    <div className="w-5 h-5 rounded-full bg-primary ring-4 ring-primary/30 shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
                  </div>
                  <div className="text-5xl font-heading font-bold text-muted-foreground mb-8">{h.year}</div>
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center">
                    <img src={h.img} alt={h.title} className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border border-border mx-auto md:mx-0 shadow-card" />
                    <div>
                      <div className="text-2xl font-heading font-semibold mb-2 text-center md:text-left">{h.title}</div>
                      <p className="text-muted-foreground text-sm md:text-base text-center md:text-left max-w-3xl">{h.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Organized By Full Hero */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 anchor-offset">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Organized By
          </h2>
          <div className="flex items-center justify-center gap-10 md:gap-16 mb-14">
            <img src={csiLogo} alt="CSI" className="h-28 md:h-40 w-auto object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]" />
            <img src={ecellLogo} alt="E‑Cell" className="h-28 md:h-40 w-auto object-contain drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]" />
          </div>

          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8">For Any Queries Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
            <Card className="glass-effect p-6 border border-border">
              <div className="text-xl font-heading font-semibold">Affan</div>
              <div className="text-muted-foreground mb-1">CSI Chief Coordinator</div>
              <div className="text-muted-foreground">Phone: <a className="text-primary" href="tel:+919121795950">+91 9121795950</a></div>
            </Card>
            <Card className="glass-effect p-6 border border-border">
              <div className="text-xl font-heading font-semibold">Rayyan</div>
              <div className="text-muted-foreground mb-1">E‑Cell Chief Coordinator</div>
              <div className="text-muted-foreground">Phone: <a className="text-primary" href="tel:+919908784538">+91 9908784538</a></div>
            </Card>
          </div>
          <div className="text-lg">Email Us At: <a className="text-primary" href="mailto:info@hackrevolution.in">info@hackrevolution.in</a></div>
        </div>
      </section>
    </div>
  );
};

const PrizePoolCountUp = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const durationMs = 2000; // 2s
    const start = performance.now();
    const target = 300000;

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const formatIndian = (num: number) =>
    new Intl.NumberFormat('en-IN').format(num);

  return (
    <div className="mb-8">
      <div className="text-xl md:text-2xl text-muted-foreground mb-2">Cash Prizes Worth</div>
      <div
        className="font-heading font-extrabold tracking-tight leading-none 
                   text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary via-secondary to-primary 
                   bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]"
      >
        ₹ {formatIndian(value)}
      </div>
    </div>
  );
};

export default Index;
