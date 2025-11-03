import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  Mail,
  Building2
} from "lucide-react";
import Squares from "@/components/Squares";
import terraviewPoster from "@/assets/terraview2.jpg";
import csiLogo from "@/assets/csi_logo.png";
import ecellLogo from "@/assets/ecell_logo.png";
import acesLogo from "@/assets/aces.png";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Terraview = () => {
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
      <div className="relative z-10 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Link to="/#themes" className="inline-flex items-center text-secondary hover:text-secondary/80 transition-all duration-300 mb-6 hover:scale-105">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Hackathon Themes
            </Link>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
               <TextGenerateEffect words="Terraview Track" />
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
              <div className="bg-black/70 text-yellow-500 border-yellow-500/30 rounded-full glass-effect dark:text-yellow-400 text-sm sm:text-base md:text-lg px-3 py-1">
                Exclusive for 1st Year Students
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Data Analytics track for first-year students using Terraview software
            </p>
            <Link to="/Terraview_registration" className="inline-block">
              <Button className="px-8 py-6 text-lg sm:text-xl font-bold bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-secondary/50">
                Register Now
              </Button>
            </Link>
          </motion.div>

          {/* Removed Poster Section */}

          {/* New Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12 sm:mb-16"
          >
            {/* <Card className="glass-effect p-5 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300"> */}
            <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Hack Revolution 2025: Data Analytics Using Terraview</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex items-start gap-3"><Calendar className="h-5 w-5 text-secondary mt-0.5" /><div><span className="font-semibold">Date:</span> Saturday, Nov 8, 2025</div></div>
                  <div className="flex items-start gap-3"><Clock className="h-5 w-5 text-secondary mt-0.5" /><div><span className="font-semibold">Time:</span> 10:30 AM – 1:00 PM</div></div>
                  <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" /><div><span className="font-semibold">Venue:</span> Seminar Hall, Block 4, Muffakham Jah College of Engineering and Technology</div></div>
                  <div className="flex items-start gap-3"><Users className="h-5 w-5 text-secondary mt-0.5" /><div><span className="font-semibold">Organized By:</span> CSI & E-CELL</div></div>
                  <div className="flex items-start gap-3"><Building2 className="h-5 w-5 text-secondary mt-0.5" /><div><span className="font-semibold">Powered By:</span> ACES</div></div>
                  <div className="flex items-start gap-3"><GraduationCap className="h-5 w-5 text-secondary mt-0.5" /><div><span className="font-semibold">Open To:</span> First-Year Students Only</div></div>
                  <div className="flex items-start gap-3"><Trophy className="h-5 w-5 text-secondary mt-0.5" /><div><span className="font-semibold">Prize Pool:</span> ₹30,000</div></div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Track Overview & Guidelines */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-12 sm:mb-16">
            <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4 flex items-center bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                  <Database className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-secondary" />
                  Track Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                  The Data Analytics Using Terraview track introduces first-year students to the exciting field of data analysis using the Terraview software. This beginner-friendly track is tailored for participants with minimal coding knowledge, offering them an opportunity to explore the fundamentals of data processing, analysis, and visualization.
                </p>
                <h3 className="font-semibold text-base sm:text-lg mb-3">Participants will:</h3>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base mb-6">
                  <li>• Use datasets provided in the following drive link to create problem statements:</li>
                </ul>
                <div className="mb-6">
                  <a 
                    href="https://drive.google.com/drive/folders/1FErnI8Xo7MFYkri3Lmo34x39hFjJ2JAP" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-secondary/50"
                  >
                    <Database className="h-5 w-5" />
                    Dataset Drive Link
                  </a>
                </div>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base mb-6">
                  <li>• Perform analysis to uncover insights and propose data-driven solutions using Terraview.</li>
                  <li>• Generate compelling visualizations using Terraview and save them in OWBX format.</li>
                  {/* <li>• Present your findings through a PPT containing all relevant visualizations. Ensure that the OWBX file is stored in a Google Drive folder, and include the Drive link on the final slide of the PPT before uploading it on our website.</li> */}
                  <li>• Present your findings through a PPT containing all relevant visualizations. Ensure that the OWBX file is stored in a Google Drive folder, and include the Drive link on the final slide of the PPT. It is mandatory to upload this .pptx file on our website for the Terraview Track submission.</li>
                  <li>• Also upload the same .pptx file on the ACES HUB Application.</li>
                  <li>• It is mandatory to register on the ACES HUB Application as well.</li>
                  <li>• Attach a PDF of the screenshot of your profile section from the ACES HUB Application on the website while registering for the Terraview Track.</li>
                </ul>
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4 flex items-center bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-secondary" />
                  Track Guidelines
                </h2>
                <div className="space-y-6 text-sm sm:text-base">
                  <div>
                    <h3 className="font-semibold mb-2">Eligibility</h3>
                    <p className="text-muted-foreground">Only first-year students are allowed to participate in this track.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Project Requirements</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Participants must perform data analysis using Terraview software.</li>
                      <li>The analysis should focus on extracting insights, generating visualizations, and solving specific data-related problems.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">PPT/Abstract Submission</h3>
                    <p className="text-muted-foreground">Participant must submit an abstract detailing:</p>
                    <ul className="space-y-2 text-muted-foreground mt-2">
                      <li>• The problem or dataset chosen for analysis.</li>
                      <li>• The approach and methodology using Terraview.</li>
                      <li>• The expected outcomes and insights.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Team Composition</h3>
                    <p className="text-muted-foreground">This track is individual-based; no teams are allowed.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Evaluation Criteria</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Innovation</li>
                      <li>• Insightfulness</li>
                      <li>• Practical Relevance</li>
                      <li>• Technical Execution</li>
                      <li>• Feature Utilization</li>
                      <li>• Meaningful Insights</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Presentation Requirements</h3>
                    <p className="text-muted-foreground">Participants must present their findings with clear documentation and visualizations during the event.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.5, delay: 0.25 }} className="mb-12 sm:mb-16">
            <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Focus Areas for Abstracts</h2>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• Dataset/problem definition.</li>
                  <li>• Real-world relevance.</li>
                  <li>• Methodology using Terraview.</li>
                  <li>• Expected insights.</li>
                  <li>• Creativity in visualization.</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-12 sm:mb-16">
            <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Additional Information</h2>
                <p className="text-muted-foreground mb-6">A detailed tutorial on how to use Terraview will be provided as part of the guidelines to assist participants in navigating the software effectively.</p>
                <a 
                  href="https://www.youtube.com/playlist?list=PLrdKr6wzYfEJZjLLd8kRyjo7M1tmTFvEs" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-secondary/50"
                >
                  <GraduationCap className="h-5 w-5" />
                  Terraview Tutorial Link
                </a>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.5, delay: 0.35 }} className="mb-12 sm:mb-16">
            <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Key Dates to Remember</h2>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• Workshop: Oct 29th, 2025 (1:30pm - 4:30pm)</li>
                  <li>• Registrations: Sun Oct 26, 2025 - Nov 4th, 2025</li>
                  <li>• Event Date: Nov 8, 2025</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-12 sm:mb-16">
            <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">How to Register Using the ACES Hub App</h2>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li><span className="font-medium text-foreground">Download the ACES Hub App:</span> From the Play Store for Android devices or the App Store for iOS devices.</li>
                  <li><span className="font-medium text-foreground">Login or Register:</span> If you are already a user, simply log in. If not, register first and then log in.</li>
                  <li><span className="font-medium text-foreground">Open the App:</span> Navigate to the menu screen and click on Events/Hackathon.</li>
                  <li><span className="font-medium text-foreground">Register for the Event:</span> Go to the My Events or My Registrations section, select the Hack Revolution 2025, and click on Register. Ensure you select <span className="font-semibold">Solo</span> as the registration type. Choose the 5th Track: Data Analysis with Terraview.</li>
                  <li>
                    <span className="font-medium text-foreground">Upload Required Files:</span> Prepare a ppt with an OWBX file in a Gdrive, and paste the Gdrive link on the last page of the ppt. And upload the PPT. Here is the sample link to PPT follow it:
                    <div className="mt-3">
                      <a 
                        href="https://docs.google.com/presentation/d/11HB2VGfh929GPezFkWs_CQvKwOOWDBCFW8Y88LH6858/edit?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-secondary/50"
                      >
                        <FileText className="h-5 w-5" />
                        PPT Template
                      </a>
                    </div>
                  </li>
                  <li><span className="font-medium text-foreground">Fill Out General Details:</span> Complete the form with your personal details.</li>
                  <li><span className="font-medium text-foreground">Submit:</span> Once all details are filled out, submit your registration.</li>
                </ol>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.5, delay: 0.45 }} className="mb-12 sm:mb-16">
            <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">App Download Links</h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://play.google.com/store/apps/details?id=com.acesindiadev.hackathon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-blue-500 text-white rounded-lg transition-smooth text-sm">Android: ACES Hub App on Play Store</a>
                  <a href="https://apps.apple.com/in/app/aces-hub/id6473405011" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-smooth text-sm">iOS: ACES Hub App on App Store</a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Ready to Get Started Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Card className="glass-effect p-8 sm:p-10 md:p-12 border border-secondary/30 hover:border-secondary/50 transition-all duration-300 group relative overflow-hidden bg-gradient-to-br from-secondary/10 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-8 text-base sm:text-lg">
                  Join the Terraview Track and showcase your data analytics skills
                </p>
                <Link to="/Terraview_registration" className="inline-block">
                  <Button className="px-10 py-7 text-lg sm:text-xl font-bold bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground transition-all duration-300 hover:scale-110 transform shadow-xl hover:shadow-secondary/50">
                    Register Now
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>

          {/* Contact Information (updated) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Card className="glass-effect p-6 sm:p-8 md:p-10 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden mb-12 sm:mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 text-center">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Contact Us</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-secondary" />
                    <a href="mailto:contact@aces-hub.com" className="text-secondary hover:text-secondary/80 transition-colors text-sm sm:text-base">
                      contact@aces-hub.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <a href="tel:+918125981069" className="text-secondary hover:text-secondary/80 transition-colors text-sm sm:text-base">
                      8125981069
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>


          {/* Organized By */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="glass-effect p-6 sm:p-8 md:p-10 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 text-center">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-6 bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">Organized By</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="group/logo"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full group-hover/logo:bg-secondary/30 transition-all duration-300" />
                      <img src={csiLogo} alt="CSI" className="relative h-24 sm:h-32 md:h-40 w-auto max-w-full object-contain group-hover/logo:scale-105 transition-transform duration-300" />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="group/logo"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full group-hover/logo:bg-secondary/30 transition-all duration-300" />
                      <img src={ecellLogo} alt="E‑Cell" className="relative h-24 sm:h-32 md:h-40 w-auto max-w-full object-contain group-hover/logo:scale-105 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <span className="text-base sm:text-lg md:text-xl">Powered by</span>
                  <img
                    src={acesLogo}
                    alt="ACES"
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terraview;
