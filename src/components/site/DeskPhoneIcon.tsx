import type { SVGProps } from "react";

/**
 * Classic desk telephone icon — bold filled style matching the reference image.
 * Handset resting on a trapezoidal base with 3×3 dial buttons.
 * Accepts the same props as Lucide icons for drop-in usage.
 */
export function DeskPhoneIcon({
  className,
  strokeWidth: _strokeWidth,
  "aria-hidden": ariaHidden,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
      stroke="none"
      className={className}
      aria-hidden={ariaHidden}
      {...props}
    >
      {/* Handset — receiver */}
      <path d="M12 24c0-1.5 1-3 2.5-3h3c1.2 0 2 .9 2 2v5c0 1-.8 1.8-1.8 1.8H16c-2.2 0-4-2.2-4-5.8z" />
      <path d="M52 24c0-1.5-1-3-2.5-3h-3c-1.2 0-2 .9-2 2v5c0 1 .8 1.8 1.8 1.8H48c2.2 0 4-2.2 4-5.8z" />
      <path d="M14.5 21c1.5-7 5.5-12 17.5-12s16 5 17.5 12H14.5z" />
      <rect x="14" y="20" width="36" height="5" rx="2.5" />

      {/* Base — trapezoidal body */}
      <path d="M10 34h44l4 22c.3 1.5-.8 3-2.3 3H8.3c-1.5 0-2.6-1.5-2.3-3l4-22z" />

      {/* Dial buttons — 3×3 grid, cut out as circles */}
      <circle cx="25" cy="40" r="2.5" fill="var(--color-brand-deep, #286571)" />
      <circle cx="32" cy="40" r="2.5" fill="var(--color-brand-deep, #286571)" />
      <circle cx="39" cy="40" r="2.5" fill="var(--color-brand-deep, #286571)" />
      <circle cx="25" cy="47" r="2.5" fill="var(--color-brand-deep, #286571)" />
      <circle cx="32" cy="47" r="2.5" fill="var(--color-brand-deep, #286571)" />
      <circle cx="39" cy="47" r="2.5" fill="var(--color-brand-deep, #286571)" />
      <circle cx="25" cy="54" r="2.5" fill="var(--color-brand-deep, #286571)" />
      <circle cx="32" cy="54" r="2.5" fill="var(--color-brand-deep, #286571)" />
      <circle cx="39" cy="54" r="2.5" fill="var(--color-brand-deep, #286571)" />
    </svg>
  );
}
