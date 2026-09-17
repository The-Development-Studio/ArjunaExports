import { cn } from "@/lib/utils";

type CompanyJourneyArtProps = {
  stage: number;
  className?: string;
};

const milestonePoints = [
  [82, 234],
  [128, 184],
  [92, 132],
  [158, 88],
  [224, 124],
  [190, 184],
  [240, 228],
] as const;

export function CompanyJourneyArt({ stage, className }: CompanyJourneyArtProps) {
  const activePoint = milestonePoints[stage] ?? milestonePoints[0];
  const step = String(stage + 1).padStart(2, "0");

  return (
    <svg
      viewBox="0 0 320 320"
      className={cn("text-brand", className)}
      role="img"
      aria-label={`Company journey milestone ${step}`}
    >
      <circle cx="160" cy="160" r="126" fill="currentColor" opacity=".05" />
      <circle
        cx="160"
        cy="160"
        r="126"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".14"
        strokeWidth="4"
      />

      <path
        d="M82 234 C126 236 154 205 128 184 C100 161 62 152 92 132 C126 110 119 80 158 88 C204 97 250 92 224 124 C196 158 150 157 190 184 C224 206 215 228 240 228"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="10"
        strokeOpacity=".16"
      />
      <path
        d="M82 234 C126 236 154 205 128 184 C100 161 62 152 92 132 C126 110 119 80 158 88 C204 97 250 92 224 124 C196 158 150 157 190 184 C224 206 215 228 240 228"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
        className="route-line"
      />

      {milestonePoints.map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle
            cx={cx}
            cy={cy}
            r={index === stage ? 16 : 10}
            fill="white"
            stroke="currentColor"
            strokeWidth={index === stage ? 5 : 3}
            strokeOpacity={index === stage ? 1 : 0.35}
          />
          {index < stage && <circle cx={cx} cy={cy} r="4" fill="currentColor" opacity=".55" />}
        </g>
      ))}

      <g transform={`translate(${activePoint[0]} ${activePoint[1]})`}>
        <circle r="29" fill="currentColor" opacity=".12" />
        <circle r="19" fill="white" />
        <text y="6" textAnchor="middle" className="fill-brand font-display text-base font-bold">
          {step}
        </text>
      </g>

      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      >
        <path d="M240 228v-72" />
        <path d="M240 158h42l-13 17 13 17h-42" fill="white" />
        <path d="M82 234v-32" opacity=".55" />
        <path d="M66 234h32" opacity=".55" />
      </g>
    </svg>
  );
}
