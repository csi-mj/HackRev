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
    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full">
      {timeUnits.map((unit, index) => (
        <Card
          key={unit.label}
          className="glass-effect p-4 sm:p-4 md:p-5 lg:p-6 flex-1 min-w-[70px] max-w-[95px] sm:max-w-[110px] md:max-w-[140px] lg:max-w-[160px] text-center transition-all duration-300 hover:scale-105 hover:border-secondary/40 border border-border/30 animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold bg-gradient-to-br from-secondary to-secondary bg-clip-text text-transparent leading-tight">
            {unit.value.toString().padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground mt-1 sm:mt-2 font-medium uppercase tracking-wide">
            {unit.label}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CountDown;
