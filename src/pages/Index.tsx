import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
  GraduationCap,
  FileText,
  Shield,
  Phone,
  Mail,
  Building2,
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
import Squares from "@/components/Squares";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PixelImage } from "@/components/ui/pixel-image";

const Index = () => {
  // Countdown target date: 27 October 2025
  // const targetDate = new Date("2025-11-03T00:00:00");
  const targetDate = new Date("2025-11-03T00:00:00");

  // State for problem statements dialog
  const [selectedTrack, setSelectedTrack] = useState<(typeof tracks)[0] | null>(
    null
  );

  const tracks = [
    {
      image: "/SmartEd.png",
      title: "Smart Education",
      description:
        "Innovate educational technology to transform learning experiences.",
      link: "/Register/education",
      problemStatements: [
        "Gamified Environmental Education Platform for Schools and Colleges",
        "Smart Curriculum Activity & Attendance App",
        "Automated Student Attendance Monitoring and Analytics System for Colleges",
        "Digital Platform for Centralized Alumni Data Management and Engagement",
        "Centralised Digital Platform for Comprehensive student activity record in HEIs",
        "Smart Classroom & Timetable Scheduler",
      ],
    },
    {
      image: "/UrbanTech.png",
      title: "Urban Tech and Smart Cities",
      description:
        "Develop innovative solutions for smart cities and urban challenges.",
      link: "/Register/urban-tech",
      problemStatements: [
        "Real-Time Public Transport Tracking for Small Cities",
        "Smart Traffic Management System for Urban Congestion",
        "Crowdsourced Civic Issue Reporting and Resolution System",
        "AI-Based Rockfall Prediction and Alert System for Open-Pit Mines",
        "Recovery and Reuse of Fresh Water Resources",
        "Forecasting materials demand with machine learning for supply chain planning, procurement, and inventory optimization",
      ],
    },

    {
      image: "/Agriculture.png",
      title: "Agriculture and FoodTech",
      description:
        "Build technology solutions for sustainable and smart farming.",
      link: "/Register/agro-tech",
      problemStatements: [
        "Image-based Breed Recognition for Cattle and Buffaloes of India",
        "Smart Crop Advisory System for Small and Marginal Farmers",
        "AI-Based Crop Recommendation System for Farmers",
        "AI-Powered Crop Yield Prediction and Optimization",
        "AI-Powered Monitoring of Crop Health, Soil Condition, and Pest Risks Using Sensor and Imaging Data",
        "Enhancing Farmer Productivity through Innovative Technology Solutions",
      ],
    },
    {
      image: "/Hardware.png",
      title: "Open Innovation (Hardware)",
      description: "Create cutting-edge hardware prototypes and IoT solutions.",
      link: "/Register/hardware",
      problemStatements: [],
    },
    {
      image: "/Terraview.png",
      title: "Terraview",
      description:
        "Data Analytics track for first-year students using Terraview software.",
      link: "/Terraview",
      problemStatements: [],
      isSpecial: true,
      specialLabel: "Exclusive for 1st Year Students",
    },
  ];

  const timeline = [
    { step: 1, date: "18th October", title: "Pre Hackathon Workshop 1" },
    { step: 2, date: "25th October", title: "Pre Hackathon Workshop 2" },
    // { step: 3, date: "21st December", title: "Pre Hackathon Workshop 3" },
    {
      step: 3,
      date: "9th Oct - 27th Oct",
      title: "Registrations & Idea Submission",
    },
    { step: 4, date: "27th Oct - 3rd Nov", title: "Idea Evaluation" },
    { step: 5, date: "5th November", title: "Announcement Of Finalist" },
    {
      step: 6,
      date: "8th November 2025",
      title: "Hack Revolution Grand Finale",
    },
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
    <div className="min-h-screen relative">
      {/* Squares Background - Full Page */}
      <div className="fixed inset-0 z-0 bg-black">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#333"
          hoverFillColor="#1a1a1a"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.15),transparent_100%),linear-gradient(to_bottom,rgba(0,0,0,0.02),rgba(0,0,0,0.5))]" />
      </div>

      {/* All content with relative positioning */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center px-4 sm:px-6">
            <div className="max-w-5xl mx-auto animate-slide-up">
              {/* ACES HUB Notice */}
              {/* <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
              >
                <Alert className="border-blue-500/50 bg-blue-500/10">
                  <AlertDescription className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium">
                    <div className="flex flex-col">
                      <span>📢 <strong>Deadline Extended!</strong></span>
                      <span className="mt-1">Registration now closes on 28th October at 12 PM (noon).</span>
                    </div>
                  </AlertDescription>
                </Alert>
              </motion.div> */}

              {/* Main Heading */}
              {/* <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold mb-4 sm:mb-5 leading-tight tracking-tight"> */}
              {/* <TextGenerateEffect words="Hack Revolution" /> */}
              <div className="w-full flex justify-center items-center">
                <div className="hidden sm:block">
                  <PixelImage
                    src="/Logo.png"
                    customGrid={{ rows: 4, cols: 6 }}
                    grayscaleAnimation
                  />
                </div>
                <div className="sm:hidden">
                  <PixelImage
                    src="/mobile_logo.png"
                    customGrid={{ rows: 4, cols: 6 }}
                    grayscaleAnimation
                  />
                </div>
              </div>

              {/* </h1> */}

              {/* Powered By Section */}
              <div className="flex justify-center items-center gap-3 mb-10 sm:mb-10">
                <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Powered by
                </span>
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                  <img
                    src={acesLogo}
                    alt="ACES"
                    className="h-8 sm:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                  {/* <img
                    src={csiLogo}
                    alt="CSI"
                    className="h-8 sm:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src={ecellLogo}
                    alt="E-Cell"
                    className="h-8 sm:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  /> */}
                </div>
              </div>

              {/* Tagline */}
              <p className="max-sm:hidden text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Where{" "}
                <span className="text-secondary font-semibold">Innovation</span>{" "}
                Meets{" "}
                <span className="text-secondary font-semibold">
                  Collaboration
                </span>
              </p>

              {/* Prize Pool Count Up */}
              <div className="mb-8 sm:mb-10">
                <PrizePoolCountUp />
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mb-10 sm:mb-12 px-4">
                <Button
                  size="lg"
                  disabled
                  title="Registrations Closed"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold px-8 sm:px-10 py-5 sm:py-6 rounded-2xl bg-muted text-muted-foreground cursor-not-allowed"
                >
                  Registrations Closed
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Terraview Registrations Deadline Counter */}
        <section id="home" className="py-0 px-3 sm:px-6 lg:px-8 anchor-offset mb-8 sm:mb-12">
          <div className="w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="glass-effect rounded-2xl p-5 sm:p-8 md:p-10 max-w-5xl mx-auto border border-secondary/20 backdrop-blur-xl"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-center bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                  Terraview Registrations Deadline
                </h2>
              </div>
              <p className="text-center text-muted-foreground mb-6 text-sm sm:text-base">
                Register now for the Terraview Track! Deadline: November 2nd, 2025
              </p>
              <div className="flex justify-center">
                <CountDown targetDate={targetDate} />
              </div>
              <div className="flex justify-center mt-6">
                <Link to="/Terraview">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2">
                    Register Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tracks Section */}
        <section
          id="themes"
          className="py-12 sm:py-16 md:py-20 px-0 sm:px-6 lg:px-8 anchor-offset"
        >
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent px-4">
                <TextGenerateEffect words="Hackathon Themes" />
              </h2>
              <p className="text-center text-muted-foreground text-base sm:text-lg mb-12 sm:mb-14 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto px-4">
                Select a theme that excites you and build solutions that make a
                difference
              </p>
            </motion.div>

            {/* Main 4 Tracks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12 px-1">
              {tracks.slice(0, 4).map((track, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.7, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-effect p-5 sm:p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:scale-[1.01] border border-border/50 hover:border-secondary/40 group relative overflow-hidden backdrop-blur-xl">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Image Section */}
                      {track.image ? (
                        <div className="flex items-center justify-center mb-4 sm:mb-5 p-3 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/10 group-hover:from-secondary/15 group-hover:to-secondary/15 transition-colors duration-300">
                          <img
                            src={track.image}
                            alt={track.title}
                            className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                      ) : null}

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl md:text-2xl font-heading font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                        {track.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed flex-grow">
                        {track.description}
                      </p>

                      {/* Buttons */}
                      <div className="flex flex-col gap-2.5 sm:gap-3 mt-auto">
                        {track.problemStatements.length > 0 && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-[1.01]"
                                onClick={() => setSelectedTrack(track)}
                              >
                                <Lightbulb className="w-4 h-4 mr-2" />
                                View Problem Statements
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-sm sm:max-w-2xl md:max-w-4xl max-h-[85vh] overflow-y-auto bg-black/30 border-secondary/20 backdrop-blur-xl scroll-hide">
                              <DialogHeader className="pb-4 border-b border-border/50">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                  <Lightbulb className="w-6 h-6 text-secondary" />
                                  <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-center bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                                    {track.title}
                                  </DialogTitle>
                                </div>
                                <p className="text-sm text-muted-foreground text-center">
                                  Problem Statements
                                </p>
                              </DialogHeader>
                              <div className="space-y-3 sm:space-y-4 mt-6">
                                {track.problemStatements.map(
                                  (statement, idx) => (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0.3, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: idx * 0.1,
                                      }}
                                    >
                                      <Card className="p-4 sm:p-5 border border-border/50 hover:border-secondary/40 transition-all duration-300 glass-effect group hover:scale-[1.01]">
                                        <div className="flex items-start gap-3 sm:gap-4">
                                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-secondary to-secondary text-secondary-foreground flex items-center justify-center text-sm sm:text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {idx + 1}
                                          </div>
                                          <p className="text-foreground/90 leading-relaxed text-sm sm:text-base pt-1">
                                            {statement}
                                          </p>
                                        </div>
                                      </Card>
                                    </motion.div>
                                  )
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                        {/* <Link to={track.link} className="w-full"> */}
                        <Button
                      size="sm"
                      disabled
                      className="w-full bg-muted text-muted-foreground cursor-not-allowed"
                    >
                      Registrations Closed
                    </Button>
                        {/* </Link> */}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Special Terraview Track */}
            <div className="flex justify-center px-4">
              {tracks.slice(4).map((track, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.7, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                >
                  <Card className="glass-effect p-5 sm:p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:scale-[1.01] border border-border/50 hover:border-secondary/40 group relative overflow-hidden backdrop-blur-xl">
                    {track.image ? (
                      <img
                        src={track.image}
                        alt={track.title}
                        className="h-16 sm:h-20 md:h-24 w-full max-w-full object-contain rounded-xl mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-105"
                      />
                    ) : null}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold mb-2 sm:mb-3">
                      {track.title}
                    </h3>
                    {track.isSpecial && track.specialLabel && (
                      <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full glass-effect text-yellow-500 dark:text-yellow-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 border border-yellow-500/30">
                        <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        {track.specialLabel}
                      </div>
                    )}
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                      {track.description}
                    </p>
                    <div className="flex flex-col gap-2 sm:gap-3">
                      {track.isSpecial ? (
                        <Link to="/Terraview">
                          <Button
                            size="sm"
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 w-full text-xs sm:text-sm"
                          >
                            Register Now
                          </Button>
                        </Link>
                      ) : (
                        <Link to={track.link}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 w-full text-xs sm:text-sm"
                          >
                            Learn More
                          </Button>
                        </Link>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          id="timeline"
          className="py-12 sm:py-16 md:py-24 px-0 sm:px-6 lg:px-8 anchor-offset"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                <h2 className="text-xl sm:text-3xl md:text-5xl font-heading font-bold text-center bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                  Event Schedule
                </h2>
              </div>
              <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12 md:mb-16">
                Mark your calendars for these important dates
              </p>
            </motion.div>

            <div className="relative mx-auto px-4">
              {/* center vertical line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 sm:-translate-x-1/2 bg-gradient-to-b from-secondary via-secondary to-secondary opacity-50" />

              <div className="space-y-8 sm:space-y-12 md:space-y-16">
                {timeline.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`relative flex items-center ${
                        isLeft ? "justify-start" : "justify-end sm:justify-end"
                      }`}
                    >
                      {/* node */}
                      {/* <motion.div 
                        className="absolute left-0 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                      >
                        <div className="relative">
                          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-secondary to-secondary animate-pulse" />
                          <div className="absolute inset-0 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-secondary to-secondary blur-sm opacity-50" />
                        </div>
                      </motion.div> */}

                      <div
                        className={`ml-8 sm:${
                          isLeft ? "mr-8" : "ml-8"
                        } w-full sm:w-[45%]`}
                      >
                        <Card className="glass-effect p-5 sm:p-6 border border-border/50 hover:border-secondary/40 transition-all duration-300 group hover:scale-[1.02] relative overflow-hidden">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                          <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-secondary/20 to-secondary/20 border border-secondary/30 text-secondary text-xs sm:text-sm font-semibold">
                                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                                Step {item.step}
                              </div>
                              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary/10 border border-secondary/30 text-secondary text-xs sm:text-sm font-medium">
                                {item.date}
                              </div>
                            </div>
                            <div className="text-base sm:text-lg md:text-xl font-heading font-bold text-foreground/90">
                              {item.title}
                            </div>
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Prizes */}
        <section
          id="prizes"
          className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 anchor-offset"
        >
          <div className="container mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                  Prizes & Rewards
                </h2>
              </div>
              <p className="text-center text-muted-foreground text-sm sm:text-base mb-10 sm:mb-14">
                Compete for exciting prizes and recognition
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 px-4">
              {/* 2nd Place */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="order-2 sm:order-1"
              >
                <Card className="glass-effect p-6 sm:p-8 md:p-10 border border-border/50 hover:border-secondary/40 flex flex-col items-center group relative overflow-hidden transition-all duration-300 hover:scale-[1.03] h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-4 sm:mb-5 p-4 rounded-full bg-gradient-to-br from-gray-400/20 to-gray-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Medal className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-gray-400" />
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-400/10 border border-gray-400/30 text-gray-400 text-xs sm:text-sm font-semibold mb-3">
                      2nd Place
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold bg-gradient-to-br from-gray-300 to-gray-500 bg-clip-text text-transparent mb-2">
                      ₹25,000
                    </div>
                    {/* <p className="text-muted-foreground text-xs sm:text-sm">Silver Medal</p> */}
                  </div>
                </Card>
              </motion.div>

              {/* 1st Place - Winner */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="order-1 sm:order-2"
              >
                <Card className="glass-effect p-6 sm:p-8 md:p-10 border-2 border-secondary/50 hover:border-secondary flex flex-col items-center group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] h-full sm:transform sm:-translate-y-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Winner Badge */}
                  <div className="absolute -top-1 -right-1 bg-gradient-to-br from-secondary to-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    WINNER
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-4 sm:mb-5 p-4 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                      <Trophy className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 text-yellow-500" />
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-500/40 text-yellow-500 text-xs sm:text-sm font-semibold mb-3">
                      1st Place
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                      ₹35,000
                    </div>
                    {/* <p className="text-muted-foreground text-xs sm:text-sm">Gold Medal + Trophy</p> */}
                  </div>
                </Card>
              </motion.div>

              {/* 3rd Place */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-3"
              >
                <Card className="glass-effect p-6 sm:p-8 md:p-10 border border-border/50 hover:border-secondary/40 flex flex-col items-center group relative overflow-hidden transition-all duration-300 hover:scale-[1.03] h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-4 sm:mb-5 p-4 rounded-full bg-gradient-to-br from-orange-400/20 to-orange-600/20 group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-orange-500" />
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-400/10 border border-orange-400/30 text-orange-500 text-xs sm:text-sm font-semibold mb-3">
                      3rd Place
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold bg-gradient-to-br from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                      ₹10,000
                    </div>
                    {/* <p className="text-muted-foreground text-xs sm:text-sm">Bronze Medal</p> */}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <Card className="glass-effect p-4 sm:p-6 border border-secondary/30 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-secondary" />
                  <p className="text-base sm:text-lg text-secondary font-semibold">
                    Consolation Prize
                  </p>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  ₹5,000 in each track
                </p>
              </Card>

              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-md glass-effect border border-secondary/30">
                <Trophy className="w-5 h-5 text-secondary" />
                <span className="text-lg sm:text-xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                  Total Prize Pool: ₹75,000 per track
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rules & Regulations */}
        <section
          id="rules"
          className="py-12 sm:py-16 md:py-24 px-0 sm:px-6 lg:px-8 anchor-offset"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                  Rules & Regulations
                </h2>
              </div>
              <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12">
                Please read carefully before participating
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                      Team Specification
                    </h3>
                  </div>
                  <ul className="list-decimal pl-6 space-y-2.5 text-sm sm:text-base text-muted-foreground">
                    <li>Each team should consist of 4–6 participants.</li>
                    <li>
                      Students can form teams from different branches and years.
                    </li>
                    <li>
                      All participants must make their own travel and
                      accommodation arrangements.
                    </li>
                    <li>
                      At least one team member must be physically present during
                      sign-in.
                    </li>
                    <li>
                      All team members must be present during the judging round.
                    </li>
                    <li>
                      Organisers will provide lunch, tea, and snacks, along with
                      registration kits and goodies.
                    </li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                      Event Schedule
                    </h3>
                  </div>
                  <ul className="list-decimal pl-6 space-y-2.5 text-sm sm:text-base text-muted-foreground">
                    <li>
                      The hackathon will be held on Saturday, 8th November 2025,
                      from 7:00 AM – 10:00 PM.
                    </li>
                    <li>
                      Prizes will be announced immediately after the hackathon.
                    </li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                      Domains & Problem Statements
                    </h3>
                  </div>
                  <ul className="list-decimal pl-6 space-y-2.5 text-sm sm:text-base text-muted-foreground">
                    <li>
                      This year, Hack Revolution 2025 features three core
                      domains, each addressing real-world challenges through
                      innovation and technology.
                    </li>
                    <li>
                      Participants must choose and work only on the official
                      problem statements released under these three domains:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                          Smart Education – Innovate solutions to enhance
                          learning experiences, accessibility, and digital
                          education tools.
                        </li>
                        <li>
                          Urban Tech & Smart Cities – Build systems that make
                          cities smarter, more efficient, and sustainable
                          through technology.
                        </li>
                        <li>
                          Agriculture & Food Tech – Develop solutions to improve
                          agricultural productivity, food safety, and
                          supply-chain efficiency.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Teams must select one problem statement from the above
                      domains and design their solution accordingly.
                    </li>
                    <li>
                      Custom or self-defined problem statements will not be
                      accepted in these domains.
                    </li>
                    <li>
                      The Open Innovation Hardware track is an exception, where
                      teams have the freedom to propose and build any innovative
                      hardware-based solution of their choice.
                    </li>
                    <li>
                      All proposed ideas, whether domain-specific or open
                      innovation, must be original, feasible, and impactful.
                    </li>
                    <li>
                      Projects should align with the hackathon's vision of
                      driving innovation and solving real-world challenges.
                    </li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                      Registration
                    </h3>
                  </div>
                  <ul className="list-decimal pl-6 space-y-2.5 text-sm sm:text-base text-muted-foreground">
                    <li>Teams can submit only one abstract.</li>
                    <li>A student can be part of only one team.</li>
                    <li>
                      Teams must follow the official PPT template provided for
                      idea submission.
                    </li>
                    <li>
                    All team members must download the ACES HUB app, log in, and navigate to the Profile section. After logging in, capture a screenshot of the Profile screen for each member, compile all screenshots into a single consolidated PDF, and upload this PDF on the website while completing the Hackathon registration.
                    </li>
                    <li>
                      The registration window will be open from 9th October 2025
                      to 27th October 2025, and no entries or submissions will
                      be accepted after the deadline under any circumstances.
                    </li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                      Abstract Submission
                    </h3>
                  </div>
                  <ul className="list-decimal pl-6 space-y-2.5 text-sm sm:text-base text-muted-foreground">
                    <li>
                      Abstracts should clearly justify how the problem is being
                      solved; cost-effective and sustainable solutions with a
                      potential business model are encouraged.
                    </li>
                    <li>Abstracts should not include any code.</li>
                    <li>
                      Ideas and solutions must be original and not presented in
                      any previous program or hackathon.
                    </li>
                    <li>
                      Include an algorithm or flowchart explaining the workflow.
                    </li>
                    <li>
                      Provide details of the software tools, programming
                      languages, and environments used.
                    </li>
                    <li>
                      For the Hardware Track, include a block diagram and list
                      of components along with the abstract.
                    </li>
                    <li>
                      220V AC power will be provided; teams should arrange their
                      own components and batteries.
                    </li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                      Shortlisting of Teams
                    </h3>
                  </div>
                  <ul className="list-decimal pl-6 space-y-2.5 text-sm sm:text-base text-muted-foreground">
                    <li>
                      After submission, ideas will be evaluated by experts from
                      industry and academia.
                    </li>
                    <li>
                      Evaluation criteria include novelty, complexity, clarity,
                      feasibility, practicability, sustainability, impact, user
                      experience (UX), and potential for future work.
                    </li>
                    <li>
                      A maximum of 15 teams will be shortlisted per track, with
                      3 teams on the waitlist.
                    </li>
                    <li>
                      Shortlisted teams will be informed via email and must
                      confirm their registration within the given deadline.
                      Failure to do so will result in disqualification.
                    </li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                      Other Details
                    </h3>
                  </div>
                  <ul className="list-decimal pl-6 space-y-2.5 text-sm sm:text-base text-muted-foreground">
                    <li>
                      Prize money will be transferred to the team lead or chosen
                      team member within 15 days of the result announcement.
                    </li>
                    <li>
                      Teams must provide name, account number, and IFSC code for
                      fund transfer.
                    </li>
                    <li>No in-hand cash will be provided.</li>
                    <li>
                      In case of a tie, the organisers' decision on prize
                      distribution will be final.
                    </li>
                    <li>
                      Projects involving large peripheral hardware must be
                      pre-approved by the organisers.
                    </li>
                  </ul>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                      Code of Conduct
                    </h3>
                  </div>
                  <ul className="list-decimal pl-6 space-y-2.5 text-sm sm:text-base text-muted-foreground">
                    <li>
                      All participants must carry a valid college photo ID
                      throughout the event.
                    </li>
                    <li>
                      Teams are fully responsible for the safety, handling, and
                      maintenance of their own equipment and belongings.
                    </li>
                    <li>
                      The organisers reserve the right to disqualify any team
                      involved in plagiarism, misconduct, misrepresentation, or
                      violation of event rules.
                    </li>
                    <li>
                      Participants are expected to maintain professionalism,
                      respect, and ethical conduct at all times during the
                      hackathon.
                    </li>
                    <li>
                      Any kind of misbehavior, disrespect, or inappropriate
                      conduct toward volunteers, organisers, or fellow
                      participants will not be tolerated and may result in
                      immediate disqualification.
                    </li>
                    <li>
                      Any form of disruptive behavior, cheating, or rule
                      violation will lead to immediate disqualification.
                    </li>
                    <li>
                      All disputes or decisions during the event will be handled
                      at the sole discretion of the organising committee, and
                      their decision will be final and binding.
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History */}
        <section
          id="history"
          className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 anchor-offset"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                  History
                </h2>
              </div>
              <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12">
                A look back at our journey over the years
              </p>
            </motion.div>

            <div className="relative mx-auto">
              {/* vertical line - left on mobile, center on desktop */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 sm:-translate-x-1/2 bg-gradient-to-b from-secondary via-secondary to-secondary opacity-50" />

              <div className="space-y-8 sm:space-y-14 md:space-y-16">
                {history.map((h, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.div
                      key={`${h.year}-${idx}`}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className={`relative flex items-stretch ${
                        isLeft ? "sm:justify-start" : "sm:justify-end"
                      }`}
                    >
                      {/* node */}
                      {/* <motion.div
                        className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 top-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.4, delay: idx * 0.08 + 0.15 }}
                      >
                        <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-secondary ring-2 sm:ring-4 ring-secondary/30 shadow-[0_0_18px_rgba(168,85,247,0.5)]" />
                      </motion.div> */}

                      {/* content */}
                      <div
                        className={`w-full pl-10 sm:pl-0 sm:w-[46%] ${
                          isLeft ? "sm:pr-8" : "sm:pl-8"
                        }`}
                      >
                        <Card className="glass-effect p-4 sm:p-6 md:p-7 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 sm:gap-6 items-center">
                            <img
                              src={h.img}
                              alt={h.title}
                              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl object-cover border border-border mx-auto md:mx-0 shadow-card group-hover:scale-[1.02] transition-transform duration-300"
                            />
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-md bg-secondary/15 text-secondary border border-secondary/30 text-xs sm:text-sm font-semibold">
                                  {h.year}
                                </span>
                                <span className="hidden sm:inline text-muted-foreground">
                                  •
                                </span>
                                <span className="text-base sm:text-lg md:text-xl font-heading font-bold text-foreground/90">
                                  {h.title}
                                </span>
                              </div>
                              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                {h.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact - Organized By Full Hero */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 anchor-offset"
        >
          <div className="container mx-auto max-w-6xl">
            {/* Organized By */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                  Organized By
                </h2>
              </div>
              <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-10">
                Proudly brought to you by
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full group-hover:bg-secondary/30 transition-all duration-300" />
                    <img
                      src={csiLogo}
                      alt="CSI"
                      className="relative h-24 sm:h-32 md:h-40 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full group-hover:bg-secondary/30 transition-all duration-300" />
                    <img
                      src={ecellLogo}
                      alt="E-Cell"
                      className="relative h-24 sm:h-32 md:h-40 w-auto max-w-full object-contain  group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                  Get In Touch
                </h3>
              </div>
              <p className="text-center text-muted-foreground text-sm sm:text-base mb-8">
                Have questions? We're here to help
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="glass-effect p-6 sm:p-7 md:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/30">
                          <Users className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-heading font-bold mb-2">
                        Affan
                      </div>
                      <div className="text-muted-foreground text-sm sm:text-base mb-3">
                        CSI Chief Coordinator
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                        <Phone className="w-4 h-4 text-secondary" />
                        <a
                          className="text-secondary hover:underline font-medium"
                          href="tel:+919121795950"
                        >
                          +91 9121795950
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="glass-effect p-6 sm:p-7 md:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/30">
                          <Users className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-heading font-bold mb-2">
                        Rayyan
                      </div>
                      <div className="text-muted-foreground text-sm sm:text-base mb-3">
                        E-Cell Chief Coordinator
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                        <Phone className="w-4 h-4 text-secondary" />
                        <a
                          className="text-secondary hover:underline font-medium"
                          href="tel:+919908784538"
                        >
                          +91 9908784538
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-center"
              >
                <Card className="glass-effect p-3 sm:p-7 border border-border/50 hover:border-secondary/40 transition-all duration-300 inline-block group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-8 p-1 h-8 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/30">
                      <Mail className="w-3 h-3 sm:w-6 sm:h-6 text-secondary" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1">
                        Email Us At
                      </div>
                      <a
                        className="text-secondary hover:underline font-medium text-sm sm:text-base md:text-lg"
                        href="mailto:hackrevolution@mjcollege.ac.in"
                      >
                        hackrevolution@mjcollege.ac.in
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
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
    new Intl.NumberFormat("en-IN").format(num);

  return (
    <div className="mb-6 sm:mb-8">
      <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2">
        Cash Prizes Worth
      </div>
      <div
        className="font-heading font-extrabold tracking-tight leading-none 
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent"
      >
        ₹ {formatIndian(value)}
      </div>
    </div>
  );
};

export default Index;
