import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Code2, 
  Lightbulb,
  Award,
  Clock,
  CheckCircle
} from "lucide-react";

const CodeSurgeAppDev = () => {
  const timeline = [
    { time: "Day 1 - 9:00 AM", event: "Registration & Check-in", icon: Users },
    { time: "Day 1 - 10:00 AM", event: "Opening Ceremony & Track Briefing", icon: Lightbulb },
    { time: "Day 1 - 11:00 AM", event: "Hacking Begins!", icon: Code2 },
    { time: "Day 2 - 12:00 PM", event: "Mentor Sessions & Workshops", icon: Users },
    { time: "Day 3 - 10:00 AM", event: "Submission Deadline", icon: Clock },
    { time: "Day 3 - 2:00 PM", event: "Project Presentations", icon: Award },
    { time: "Day 3 - 5:00 PM", event: "Awards Ceremony", icon: Trophy },
  ];

  const prizes = [
    { place: "1st Place", amount: "$20,000", perks: "Mentorship + Funding Opportunity" },
    { place: "2nd Place", amount: "$15,000", perks: "Mentorship Program" },
    { place: "3rd Place", amount: "$10,000", perks: "Certificate + Swag" },
    { place: "Track Winners", amount: "$5,000 each", perks: "Certificate + Recognition" },
  ];

  const rules = [
    "Teams can have 1-4 members",
    "All code must be written during the hackathon",
    "Open source libraries and APIs are allowed",
    "Projects must align with chosen track theme",
    "One project submission per team",
    "All team members must be present for final presentation",
    "Projects will be judged on innovation, technical complexity, design, and impact",
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CodeSurge 2024
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A 48-hour innovation marathon where ideas transform into reality. Join us for an unforgettable experience of learning, building, and networking.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-heading">March 15-17, 2024</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-heading">Tech Innovation Center, Downtown</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-heading">500+ Participants</span>
            </div>
          </div>

          <Link to="/Register">
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth shadow-glow text-lg px-8">
              Register Now
            </Button>
          </Link>
        </div>

        {/* Event Timeline */}
        <section className="mb-20">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Event Timeline
          </h2>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <Card
                key={index}
                className="glass-effect p-6 shadow-card border border-border transition-smooth hover:shadow-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading font-semibold text-primary">{item.time}</div>
                    <div className="text-lg">{item.event}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Prizes */}
        <section className="mb-20">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Prizes & Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prizes.map((prize, index) => (
              <Card
                key={index}
                className="glass-effect p-6 text-center shadow-card border border-border transition-smooth hover:scale-105 hover:shadow-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">{prize.place}</h3>
                <div className="text-3xl font-heading font-bold text-primary mb-2">{prize.amount}</div>
                <p className="text-sm text-muted-foreground">{prize.perks}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg">
            Total prize pool: <span className="text-primary font-heading font-bold">$50,000+</span>
          </p>
        </section>

        {/* Rules */}
        <section className="mb-20">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Rules & Guidelines
          </h2>
          <Card className="glass-effect p-8 shadow-card border border-border">
            <ul className="space-y-4">
              {rules.map((rule, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{rule}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* CTA */}
        <Card className="glass-effect p-12 text-center shadow-glow border border-primary/50">
          <h2 className="text-4xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ready to Join?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to showcase your skills, learn from the best, and win amazing prizes!
          </p>
          <Link to="/Register">
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth shadow-glow text-lg px-12">
              Register Now
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default CodeSurgeAppDev;
