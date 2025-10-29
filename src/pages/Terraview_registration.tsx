import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Squares from "@/components/Squares";
import { ArrowLeft, Upload } from "lucide-react";

const TerraviewRegistration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const supabase = useMemo(() => {
    const url = (import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL) as string;
    const anon = (import.meta.env.VITE_SUPABASE_ANON || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON) as string;
    return createClient(url, anon);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget as HTMLFormElement;
    const form = new FormData(formEl);

    const required = ["name", "college", "branch", "year", "roll_no", "mobile_no", "email_no"] as const;
    for (const k of required) {
      if (!String(form.get(k) || "").trim()) {
        toast({ title: "Missing field", description: "Please fill all required fields.", variant: "destructive" });
        return;
      }
    }

    const abstract = form.get("abstract") as File | null;
    if (!abstract || abstract.size === 0) {
      toast({ title: "Missing abstract", description: "Upload your PPT abstract.", variant: "destructive" });
      return;
    }

    try {
      setSubmitting(true);

      // Prevent duplicate registrations by email
      const email = String(form.get("email_no") || "").trim();
      try {
        const { data: dup, error: dupErr } = await supabase
          .from("terraview")
          .select("email_no")
          .eq("email_no", email)
          .limit(1);
        if (dupErr) {
          console.error("Error checking duplicate email in terraview:", dupErr);
        } else if (dup && dup.length > 0) {
          toast({
            title: "Email already registered",
            description: "This email has already been used to register for Terraview.",
            variant: "destructive",
          });
          setSubmitting(false);
          return;
        }
      } catch (dupCheckErr) {
        console.error("Duplicate check failed:", dupCheckErr);
      }

      const filename = `${Date.now()}_${Math.random().toString(36).slice(2)}_${abstract.name}`;
      const { data: uploadRes, error: uploadErr } = await supabase.storage
        .from("terraview_ab")
        .upload(filename, abstract, { upsert: false, contentType: abstract.type });
      if (uploadErr) throw uploadErr;
      const storedPath = uploadRes?.path ?? filename;
      const { data: pub } = supabase.storage.from("terraview_ab").getPublicUrl(storedPath);
      const abstractUrl = pub.publicUrl;

      const payload = {
        name: form.get("name"),
        college: form.get("college"),
        branch: form.get("branch"),
        year: form.get("year"),
        roll_no: form.get("roll_no"),
        mobile_no: form.get("mobile_no"),
        abstract_url: abstractUrl,
        email_no: form.get("email_no"),
        created_at: new Date().toISOString(),
      } as const;

      const { error } = await supabase.from("terraview").insert(payload as any);
      if (error) throw error;

      toast({ title: "Submitted", description: "Your registration has been submitted." });
      formEl.reset();
      navigate("/Terraview-success");
    } catch (err: any) {
      console.error(err);
      toast({ title: "Submission failed", description: String(err?.message || err), variant: "destructive" });
      alert(`Submission failed. Please try again.\n\nDetails: ${String(err?.message || err)}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 bg-black">
        <Squares speed={0.5} squareSize={40} direction="diagonal" borderColor="#333" hoverFillColor="#1a1a1a" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.15),transparent_100%),linear-gradient(to_bottom,rgba(0,0,0,0.02),rgba(0,0,0,0.5))]" />
      </div>

      <div className="relative z-10 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-8">
            <Link to="/Terraview" className="inline-flex items-center text-secondary hover:text-secondary/80 transition-all duration-300 mb-6 hover:scale-105">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Terraview
            </Link>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
              Terraview Registration
            </h1>
            <p className="text-muted-foreground mt-2">Enter your details and upload your abstract PPT.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card className="glass-effect p-6 sm:p-8 border border-border/50 hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="sm:col-span-2">
                    <Label htmlFor="name" className="text-foreground font-medium">Participant Name *</Label>
                    <Input id="name" name="name" required placeholder="Full Name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="college" className="text-foreground font-medium">College *</Label>
                    <Input id="college" name="college" required placeholder="Your College" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="branch" className="text-foreground font-medium">Branch *</Label>
                    <Input id="branch" name="branch" required placeholder="CSE / ECE / ..." className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="year" className="text-foreground font-medium">Year *</Label>
                    <Select name="year" defaultValue="1" required>
                      <SelectTrigger id="year" className="mt-1.5">
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent className="p-1">
                        <SelectItem value="1">1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="roll_no" className="text-foreground font-medium">Roll Number *</Label>
                    <Input id="roll_no" name="roll_no" required placeholder="Roll Number" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="mobile_no" className="text-foreground font-medium">Mobile Number *</Label>
                    <Input id="mobile_no" name="mobile_no" required type="tel" placeholder="99999 99999" className="mt-1.5" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="email_no" className="text-foreground font-medium">Email *</Label>
                    <Input id="email_no" name="email_no" required type="email" placeholder="name@example.com" className="mt-1.5" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="abstract" className="text-foreground font-medium">Submission of Abstract (PPT) *</Label>
                    <Input
                      id="abstract"
                      name="abstract"
                      type="file"
                      accept=".ppt,.pptx"
                      required
                      className=" mt-1.5 w-full max-w-full file:mr-2 sm:file:mr-4 file:py-2 file:px-3 sm:file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-secondary-foreground hover:file:bg-secondary/90 file:cursor-pointer cursor-pointer"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Please use the official template to make your abstract. Get the template here: 
                      <a href="https://docs.google.com/presentation/d/11HB2VGfh929GPezFkWs_CQvKwOOWDBCFW8Y88LH6858/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="ml-1 text-secondary hover:underline">Terraview PPT Template</a>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
                    <Upload className="h-4 w-4 mr-2" />
                    {submitting ? "Submitting..." : "Submit Registration"}
                  </Button>
                  <Link to="/Terraview" className="w-full sm:w-auto">
                    <Button type="button" variant="outline" className="w-full border-border/50">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Terraview
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

export default TerraviewRegistration;


