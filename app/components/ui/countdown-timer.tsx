import * as React from "react";
import { cn } from "~/lib/utils";

interface CountdownTimerProps {
  targetDate: Date | string;
  className?: string;
  showLabels?: boolean;
  completionMessage?: string;
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function CountdownTimer({
  targetDate,
  className,
  showLabels = true,
  completionMessage = "Event has started!",
  onComplete,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft | null>(null);
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    const target =
      typeof targetDate === "string" ? new Date(targetDate) : targetDate;

    const calculateTimeLeft = (): TimeLeft | null => {
      const now = Date.now();
      const difference = target.getTime() - now;

      if (difference <= 0) {
        setIsComplete(true);
        onComplete?.();
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  if (isComplete) {
    return (
      <div
        data-slot="countdown-complete"
        className={cn(
          "text-center text-lg font-semibold text-primary md:text-xl",
          className,
        )}
      >
        {completionMessage}
      </div>
    );
  }

  if (!timeLeft) {
    return null;
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div
      data-slot="countdown-timer"
      className={cn(
        "flex flex-wrap items-center justify-center gap-3 md:gap-4",
        className,
      )}
    >
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex min-w-13 items-center justify-center rounded-lg bg-primary/10 px-3 py-2 md:min-w-16 md:px-4 md:py-3">
              <span className="font-heading text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            {showLabels && (
              <span className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400 md:text-sm">
                {unit.label}
              </span>
            )}
          </div>

          {index < timeUnits.length - 1 && (
            <span className="text-xl font-semibold text-primary md:text-2xl">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export { CountdownTimer };
export type { CountdownTimerProps };
