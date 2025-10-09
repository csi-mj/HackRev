import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountDownProps {
  targetDate: Date;
}

const CountDown = ({ targetDate }: CountDownProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-1 sm:gap-3 md:gap-4 lg:gap-6">
      {timeUnits.map((unit, index) => (
        <Card
          key={unit.label}
          className="glass-effect shadow-glow p-2 sm:p-4 md:p-6 lg:p-8 min-w-[70px] sm:min-w-[80px] md:min-w-[120px] lg:min-w-[140px] text-center transition-smooth hover:scale-105 animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent animate-pulse-glow">
            {unit.value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mt-1 sm:mt-2 font-heading uppercase tracking-wider">
            {unit.label}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CountDown;
