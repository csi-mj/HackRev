import { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";
import { Download, ArrowLeft, Users, FileText, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Squares from "@/components/Squares";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// Import template file - using dynamic import for .pptx files
const templateFile = "/Template.pptx";

type TrackKey = "urban-tech" | "hardware" | "agro-tech" | "education";

const TITLE_BY_TRACK: Record<TrackKey, string> = {
  "urban-tech": "Urban Tech and Smart Cities",
  hardware: "Open Innovation (Hardware)",
  "agro-tech": "AgroTech and FoodTech",
  education: "Smart Education",
};

const PROBLEM_STATEMENTS: Record<TrackKey, string[]> = {
  "urban-tech": [
    "Real-Time Public Transport Tracking for Small Cities",
    "Smart Traffic Management System for Urban Congestion",
    "Crowdsourced Civic Issue Reporting and Resolution System",
    "AI-Based Rockfall Prediction and Alert System for Open-Pit Mines",
    "Recovery and Reuse of Fresh Water Resources",
    "Forecasting materials demand with machine learning for supply chain planning, procurement, and inventory optimization",
  ],
  hardware: ["Open Innovation - Hardware Solutions"],
  "agro-tech": [
    "Image-based Breed Recognition for Cattle and Buffaloes of India",
    "Smart Crop Advisory System for Small and Marginal Farmers",
    "AI-Based Crop Recommendation System for Farmers",
    "AI-Powered Crop Yield Prediction and Optimization",
    "AI-Powered Monitoring of Crop Health, Soil Condition, and Pest Risks Using Sensor and Imaging Data",
    "Enhancing Farmer Productivity through Innovative Technology Solutions",
  ],
  education: [
    "Gamified Environmental Education Platform for Schools and Colleges",
    "Smart Curriculum Activity & Attendance App",
    "Automated Student Attendance Monitoring and Analytics System for Colleges",
    "Digital Platform for Centralized Alumni Data Management and Engagement",
    "Centralised Digital Platform for Comprehensive student activity record in HEIs",
    "Smart Classroom & Timetable Scheduler",
  ],
};

const RegisterTrack = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const track = (params.track || "urban-tech") as TrackKey;

  const trackTitle = useMemo(
    () => TITLE_BY_TRACK[track] || TITLE_BY_TRACK["urban-tech"],
    [track]
  );

  const [submitting, setSubmitting] = useState(false);
  const [teamSize, setTeamSize] = useState<number>(4);
  const [selectedProblemStatement, setSelectedProblemStatement] =
    useState<string>("");

  const supabase = useMemo(() => {
    const url = (import.meta.env.VITE_SUPABASE_URL ||
      import.meta.env.NEXT_PUBLIC_SUPABASE_URL) as string;
    const anon = (import.meta.env.VITE_SUPABASE_ANON ||
      import.meta.env.NEXT_PUBLIC_SUPABASE_ANON) as string;
    console.log(url, anon);
    return createClient(url, anon);
  }, []);

  const tableByTrack: Record<TrackKey, string> = {
    "urban-tech": "inn_soft",
    hardware: "inn_hard",
    education: "EdTech",
    "agro-tech": "AgroTech",
  };

  const bucketByTrack: Record<TrackKey, string> = {
    "urban-tech": "af_sf",
    hardware: "af_hd",
    education: "af_ed",
    "agro-tech": "af_ag",
  };

  // Function to download the template file
  const downloadTemplate = () => {
    try {
      const link = document.createElement("a");
      link.href = templateFile;
      link.download = "HackRevolution_Template.pptx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({
        title: "Template Downloaded",
        description: "PPT template has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download the template. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget as HTMLFormElement;
    const form = new FormData(formEl);

    // Basic required validation
    const requiredFields = [
      "teamName",
      "teamSize",
      "leaderName",
      "leaderRoll",
      "phone",
      "email",
      "college",
      "department",
      "year",
      "aces_screenshot",
    ];
    for (const key of requiredFields) {
      if (!String(form.get(key) || "").trim()) {
        toast({
          title: "Missing field",
          description: "Please fill all required fields.",
        });
        return;
      }
    }

    // Validate problem statement selection
    if (!selectedProblemStatement.trim()) {
      toast({
        title: "Missing problem statement",
        description: "Please select a problem statement.",
      });
      return;
    }

    // Validate team member fields based on team size (leader is separate)
    const sizeNum = Number(form.get("teamSize") || 0);
    const membersNeeded = Math.max(0, sizeNum - 1);
    for (let i = 1; i <= membersNeeded; i++) {
      const name = String(form.get(`member${i}`) || "").trim();
      const roll = String(form.get(`member${i}Roll`) || "").trim();
      if (!name || !roll) {
        toast({
          title: "Missing member details",
          description: `Please fill Member ${i} name and roll number.`,
        });
        return;
      }
    }

    try {
      setSubmitting(true);
      const trackKey = track;

      // 1) Upload abstract to storage if provided
      const abstractFile = form.get("abstract") as File | null;
      let abstractUrl: string | null = null;
      if (abstractFile && abstractFile.size > 0) {
        const filename = `${Date.now()}_${Math.random()
          .toString(36)
          .slice(2)}_${abstractFile.name}`;
        const { data: uploadRes, error: uploadErr } = await supabase.storage
          .from(bucketByTrack[trackKey])
          .upload(filename, abstractFile, {
            upsert: false,
            contentType: abstractFile.type,
          });
        if (uploadErr) throw uploadErr;
        const storedPath = uploadRes?.path ?? filename;
        const { data: pub } = supabase.storage
          .from(bucketByTrack[trackKey])
          .getPublicUrl(storedPath);
        abstractUrl = pub.publicUrl;
      }

      // Upload ACES screenshot PDF to aces bucket
      const acesScreenshotFile = form.get("aces_screenshot") as File | null;
      let acesScreenshotUrl: string | null = null;
      if (acesScreenshotFile && acesScreenshotFile.size > 0) {
        const acesFilename = `${Date.now()}_${Math.random()
          .toString(36)
          .slice(2)}_${acesScreenshotFile.name}`;
        const { data: acesUploadRes, error: acesUploadErr } =
          await supabase.storage
            .from("aces")
            .upload(acesFilename, acesScreenshotFile, {
              upsert: false,
              contentType: acesScreenshotFile.type,
            });
        if (acesUploadErr) throw acesUploadErr;
        const acesStoredPath = acesUploadRes?.path ?? acesFilename;
        const { data: acesPub } = supabase.storage
          .from("aces") 
          .getPublicUrl(acesStoredPath);
        acesScreenshotUrl = acesPub.publicUrl;
      }

      // Prepare member fields based on selected team size (member1..memberN)
      const size = sizeNum;
      const memberFields: Record<string, FormDataEntryValue | null> = {};
      for (let i = 1; i <= 5; i++) {
        if (i <= Math.max(0, size - 1)) {
          memberFields[`member${i}_name`] = form.get(`member${i}`);
          memberFields[`member${i}_roll`] = form.get(`member${i}Roll`);
        } else {
          memberFields[`member${i}_name`] = null;
          memberFields[`member${i}_roll`] = null;
        }
      }

      // 2) Insert row into table
      const payload = {
        team_name: form.get("teamName"),
        team_size: size,
        leader_name: form.get("leaderName"),
        team_lead_roll: form.get("leaderRoll"),
        leader_phone: form.get("phone"),
        leader_email: form.get("email"),
        college: form.get("college"),
        department: form.get("department"),
        year: form.get("year"),
        title: selectedProblemStatement, // Add the selected problem statement as title
        ...memberFields,
        abstract_url: abstractUrl,
        aces_screenshot: acesScreenshotUrl,
        track: trackKey,
        created_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from(tableByTrack[trackKey])
        .insert(payload as any);
      if (error) throw error;

      formEl.reset();
      // Redirect to success page with track title
      navigate(`/registration-success?t=${encodeURIComponent(trackTitle)}`, {
        state: { trackTitle },
      });
    } catch (err: any) {
      console.error("Registration submission failed:", err);
      toast({
        title: "Registration failed",
        description: String(err?.message || err || "Unknown error"),
      });
      alert(
        `Registration failed. Please try again.\n\nDetails: ${String(
          err?.message || err || "Unknown error"
        )}`
      );
    } finally {
      setSubmitting(false);
    }
  };

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
      <div className="relative z-10 py-12 sm:py-16 md:py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-md sm:max-w-2xl md:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <Link
              to="/Register"
              className="inline-flex items-center text-secondary hover:text-secondary/80 transition-all duration-300 mb-6 hover:scale-105"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tracks
            </Link>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-heading font-bold bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                <TextGenerateEffect words={trackTitle} />
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Provide your team details to register for this track
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="glass-effect p-4 sm:p-6 md:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label
                        htmlFor="teamName"
                        className="text-foreground font-medium"
                      >
                        Team Name
                      </Label>
                      <Input
                        id="teamName"
                        name="teamName"
                        placeholder="Your Team"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="teamSize"
                        className="text-foreground font-medium"
                      >
                        Team Size
                      </Label>
                      <Select
                        name="teamSize"
                        value={String(teamSize)}
                        onValueChange={(v) => setTeamSize(Number(v))}
                      >
                        <SelectTrigger id="teamSize" className="mt-1.5">
                          <SelectValue placeholder="Select (4-6)" />
                        </SelectTrigger>
                        <SelectContent className="p-1">
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="sm:col-span-2">
                      <Label
                        htmlFor="problemStatement"
                        className="text-foreground font-medium"
                      >
                        Problem Statement
                      </Label>
                      <Select
                        value={selectedProblemStatement}
                        onValueChange={setSelectedProblemStatement}
                      >
                        <SelectTrigger id="problemStatement" className="mt-1.5">
                          <SelectValue placeholder="Select a problem statement" />
                        </SelectTrigger>
                        <SelectContent className="max-w-[90vw] whitespace-normal break-words p-1">
                          {PROBLEM_STATEMENTS[track].map((statement, index) => (
                            <SelectItem key={index} value={statement}>
                              {statement}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label
                        htmlFor="leaderName"
                        className="text-foreground font-medium"
                      >
                        Team Leader Name
                      </Label>
                      <Input
                        id="leaderName"
                        name="leaderName"
                        placeholder="Full Name"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="leaderRoll"
                        className="text-foreground font-medium"
                      >
                        Team Leader Roll Number
                      </Label>
                      <Input
                        id="leaderRoll"
                        name="leaderRoll"
                        placeholder="Roll Number"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-foreground font-medium"
                      >
                        Team Leader Mobile Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="99999 99999"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-foreground font-medium"
                      >
                        Team Leader Email Id
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="college"
                        className="text-foreground font-medium"
                      >
                        College
                      </Label>
                      <Input
                        id="college"
                        name="college"
                        placeholder="Your College"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="department"
                        className="text-foreground font-medium"
                      >
                        Department
                      </Label>
                      <Input
                        id="department"
                        name="department"
                        placeholder="CSE / ECE / ..."
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="year"
                        className="text-foreground font-medium"
                      >
                        Year
                      </Label>
                      <Select name="year">
                        <SelectTrigger id="year" className="mt-1.5">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent className="p-1">
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label
                        htmlFor="member1"
                        className="text-foreground font-medium"
                      >
                        Team Member 1
                      </Label>
                      <Input id="member1" name="member1" className="mt-1.5" />
                    </div>
                    <div>
                      <Label
                        htmlFor="member1Roll"
                        className="text-foreground font-medium"
                      >
                        Team Member 1 Roll Number
                      </Label>
                      <Input
                        id="member1Roll"
                        name="member1Roll"
                        className="mt-1.5"
                      />
                    </div>
                    {(teamSize ?? 0) >= 3 && (
                      <div>
                        <Label
                          htmlFor="member2"
                          className="text-foreground font-medium"
                        >
                          Team Member 2
                        </Label>
                        <Input id="member2" name="member2" className="mt-1.5" />
                      </div>
                    )}
                    {(teamSize ?? 0) >= 3 && (
                      <div>
                        <Label
                          htmlFor="member2Roll"
                          className="text-foreground font-medium"
                        >
                          Team Member 2 Roll Number
                        </Label>
                        <Input
                          id="member2Roll"
                          name="member2Roll"
                          className="mt-1.5"
                        />
                      </div>
                    )}
                    {(teamSize ?? 0) >= 4 && (
                      <div>
                        <Label
                          htmlFor="member3"
                          className="text-foreground font-medium"
                        >
                          Team Member 3
                        </Label>
                        <Input id="member3" name="member3" className="mt-1.5" />
                      </div>
                    )}
                    {(teamSize ?? 0) >= 4 && (
                      <div>
                        <Label
                          htmlFor="member3Roll"
                          className="text-foreground font-medium"
                        >
                          Team Member 3 Roll Number
                        </Label>
                        <Input
                          id="member3Roll"
                          name="member3Roll"
                          className="mt-1.5"
                        />
                      </div>
                    )}
                    {(teamSize ?? 0) >= 5 && (
                      <div>
                        <Label
                          htmlFor="member4"
                          className="text-foreground font-medium"
                        >
                          Team Member 4
                        </Label>
                        <Input id="member4" name="member4" className="mt-1.5" />
                      </div>
                    )}
                    {(teamSize ?? 0) >= 5 && (
                      <div>
                        <Label
                          htmlFor="member4Roll"
                          className="text-foreground font-medium"
                        >
                          Team Member 4 Roll Number
                        </Label>
                        <Input
                          id="member4Roll"
                          name="member4Roll"
                          className="mt-1.5"
                        />
                      </div>
                    )}
                    {(teamSize ?? 0) >= 6 && (
                      <div>
                        <Label
                          htmlFor="member5"
                          className="text-foreground font-medium"
                        >
                          Team Member 5
                        </Label>
                        <Input id="member5" name="member5" className="mt-1.5" />
                      </div>
                    )}
                    {(teamSize ?? 0) >= 6 && (
                      <div>
                        <Label
                          htmlFor="member5Roll"
                          className="text-foreground font-medium"
                        >
                          Team Member 5 Roll Number
                        </Label>
                        <Input
                          id="member5Roll"
                          name="member5Roll"
                          className="mt-1.5"
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Label
                        htmlFor="aces_screenshot"
                        className="text-foreground font-medium"
                      >
                        Aces App Registration Screenshots (Upload PDF) *
                      </Label>
                      <Input
                        id="aces_screenshot"
                        name="aces_screenshot"
                        type="file"
                        accept=".pdf"
                        required
                        className=" mt-1.5 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-secondary-foreground hover:file:bg-secondary/90 file:cursor-pointer cursor-pointer"
                      />

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 w-full sm:w-auto mt-2"
                          >
                            <Info className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            View Instructions
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="glass-effect max-w-lg sm:mx-0 w-[calc(100vw-2rem)] sm:w-auto fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <DialogHeader>
                            <DialogTitle className="text-secondary text-lg font-heading font-bold text-center mb-4">
                              ACES Hub Registration Instructions
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="bg-muted/50 p-4 rounded-lg border border-border">
                              <h3 className="text-secondary font-semibold mb-3">
                                Instructions:
                              </h3>
                              <ol className="list-decimal list-inside space-y-2 text-base text-muted-foreground">
                                <li>
                                  Open the Play Store or App Store and download
                                  the ACES Hub app.
                                </li>
                                <li>
                                  Ensure that all your teammates register on the
                                  app.
                                </li>
                                <li>
                                  Attach a PDF containing screenshots of the
                                  profiles of all registered teammates.
                                </li>
                                <li className="text-red-500 font-semibold">
                                  Failure to do so will lead to
                                  disqualification.
                                </li>
                              </ol>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                              <a
                                href="https://play.google.com/store/apps/details?id=com.acesindiadev.hackathon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-blue-500 text-white rounded-lg transition-smooth text-sm"
                              >
                                Google Play Store
                              </a>
                              <a
                                href="https://apps.apple.com/in/app/aces-hub/id6473405011"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-smooth text-sm"
                              >
                                Apple App Store
                              </a>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="abstract"
                        className="text-foreground font-medium"
                      >
                        Submission of Abstract (PPT)
                      </Label>
                      <Input
                        id="abstract"
                        name="abstract"
                        type="file"
                        accept=".ppt,.pptx"
                        className="mt-1.5 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-secondary-foreground hover:file:bg-secondary/90 file:cursor-pointer cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/5 rounded-lg border border-border/50">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          Need a template to get started?
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Download our sample PPT template with proper
                          formatting
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={downloadTemplate}
                        className="border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 w-full sm:w-auto"
                      >
                        <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Download Template
                      </Button>
                    </div>
                  </div>

                  <input type="hidden" name="track" value={track} />
                  <input type="hidden" name="teamSize" value={teamSize} />

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-secondary-foreground transition-all duration-300 font-semibold"
                    >
                      {submitting ? "Submitting..." : "Register Now"}
                    </Button>
                    <Link to="/Register" className="w-full sm:w-auto">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-border/50 hover:border-secondary/50 hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Tracks
                      </Button>
                    </Link>
                  </div>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTrack;
