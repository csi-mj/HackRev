import { Link, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type LocationState = {
  trackTitle?: string;
};

const RegistrationSuccess = () => {
  const location = useLocation();
  const state = (location.state || {}) as LocationState;
  const params = new URLSearchParams(location.search);
  const trackFromQuery = params.get("t") || undefined;
  const trackTitle = state.trackTitle || trackFromQuery || "Selected";

  return (
    <div className="min-h-screen py-20 px-4 flex items-center">
      <div className="container mx-auto max-w-3xl">
        <Card className="glass-effect p-10 text-center shadow-card border border-border animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Registration Complete
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your registration for <span className="font-semibold text-foreground">{trackTitle}</span> has been successfully submitted.
          </p>

          <div className="mb-10">
            <h2 className="text-2xl font-heading font-bold mb-3">Helpdesk</h2>
            <p className="text-muted-foreground mb-6">For further queries, join our WhatsApp group.</p>
            <a
              href="https://chat.whatsapp.com/L4b7RjQfDjzBxRJNFSmY4y?mode=ems_wa_t"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="gradient-primary hover:opacity-90 transition-smooth shadow-glow">Open WhatsApp Helpdesk</Button>
            </a>
          </div>

          <div className="flex justify-center gap-3">
            <Link to="/Register">
              <Button variant="outline" className="border-primary text-primary">Back to Tracks</Button>
            </Link>
            <a href="/#home">
              <Button variant="ghost">Return Home</Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationSuccess;


