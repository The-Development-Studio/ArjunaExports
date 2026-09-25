import type { ComponentProps } from "react";
import telephoneWhite from "@/assets/telephone-white.png";
import { cn } from "@/lib/utils";

/**
 * White telephone icon derived directly from the uploaded reference image.
 * Renders with a clean transparent background and pure white icon silhouette,
 * perfectly matching the contact card icon size and styling.
 */
export function DeskPhoneIcon({
  className,
  "aria-hidden": ariaHidden = true,
  alt = "",
  strokeWidth: _strokeWidth,
  ...props
}: ComponentProps<"img"> & { strokeWidth?: number }) {
  return (
    <img
      src={telephoneWhite}
      alt={alt}
      aria-hidden={ariaHidden}
      loading="lazy"
      decoding="async"
      className={cn("pointer-events-none select-none object-contain", className)}
      {...props}
    />
  );
}
