import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

const Reveal = ({ children, className, delay = 0, direction = "up" }: RevealProps) => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>(0.1);

  const baseHidden = "opacity-0";
  const baseVisible = "opacity-100";

  const transforms: Record<string, { hidden: string; visible: string }> = {
    up: { hidden: "translate-y-10", visible: "translate-y-0" },
    left: { hidden: "-translate-x-10", visible: "translate-x-0" },
    right: { hidden: "translate-x-10", visible: "translate-x-0" },
    scale: { hidden: "scale-95", visible: "scale-100" },
  };

  const t = transforms[direction];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? `${baseVisible} ${t.visible}` : `${baseHidden} ${t.hidden}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
