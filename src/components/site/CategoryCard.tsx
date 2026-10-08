import type { ReactNode } from "react";

type CategoryCardProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
};

const cardClassName = (active = false) =>
  `absolute inset-0 flex w-full items-center justify-start gap-3 px-3 py-2 text-left text-brand ${
    active ? "ring-2 ring-[#1F7A6D]/30" : ""
  }`;

export function CategoryCard({ icon, label, onClick, active = false }: CategoryCardProps) {
  const content = (
    <>
      <span className="shrink-0 text-[#1F7A6D] [&_svg]:h-5 [&_svg]:w-5 [&_svg]:stroke-2">
        {icon}
      </span>
      <span className="max-w-[66px] whitespace-pre-line text-[9px] leading-[1.1] font-extrabold uppercase">
        {label}
      </span>
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} aria-pressed={active} className={cardClassName(active)}>
        {content}
      </button>
    );
  }

  return <div className={cardClassName(active)}>{content}</div>;
}
