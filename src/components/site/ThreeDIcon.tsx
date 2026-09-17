import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const palettes = [
  {
    base: "from-aqua via-brand-soft to-pure-white",
    side: "bg-brand",
    glow: "bg-aqua/45",
    icon: "text-brand-deep",
  },
  {
    base: "from-botanical/85 via-aqua to-pure-white",
    side: "bg-botanical",
    glow: "bg-botanical/35",
    icon: "text-brand-deep",
  },
  {
    base: "from-ivory via-pure-white to-aqua/75",
    side: "bg-charcoal",
    glow: "bg-brand/25",
    icon: "text-brand",
  },
  {
    base: "from-brand-soft via-ivory to-pure-white",
    side: "bg-brand-deep",
    glow: "bg-aqua/35",
    icon: "text-brand-deep",
  },
];

const sizes = {
  sm: {
    wrap: "h-12 w-12",
    icon: "h-5 w-5",
    offset: "translate-x-1 translate-y-1",
  },
  md: {
    wrap: "h-[72px] w-[72px]",
    icon: "h-8 w-8",
    offset: "translate-x-1.5 translate-y-1.5",
  },
  lg: {
    wrap: "h-28 w-28",
    icon: "h-14 w-14",
    offset: "translate-x-2 translate-y-2",
  },
};

export function ThreeDIcon({
  icon: Icon,
  index = 0,
  size = "md",
  className,
  iconClassName,
}: {
  icon: LucideIcon;
  index?: number;
  size?: keyof typeof sizes;
  className?: string;
  iconClassName?: string;
}) {
  const palette = palettes[index % palettes.length];
  const dimension = sizes[size];

  return (
    <span className={cn("relative inline-flex shrink-0", dimension.wrap, className)}>
      <span
        className={cn(
          "absolute inset-0 rounded-[8px] opacity-70 blur-xl",
          dimension.offset,
          palette.glow,
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "absolute inset-0 rounded-[8px] opacity-80 shadow-[0_18px_38px_rgba(31,45,40,.18)]",
          dimension.offset,
          palette.side,
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "relative flex h-full w-full items-center justify-center rounded-[8px] border border-pure-white/70 bg-gradient-to-br shadow-[inset_0_1px_0_rgba(255,255,255,.75),inset_-10px_-12px_20px_rgba(31,45,40,.12)]",
          palette.base,
        )}
      >
        <span className="absolute top-2 left-2 h-2 w-2 rounded-full bg-pure-white/70" aria-hidden />
        <Icon
          strokeWidth={1.75}
          className={cn(
            dimension.icon,
            palette.icon,
            "drop-shadow-[0_3px_2px_rgba(255,255,255,.45)]",
            iconClassName,
          )}
          aria-hidden="true"
        />
      </span>
    </span>
  );
}
