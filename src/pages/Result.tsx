import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Target, Wallet, Trophy, Clock } from "lucide-react";

const Result = () => {
  const tracks = [
    {
      icon: Building2,
      title: "Healthcare Innovation",
      link: "/result/healthcare",
      status: "Results Available",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Building2,
      title: "Open Innovation Hub",
      link: "/result/oih",
      status: "Results Available",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Open Innovation Space",
      link: "/result/ois",
      status: "Results Available",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Wallet,
      title: "Wealth Management",
      link: "/result/wm",
      status: "Results Available",
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <Trophy className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hackathon Results
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Congratulations to all participants! View the winners and outstanding projects from each track.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tracks.map((track, index) => (
            <Card
              key={index}
              className="glass-effect p-8 shadow-card transition-smooth hover:scale-105 hover:shadow-glow border border-border group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 transition-smooth group-hover:scale-110 shadow-glow`}>
                  <track.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-2">{track.title}</h2>
                <div className="flex items-center space-x-2 text-primary">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-heading">{track.status}</span>
                </div>
              </div>
              
              <Link to={track.link}>
                <Button className="w-full gradient-primary hover:opacity-90 transition-smooth">
                  View Results
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <Card className="glass-effect p-8 text-center shadow-card border border-border mb-8">
          <h3 className="text-2xl font-heading font-bold mb-4">Overall Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-heading font-bold text-primary mb-2">487</div>
              <div className="text-muted-foreground">Total Participants</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-primary mb-2">124</div>
              <div className="text-muted-foreground">Projects Submitted</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-primary mb-2">$50K</div>
              <div className="text-muted-foreground">Total Prize Pool</div>
            </div>
          </div>
        </Card>

        <Card className="glass-effect p-8 text-center shadow-card border border-primary/50">
          <h3 className="text-2xl font-heading font-bold mb-4">Thank You!</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're grateful to all participants, mentors, judges, and sponsors who made CodeSurge 2024 an incredible success. 
            Stay tuned for our next event!
          </p>
          <Link to="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
              Back to Home
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Result;
