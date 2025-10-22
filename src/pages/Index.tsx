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
  const targetDate = new Date("2025-10-28T00:00:00");

  // State for problem statements dialog
  const [selectedTrack, setSelectedTrack] = useState<(typeof tracks)[0] | null>(
    null
  );
  const [selectedProblemStatement, setSelectedProblemStatement] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const tracks = [
    {
      image: "/SmartEd.png",
      title: "Smart Education",
      description: "Innovate educational technology to transform learning experiences.",
      link: "/Register/education",
      problemStatements: [
        {
          title: "Gamified Environmental Education Platform for Schools and Colleges",
          description: `Problem Description

Despite the rising urgency of climate change and environmental degradation, environmental education remains largely theoretical in many Indian schools and colleges. Students are often taught textbook-based content with little emphasis on real-world application, local ecological issues, or personal responsibility.

There is a lack of engaging tools that motivate students to adopt eco-friendly practices or understand the direct consequences of their lifestyle choices. Traditional methods fail to instill sustainable habits or inspire youth participation in local environmental efforts.

Impact

As future decision-makers, students must be environmentally literate and empowered to take meaningful actions. Without innovative education methods, we risk raising a generation unaware of sustainability challenges.

An interactive, practical approach to environmental learning will foster long-term behavioral change, local involvement, and a ripple effect across families and communities. This aligns with India's SDG goals and NEP 2020's emphasis on experiential learning.

Expected Outcomes

• A gamified mobile/web platform or app that teaches students about environmental issues through interactive lessons, challenges, quizzes, and real-world tasks (e.g., tree-planting, waste segregation).
• Tracking of eco-points, enabling school-level competitions.
• Rewards for sustainable practices through digital badges and recognition.

Relevant Stakeholders / Beneficiaries

• School and college students
• Teachers and eco-club coordinators
• Environmental NGOs and government departments

Supporting Data

• UNESCO reports that experiential, gamified learning increases student retention and engagement by over 70%.
• NEP 2020 encourages integration of environmental awareness into the curriculum.`
        },
        {
          title: "Smart Curriculum Activity & Attendance App",
          description: `Problem Description

Many educational institutions still depend on manual attendance systems, which are time-consuming and error-prone. Teachers spend a significant portion of class time marking attendance, reducing valuable instructional hours. Additionally, students often waste free periods with unproductive activities due to a lack of structured guidance. This leads to poor time management and reduced alignment with long-term academic or career goals. There is also a gap in personalized learning support during idle classroom hours. Institutions currently lack tools that integrate daily schedules with individual student planning and automated tracking.

Impact / Why this problem needs to be solved

This issue impacts both administrative efficiency and student development. Automating attendance saves teachers' time and ensures more accurate records. Additionally, providing students with structured personal development activities during free time helps improve productivity, goal clarity, and learning outcomes. Institutions can also gain better insight into student behavior and engagement, allowing for more targeted support.

Expected Outcomes

• Automatically marks student attendance based on the daily timetable using QR code, Bluetooth/Wi-Fi proximity, or face recognition.
• Displays real-time attendance on a classroom screen.
• Suggests personalized academic tasks during free periods based on the student's interests, strengths, and career goals.
• Generates a daily routine combining class schedule, free time, and long-term personal goals.

The app will require minimal infrastructure and be usable by both students and staff with basic training.

Relevant Stakeholders / Beneficiaries

• Students
• Teachers
• College administrators
• Career counselors
• Education departments

Supporting Data

• Surveys and reports on classroom time usage, student productivity, and NEP 2020 recommendations emphasizing personalized and experiential learning.`
        },
        {
          title: "Automated Student Attendance Monitoring and Analytics System for Colleges",
          description: `Problem Description

Attendance tracking in most colleges is still done manually, usually through roll calls or paper registers. This consumes valuable teaching time and often leads to errors such as incorrect entries or proxy attendance. In larger classes, the issue becomes even harder to manage.

Additionally, faculty and administrators lack easy access to attendance insights, making it difficult to identify students at risk or to track patterns in engagement. As education undergoes digital transformation, continuing to rely on outdated systems creates unnecessary inefficiencies and delays.

There is a clear need for a solution that not only automates attendance but also provides analytics for better academic planning. Such a system should be user-friendly, reliable, and work seamlessly in both in-person and online settings.

Impact / Why this problem needs to be solved

• Saves valuable teaching time otherwise wasted on manual attendance.
• Reduces errors and eliminates the problem of proxy attendance.
• Provides actionable insights for faculty to identify disengaged or struggling students.
• Enhances transparency and accountability in academic processes.
• Supports digital transformation of higher education institutions.

Expected Outcomes

• Automated attendance system using QR codes, biometrics, or facial recognition.
• Cloud-based dashboard for administrators and faculty to review attendance records.
• Analytics to identify attendance trends and student engagement levels.
• Compatibility with both offline and online classes.

Relevant Stakeholders / Beneficiaries

• Students
• Faculty and academic administrators
• College management bodies
• Education departments and policymakers`
        },
        {
          title: "Digital Platform for Centralized Alumni Data Management and Engagement",
          description: `Problem Description

Most educational institutions do not have a reliable or centralized system to manage their alumni data. Once students graduate, their contact information, academic records, and career updates are often scattered across multiple platforms or lost entirely. In many cases, alumni communication is restricted to informal WhatsApp groups or outdated mailing lists, making long-term engagement difficult.

This lack of a structured system limits the potential of alumni relationships. Institutions miss opportunities to involve alumni in events, mentoring, internships, or fundraising. In a digitally connected world, the absence of a proper alumni management system creates a significant gap in outreach and growth.

Impact / Why this problem needs to be solved

• Strengthens alumni engagement and builds long-term institutional relationships.
• Provides opportunities for mentorship, internships, and collaborations.
• Enhances fundraising potential through better alumni outreach.
• Increases institutional credibility and community building.

Expected Outcomes

• A centralized alumni management platform to store and update alumni data.
• Features for communication, networking, and event management.
• Secure system for tracking career progress, mentorship opportunities, and donations.
• Easy-to-use interface for both administrators and alumni.

Relevant Stakeholders / Beneficiaries

• Alumni
• Current students (through mentorship and internships)
• Faculty and institution administrators
• College/university management bodies
• Employers and recruiters`
        },
        {
          title: "Centralised Digital Platform for Comprehensive student activity record in HEIs",
          description: `Background:

Despite increasing digitization in education, student achievements ranging from academic excellence to participation in curricular and extracurricular activities remain scattered across various departments or lost in paper-based records, in many colleges and universities. There is no centralized digital platform that enables institutions to document, track, and showcase a student's complete profile, including:
- Conferences and workshops attended
- Certifications earned
- Club activities and volunteering efforts
- Competitions and academic contests
- Leadership roles and internships
- Community services done

This gap not only hampers institutional efficiency but also limits students' ability to build a verified and dynamic portfolio that could support job applications, higher education admissions, and skill recognition. In addition, during events like NAAC accreditation, the lack of consolidated data becomes a major administrative challenge.

Description:

The above problem necessitates the development of a Smart Student Hub (Mobile + Web Application) that acts as a centralized student record and achievement management platform.

Key Features include:
- Dynamic Student Dashboard: Real-time updates on academic performance, attendance, and credit-based activities.
- Activity Tracker: Upload and validate participation in seminars, conferences, online courses (e.g., MOOCs), internships, and extra-curriculars.
- Faculty Approval Panel: Faculty or admin can approve uploaded records to maintain credibility.
- Auto-Generated Digital Portfolio: Downloadable and shareable verified student portfolio in PDF or web link format.
- Analytics & Reporting: For institutions to generate reports for NAAC, AICTE, NIRF, or internal evaluations.
- Integration Support: Can link with existing Learning Management Systems (LMS), ERP, or digital university platforms.

Impact and Benefits:

- Empowers students with a verified, holistic digital profile.
- Facilitates career planning, placements, and scholarship/higher studies applications.
- Reduces administrative burden during audits and accreditations.
- Encourages participation in co-curricular activities by making achievements visible and valued.
- Promotes data-driven decision-making at the institutional level.

Expected Solution:

We propose the development of a mobile + web-based application that can digitally catalogue and manage a student's academic and non-academic achievements throughout their time in college. The proposed protocol will:
- Build a verified, holistic student profile from Day 1
- Reduce paperwork and improve transparency
- Make students better prepared for placements, fellowships, or postgraduate admissions
- Empower faculty with real-time data for mentoring and tracking
- Align with the digital transformation goals of higher education institutions
- Enhance institutional efficiency during accreditation or policy audits

This will bridge the gap by offering an all-in-one solution that empowers students, simplifies faculty tasks, and modernizes institutional operations.`
        },
        {
          title: "Smart Classroom & Timetable Scheduler",
          description: `Background

Higher Education institutions often face challenges in efficient class scheduling due to limited infrastructure, faculty constraints, elective courses, and overlapping departmental requirements. Manual timetable preparation leads to frequent clashes in classes, underutilized classrooms, uneven workload distribution, and dissatisfied students and faculty members. With the increasing adoption of multidisciplinary curricula and flexible learning under NEP 2020, the class scheduling process has become more complex and dynamic, requiring intelligent and adaptive solutions.

Description

The current scheduling mechanism in most higher education institutes/colleges relies on manual input via spreadsheets or basic tools. These fail to account for real-time availability of faculty, room capacity, teaching load norms, subject combinations, and student preferences. A solution is required that will accommodate the various parameters required for scheduling classes for UG and PG students and return an optimized timetable ensuring:
• Maximized utilization of classrooms and laboratories
• Minimized workload on faculty members and students
• Achievement of required learning outcomes

Key Parameters

The following parameters can be taken into account as variables for creating optimized timetables:
- Number of classrooms available
- Number of batches of students
- Number of subjects to be taught in a particular semester
- Names of subjects
- Maximum number of classes per day
- Number of classes to be conducted for a subject per week / per day
- Number of faculties available for different subjects
- Average number of leaves a faculty member takes in a month
- Special classes that have fixed slots in timetable

Students may also consider additional variables that may help in effective timetable preparation.

Expected Solution

A web-based platform that can be linked to the college website. Authorized personnel will be able to login and input data against the listed variables to generate fully optimized timetables.

The platform should include:
• Login facility for authorized personnel to create and manage timetables
• Multiple options of optimized timetables to choose from
• Review and approval workflow for competent authorities
• Suggestions for suitable rearrangements when optimal solutions are not available
• Support for multi-department and multi-shift scheduling`
        }
      ]
    },
    {
      image: "/UrbanTech.png",
      title: "Urban Tech and Smart Cities",
      description: "Develop innovative solutions for smart cities and urban challenges.",
      link: "/Register/urban-tech",
      problemStatements: [
        {
          title: "Real-Time Public Transport Tracking for Small Cities",
          description: "A system to track public transport in real-time for small cities, improving commuter experience and transportation efficiency."
        },
        {
          title: "Smart Traffic Management System for Urban Congestion",
          description: "An intelligent traffic management solution to reduce urban congestion through real-time monitoring and adaptive signal control."
        },
        {
          title: "Crowdsourced Civic Issue Reporting and Resolution System",
          description: "A platform for citizens to report civic issues and track their resolution by local authorities."
        },
        {
          title: "AI-Based Rockfall Prediction and Alert System for Open-Pit Mines",
          description: "A safety system using AI to predict and alert about potential rockfall hazards in mining areas."
        },
        {
          title: "Recovery and Reuse of Fresh Water Resources",
          description: "Innovative solutions for water recovery and reuse to address water scarcity challenges in urban areas."
        },
        {
          title: "Forecasting materials demand with machine learning for supply chain planning",
          description: "Machine learning system to predict material demand for optimized supply chain management and inventory control."
        }
      ]
    },

    {
      image: "/Agriculture.png",
      title: "Agriculture and FoodTech",
      description: "Build technology solutions for sustainable and smart farming.",
      link: "/Register/agro-tech",
      problemStatements: [
        {
          title: "Image-based Breed Recognition for Cattle and Buffaloes of India",
          description: "A mobile application that identifies and provides information about different breeds of cattle and buffaloes using image recognition technology."
        },
        {
          title: "Smart Crop Advisory System for Small and Marginal Farmers",
          description: "A decision support system that provides personalized crop advisories based on weather, soil conditions, and market trends."
        },
        {
          title: "AI-Based Crop Recommendation System for Farmers",
          description: "An intelligent system that recommends the best crops to grow based on soil type, climate, and other environmental factors."
        },
        {
          title: "AI-Powered Crop Yield Prediction and Optimization",
          description: "Predictive analytics tool that helps farmers estimate crop yields and optimize their farming practices."
        },
        {
          title: "AI-Powered Monitoring of Crop Health, Soil Condition, and Pest Risks",
          description: "Comprehensive monitoring system using AI and IoT to track crop health, soil conditions, and pest risks in real-time."
        },
        {
          title: "Enhancing Farmer Productivity through Innovative Technology Solutions",
          description: "A suite of technological solutions designed to improve overall farm productivity and efficiency."
        }
      ]
    },
    {
      image: "/Hardware.png",
      title: "Open Innovation (Hardware)",
      description: "Create cutting-edge hardware prototypes and IoT solutions.",
      link: "/Register/hardware",
      problemStatements: []
    },
    {
      image: "/Terraview.png",
      title: "Terraview",
      description: "Data Analytics track for first-year students using Terraview software.",
      link: "/Terraview",
      problemStatements: [
        {
          title: "Data Analytics Challenge",
          description: "Exclusive challenge for first-year students to showcase their data analysis skills using Terraview software."
        }
      ],
      isSpecial: true,
      specialLabel: "Exclusive for 1st Year Students"
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
                <Link to="/Register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    title="Register Now"
                    className="w-full sm:w-auto text-base sm:text-lg font-semibold px-8 sm:px-10 py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 transition-all duration-300  hover:scale-105 transform"
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section id="home" className="py-0 px-3 sm:px-6 lg:px-8 anchor-offset">
          <div className="w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="glass-effect rounded-2xl p-5 sm:p-8 md:p-10 max-w-5xl mx-auto border border-secondary/20 backdrop-blur-xl hover:border-secondary/40 transition-colors duration-300"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                </motion.div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-center bg-secondary bg-clip-text text-transparent">
                  Registration Closes In
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <CountDown targetDate={targetDate} />
              </motion.div>
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
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Card className="p-4 sm:p-5 border border-border/50 hover:border-secondary/40 transition-all duration-300 glass-effect group hover:scale-[1.01] cursor-pointer">
                                            <div className="flex items-start gap-3 sm:gap-4">
                                              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-secondary to-secondary text-secondary-foreground flex items-center justify-center text-sm sm:text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                {idx + 1}
                                              </div>
                                              <div className="flex-1 pt-1">
                                                <h4 className="text-foreground/90 font-semibold text-sm sm:text-base leading-tight group-hover:text-secondary transition-colors duration-300">
                                                  {statement.title}
                                                </h4>
                                                <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                                                  Click to view details
                                                </p>
                                              </div>
                                            </div>
                                          </Card>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-sm sm:max-w-2xl md:max-w-4xl max-h-[85vh] overflow-y-auto bg-black/30 border-secondary/20 backdrop-blur-xl scroll-hide">
                                          <DialogHeader className="pb-4 border-b border-border/50">
                                            <div className="flex items-center justify-center gap-3 mb-2">
                                              <Lightbulb className="w-6 h-6 text-secondary" />
                                              <DialogTitle className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-center bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                                                {statement.title}
                                              </DialogTitle>
                                            </div>
                                            <p className="text-sm text-muted-foreground text-center">
                                              Problem Statement Details
                                            </p>
                                          </DialogHeader>
                                          <div className="mt-6">
                                            <Card className="p-4 sm:p-6 border border-border/50 glass-effect">
                                              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base whitespace-pre-line">
                                                {statement.description}
                                              </p>
                                            </Card>
                                          </div>
                                        </DialogContent>
                                      </Dialog>
                                    </motion.div>
                                  )
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                        <Link to={track.link} className="w-full">
                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-secondary-foreground transition-all duration-300 text-xs sm:text-sm font-semibold hover:scale-[1.01]"
                          >
                            <Trophy className="w-4 h-4 mr-2" />
                            Register for This Track
                          </Button>
                        </Link>
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
                      <Link to={track.link}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 w-full text-xs sm:text-sm"
                        >
                          Learn More
                        </Button>
                      </Link>
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
                      className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end sm:justify-end"
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
                        className={`ml-8 sm:${isLeft ? "mr-8" : "ml-8"
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
                      Download the ACES App, register your team there, and fill
                      out all necessary details. Upload a screenshot of your
                      registration confirmation on the portal. Failing to do so
                      will result in an incomplete registration and will not be
                      accepted.
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
                      5 teams on the waitlist.
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
                      className={`relative flex items-stretch ${isLeft ? "sm:justify-start" : "sm:justify-end"
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
                        className={`w-full pl-10 sm:pl-0 sm:w-[46%] ${isLeft ? "sm:pr-8" : "sm:pl-8"
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
