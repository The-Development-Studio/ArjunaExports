import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------- reveal on scroll ---------- */

export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "figure" | "p" | "h2" | "h3";
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  const Component = Tag as "div";
  return (
    <Component
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Component>
  );
}

/* ---------- editorial atoms ---------- */

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("micro-label inline-flex items-center gap-3 opacity-80", className)}>
      <span className="inline-block h-px w-8 bg-current" aria-hidden />
      {children}
    </span>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 12"
      className={cn(
        "h-3 w-6 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        className,
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden
    >
      <path d="M0 6h22M17 1l5 5-5 5" />
    </svg>
  );
}

/* ---------- buttons ---------- */

const baseBtn =
  "group inline-flex min-h-[52px] items-center gap-3 rounded-sm px-7 text-[14px] font-semibold tracking-[0.06em] uppercase transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

export function PrimaryButton({
  to,
  children,
  onClick,
  type,
  className,
}: {
  to?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "button";
  className?: string;
}) {
  const inner = (
    <>
      {children}
      <Arrow className="group-hover:translate-x-1.5" />
    </>
  );
  const cls = cn(baseBtn, "bg-brand text-pure-white hover:bg-brand-deep", className);
  if (to)
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

export function SecondaryButton({
  to,
  children,
  className,
  onDark = false,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        baseBtn,
        "border",
        onDark
          ? "border-pure-white/60 text-pure-white hover:bg-pure-white hover:text-brand-deep"
          : "border-brand text-brand hover:bg-brand hover:text-pure-white",
        className,
      )}
    >
      {children}
      <Arrow className="group-hover:translate-x-1.5" />
    </Link>
  );
}

export function TextLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.16em] uppercase",
        className,
      )}
    >
      {children}
      <Arrow className="group-hover:translate-x-1.5" />
    </Link>
  );
}

/* ---------- chapter heading ---------- */

export function ChapterHeading({
  label,
  lines,
  className,
  align = "left",
}: {
  label?: string;
  lines: string[];
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {label && (
        <Label className={cn("mb-6 block", align === "center" && "justify-center")}>{label}</Label>
      )}
      <h2 className="display max-w-[22ch] text-[clamp(2.25rem,4vw,4rem)] leading-[1.02]">
        {lines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </h2>
    </div>
  );
}
