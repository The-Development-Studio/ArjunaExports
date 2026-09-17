import { cn } from "@/lib/utils";

export function PointArt({ index = 0, className }: { index?: number; className?: string }) {
  const variant = index % 8;
  return (
    <svg
      viewBox="0 0 72 72"
      className={cn("h-14 w-14 shrink-0 text-brand", className)}
      aria-hidden="true"
    >
      <circle
        cx="36"
        cy="36"
        r="32"
        className="fill-pure-white stroke-brand"
        fillOpacity="1"
        strokeOpacity="0.2"
      />
      {variant === 0 && (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M36 53V31" />
          <path
            d="M35 37c-11 0-17-6-17-15 11 0 17 6 17 15ZM37 43c11 0 17-6 17-15-11 0-17 6-17 15Z"
            className="fill-botanical"
            fillOpacity="0.7"
          />
          <path d="M22 54h28" />
        </g>
      )}
      {variant === 1 && (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M36 16S22 33 22 43a14 14 0 0 0 28 0c0-10-14-27-14-27Z" className="fill-aqua" />
          <path d="M29 44c2 5 6 7 11 6" />
        </g>
      )}
      {variant === 2 && (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 43c7-12 14-18 18-18s11 6 18 18" />
          <path d="M20 48h32M27 48v7M45 48v7" />
          <circle cx="36" cy="25" r="5" className="fill-botanical" />
        </g>
      )}
      {variant === 3 && (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="19" y="22" width="34" height="30" rx="3" className="fill-ivory" />
          <path d="M27 31h18M27 38h12M27 45h8" />
          <path d="m43 44 4 4 8-10" className="stroke-botanical" strokeWidth="3" />
        </g>
      )}
      {variant === 4 && (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 49h40l-5 8H22Z" className="fill-brand" />
          <path d="M23 49V34h24l7 15M29 39h10" />
          <path d="M20 61c4-3 8 3 12 0s8 3 12 0 8 3 12 0" />
        </g>
      )}
      {variant === 5 && (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="36" cy="36" r="17" className="fill-ivory" />
          <path d="M36 19v8M36 45v8M19 36h8M45 36h8" />
          <circle cx="36" cy="36" r="5" className="fill-botanical" />
          <path d="m39 33 10-8" />
        </g>
      )}
      {variant === 6 && (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 52V31l13 7V28l13 8V23l10 6v23Z" className="fill-ivory" />
          <path d="M24 44h7v8M37 43h7v9M17 52h40" />
          <circle cx="52" cy="23" r="7" className="fill-botanical" />
          <path d="m49 23 2 2 4-5" className="stroke-pure-white" />
        </g>
      )}
      {variant === 7 && (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M21 48V28c0-5 4-9 9-9h15c5 0 9 4 9 9v12c0 5-4 9-9 9H34l-9 7 2-8Z"
            className="fill-ivory"
          />
          <path d="M31 31h14M31 38h9" />
          <circle cx="52" cy="49" r="8" className="fill-botanical" />
          <path d="m49 49 2 2 4-5" className="stroke-pure-white" />
        </g>
      )}
    </svg>
  );
}
