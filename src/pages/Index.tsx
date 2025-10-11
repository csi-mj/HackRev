import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CountDown from "@/components/CountDown";
import { 
  Users, 
  Trophy, 
  Zap, 
  Calendar,
  MapPin,
  Clock,
  Lightbulb,
  Award,
  Medal,
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
  const targetDate = new Date("2025-10-27T00:00:00");
  
  // State for problem statements dialog
  const [selectedTrack, setSelectedTrack] = useState<typeof tracks[0] | null>(null);

  const tracks = [
    {
      image: "/SmartEd.png",
      title: "Smart Education",
      description: "Innovate educational technology to transform learning experiences.",
      link: "/Register/education",
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
      problemStatements: []
    }
    ,
    {
      image: "/Terraview.png",
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
    { step: 6, date: "8th November 2025", title: "Hack Revolution Grand Finale" },
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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container mx-auto relative z-10 text-center px-4 sm:px-6">
          <div className="animate-slide-up">
            <div className="mb-4 sm:mb-6">
              <img
                src="/mobile_logo.png"
                alt="Hack Revolution"
                className="mx-auto w-[95vw] h-[160px] sm:hidden object-contain"
              />
              <img
                src="/Logo.png"
                alt="Hack Revolution"
                className="mx-auto hidden sm:block w-[420px] md:w-[520px] lg:w-[620px] xl:w-[720px] h-auto object-contain"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-3 mb-4 sm:mb-6 text-muted-foreground">
              <span className="text-lg sm:text-lg md:text-xl">Powered by</span>
              <img
                src={acesLogo}
                alt="ACES"
                className="h-8 sm:h-8 md:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-2 hidden sm:block">
              Where Innovation Meets Collaboration. Build the Future in 15 Hours.
            </p>
            <PrizePoolCountUp />
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 px-4">
              <Link to="/Register" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 rounded-2xl gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown below hero */}
      <section id="home" className="px-4 sm:px-6 lg:px-8 anchor-offset">
        <div className="container mx-auto">
          <div className="glass-effect rounded-2xl p-4 sm:p-6 md:p-8 max-w-5xl mx-auto -mt-6 sm:-mt-8 md:-mt-10 shadow-card">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 text-center">Registration Closes In</h2>
            <CountDown targetDate={targetDate} />
          </div>
        </div>
      </section>

      {/* About HackRevolution removed per spec */}

      {/* Tracks Section */}
      <section id="themes" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-card/50 anchor-offset">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
            Hackathon Themes
          </h2>
          <p className="text-center text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto px-4">
            Select a theme that excites you and build solutions that make a difference
          </p>
          
          {/* Main 4 Tracks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12 px-4">
            {tracks.slice(0, 4).map((track, index) => (
              <Card
                key={index}
                className="glass-effect p-4 sm:p-6 md:p-8 shadow-card transition-smooth hover:scale-105 hover:shadow-glow border border-border group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {track.image ? (
                  <img src={track.image} alt={track.title} className="h-16 sm:h-20 md:h-24 w-full max-w-full object-contain rounded-xl mb-3 sm:mb-4 transition-smooth group-hover:scale-105" />
                ) : null}
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold mb-2 sm:mb-3">{track.title}</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{track.description}</p>
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
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth w-full text-xs sm:text-sm">
                      Register for This Track
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Special Terraview Track - Centered */}
          <div className="flex justify-center px-4">
            {tracks.slice(4).map((track, index) => (
              <Card
                key={index + 4}
                className="glass-effect p-4 sm:p-6 md:p-8 shadow-card transition-smooth hover:scale-105 hover:shadow-glow border border-border group animate-slide-up w-full max-w-xs sm:max-w-sm md:max-w-md"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {track.image ? (
                  <img src={track.image} alt={track.title} className="h-16 sm:h-20 md:h-24 w-full max-w-full object-contain rounded-xl mb-3 sm:mb-4 transition-smooth group-hover:scale-105" />
                ) : null}
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold mb-2 sm:mb-3">{track.title}</h3>
                {track.isSpecial && track.specialLabel && (
                  <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 dark:text-yellow-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 border border-yellow-500/30">
                    <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    {track.specialLabel}
                  </div>
                )}
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{track.description}</p>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <Link to={track.link}>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth w-full text-xs sm:text-sm">
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
      <section id="timeline" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 anchor-offset">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
            Event Schedule
          </h2>
          <div className="relative mx-auto px-4">
            {/* center vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 sm:-translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary opacity-70" />

            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              {timeline.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={item.step} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end sm:justify-end'}`}>
                    {/* node */}
                    <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-2 sm:ring-4 ring-primary/30" />
                    </div>
                    <div className={`ml-8 sm:${isLeft ? 'mr-8' : 'ml-8'} w-full sm:w-[45%]`}>
                      <Card className="glass-effect p-4 sm:p-6 shadow-card border border-border">
                        <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-primary/15 text-primary text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                          Step {item.step} • {item.date}
                        </div>
                        <div className="text-base sm:text-lg font-heading font-semibold">{item.title}</div>
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
      <section id="prizes" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-card/50 anchor-offset">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-8 sm:mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
            Prizes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 px-4">
            <Card className="glass-effect p-6 sm:p-8 shadow-card border border-border flex flex-col items-center order-2 md:order-1">
              <Medal className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl font-heading font-bold">₹25,000</div>
              <div className="text-muted-foreground text-sm sm:text-base">2nd Prize</div>
            </Card>
            <Card className="glass-effect p-6 sm:p-8 shadow-card border border-border flex flex-col items-center order-1 md:order-2">
              <Trophy className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl font-heading font-bold">₹35,000</div>
              <div className="text-muted-foreground text-sm sm:text-base">1st Prize</div>
            </Card>
            <Card className="glass-effect p-6 sm:p-8 shadow-card border border-border flex flex-col items-center order-3 md:order-3">
              <Award className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl font-heading font-bold">₹10,000</div>
              <div className="text-muted-foreground text-sm sm:text-base">3rd Prize</div>
            </Card>
          </div>
          <div className="text-lg sm:text-xl text-center text-primary font-heading px-4">
            Consolation Prize of ₹5,000 in each track will also be given
          </div>
          <div className="mt-2 sm:mt-4 text-lg sm:text-xl text-center text-primary font-heading px-4">
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
                <li>Each team should consist of 4–6 participants.</li>
                <li>Students can form teams from different branches and years.</li>
                <li>All participants must make their own travel and accommodation arrangements.</li>
                <li>At least one team member must be physically present during sign-in.</li>
                <li>All team members must be present during the judging round.</li>
                <li>Organisers will provide lunch, tea, and snacks, along with registration kits and goodies.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Event Schedule</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>The hackathon will be held on Saturday, 8th November 2025, from 7:00 AM – 10:00 PM.</li>
                <li>Prizes will be announced immediately after the hackathon.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Domains & Problem Statements</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>This year, Hack Revolution 2025 features three core domains, each addressing real-world challenges through innovation and technology.</li>
                <li>Participants must choose and work only on the official problem statements released under these three domains:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Smart Education – Innovate solutions to enhance learning experiences, accessibility, and digital education tools.</li>
                    <li>Urban Tech & Smart Cities – Build systems that make cities smarter, more efficient, and sustainable through technology.</li>
                    <li>Agriculture & Food Tech – Develop solutions to improve agricultural productivity, food safety, and supply-chain efficiency.</li>
                  </ul>
                </li>
                <li>Teams must select one problem statement from the above domains and design their solution accordingly.</li>
                <li>Custom or self-defined problem statements will not be accepted in these domains.</li>
                <li>The Open Innovation Hardware track is an exception, where teams have the freedom to propose and build any innovative hardware-based solution of their choice.</li>
                <li>All proposed ideas, whether domain-specific or open innovation, must be original, feasible, and impactful.</li>
                <li>Projects should align with the hackathon's vision of driving innovation and solving real-world challenges.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Registration</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>Teams can submit only one abstract.</li>
                <li>A student can be part of only one team.</li>
                <li>Teams must follow the official PPT template provided for idea submission.</li>
                <li>Download the ACES App, register your team there, and fill out all necessary details. Upload a screenshot of your registration confirmation on the portal. Failing to do so will result in an incomplete registration and will not be accepted.</li>
                <li>The registration window will be open from 9th October 2025 to 27th October 2025, and no entries or submissions will be accepted after the deadline under any circumstances.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Abstract Submission</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>Abstracts should clearly justify how the problem is being solved; cost-effective and sustainable solutions with a potential business model are encouraged.</li>
                <li>Abstracts should not include any code.</li>
                <li>Ideas and solutions must be original and not presented in any previous program or hackathon.</li>
                <li>Include an algorithm or flowchart explaining the workflow.</li>
                <li>Provide details of the software tools, programming languages, and environments used.</li>
                <li>For the Hardware Track, include a block diagram and list of components along with the abstract.</li>
                <li>220V AC power will be provided; teams should arrange their own components and batteries.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Shortlisting of Teams</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>After submission, ideas will be evaluated by experts from industry and academia.</li>
                <li>Evaluation criteria include novelty, complexity, clarity, feasibility, practicability, sustainability, impact, user experience (UX), and potential for future work.</li>
                <li>A maximum of 15 teams will be shortlisted per track, with 5 teams on the waitlist.</li>
                <li>Shortlisted teams will be informed via email and must confirm their registration within the given deadline. Failure to do so will result in disqualification.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Other Details</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>Prize money will be transferred to the team lead or chosen team member within 15 days of the result announcement.</li>
                <li>Teams must provide name, account number, and IFSC code for fund transfer.</li>
                <li>No in-hand cash will be provided.</li>
                <li>In case of a tie, the organisers' decision on prize distribution will be final.</li>
                <li>Projects involving large peripheral hardware must be pre-approved by the organisers.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 rules-heading">Code of Conduct</h3>
              <ul className="list-decimal pl-6 space-y-2 text-lg">
                <li>All participants must carry a valid college photo ID throughout the event.</li>
                <li>Teams are fully responsible for the safety, handling, and maintenance of their own equipment and belongings.</li>
                <li>The organisers reserve the right to disqualify any team involved in plagiarism, misconduct, misrepresentation, or violation of event rules.</li>
                <li>Participants are expected to maintain professionalism, respect, and ethical conduct at all times during the hackathon.</li>
                <li>Any kind of misbehavior, disrespect, or inappropriate conduct toward volunteers, organisers, or fellow participants will not be tolerated and may result in immediate disqualification.</li>
                <li>Any form of disruptive behavior, cheating, or rule violation will lead to immediate disqualification.</li>
                <li>All disputes or decisions during the event will be handled at the sole discretion of the organising committee, and their decision will be final and binding.</li>
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-14">
            <img src={csiLogo} alt="CSI" className="h-24 sm:h-28 md:h-40 w-auto max-w-full object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]" />
            <img src={ecellLogo} alt="E‑Cell" className="h-24 sm:h-28 md:h-40 w-auto max-w-full object-contain drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]" />
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
          <div className="text-lg">Email Us At: <a className="text-primary" href="mailto:hackrevolution@mjcollege.ac.in">hackrevolution@mjcollege.ac.in</a></div>
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
    <div className="mb-6 sm:mb-8">
      <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2">Cash Prizes Worth</div>
      <div
        className="font-heading font-extrabold tracking-tight leading-none 
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary via-secondary to-primary 
                   bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]"
      >
        ₹ {formatIndian(value)}
      </div>
    </div>
  );
};

export default Index;
