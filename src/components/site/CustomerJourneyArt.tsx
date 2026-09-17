type JourneyArtProps = {
  stage: "discover" | "specify" | "validate" | "produce" | "deliver" | "grow";
  className?: string;
};

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CustomerJourneyArt({ stage, className }: JourneyArtProps) {
  return (
    <svg
      viewBox="0 0 180 140"
      className={className}
      role="img"
      aria-label={`${stage} stage illustration`}
    >
      <circle
        cx="90"
        cy="70"
        r="58"
        className="fill-pure-white stroke-brand"
        fillOpacity="1"
        strokeOpacity="0.15"
      />
      <path
        d="M30 104c28 18 92 18 120-2"
        className="stroke-brand"
        strokeOpacity="0.15"
        strokeDasharray="3 6"
      />
      {stage === "discover" && (
        <g {...common}>
          <path
            d="M47 95V55c0-8 6-14 14-14h42c8 0 14 6 14 14v28c0 8-6 14-14 14H73l-17 14 4-16Z"
            className="fill-ivory stroke-brand-deep"
          />
          <path d="M67 61h30M67 72h22" className="stroke-brand" />
          <circle cx="119" cy="89" r="22" className="fill-botanical stroke-brand-deep" />
          <path
            d="m135 105 15 15M111 89l6 6 12-15"
            className="stroke-pure-white"
            strokeWidth="2.4"
          />
          <path
            d="M44 49c-5 5-8 12-8 19M122 42c5 4 9 9 11 15"
            className="stroke-brand"
            strokeOpacity="0.4"
          />
        </g>
      )}
      {stage === "specify" && (
        <g {...common}>
          <rect
            x="43"
            y="30"
            width="94"
            height="80"
            rx="5"
            className="fill-ivory stroke-brand-deep"
          />
          <path
            d="M62 30v-7h56v7M59 52h62M59 70h62M59 88h62"
            className="stroke-brand"
            strokeOpacity="0.35"
          />
          <circle cx="78" cy="52" r="7" className="fill-botanical stroke-brand-deep" />
          <circle cx="108" cy="70" r="7" className="fill-botanical stroke-brand-deep" />
          <circle cx="86" cy="88" r="7" className="fill-botanical stroke-brand-deep" />
          <path
            d="M78 45v-7M78 59v8M108 63V52M108 77v11M86 81V70M86 95v8"
            className="stroke-brand-deep"
          />
          <path d="m126 100 9 9 15-20" className="stroke-brand" strokeWidth="3" />
        </g>
      )}
      {stage === "validate" && (
        <g {...common}>
          <path
            d="M69 28v29L46 99c-4 8 1 14 10 14h68c9 0 14-7 10-15l-23-41V28"
            className="fill-ivory stroke-brand-deep"
          />
          <path d="M63 28h54M58 84h64" className="stroke-brand-deep" />
          <path
            d="M57 84c12-10 20 8 32-1s22 9 34-1l11 18c4 7-2 13-10 13H56c-9 0-14-6-10-14Z"
            className="fill-aqua stroke-brand"
          />
          <circle cx="78" cy="96" r="4" className="fill-botanical stroke-brand" />
          <circle cx="104" cy="102" r="3" className="fill-botanical stroke-brand" />
          <path d="m82 66 7 7 14-17" className="stroke-brand" strokeWidth="3" />
          <path d="M45 48h12M123 48h12M90 15v-8" className="stroke-brand" strokeOpacity="0.4" />
        </g>
      )}
      {stage === "produce" && (
        <g {...common}>
          <path
            d="M36 111V62l31 15V62l31 15V49l29 15v47Z"
            className="fill-ivory stroke-brand-deep"
          />
          <path
            d="M127 64V35h13v76M49 88h13v23M77 88h13v23M105 82h13v29"
            className="stroke-brand-deep"
          />
          <path d="M35 111h112" className="stroke-brand" />
          <circle cx="132" cy="40" r="20" className="fill-botanical stroke-brand-deep" />
          <path d="m123 40 6 6 12-14" className="stroke-pure-white" strokeWidth="2.6" />
          <path
            d="M47 52c0-8 7-12 13-9 2-9 15-10 19-2"
            className="stroke-brand"
            strokeOpacity="0.35"
          />
        </g>
      )}
      {stage === "deliver" && (
        <g {...common}>
          <path d="M31 96h118l-13 17H48Z" className="fill-brand stroke-brand-deep" />
          <path d="M52 96V62h68l18 34M120 62V44h13v52" className="fill-ivory stroke-brand-deep" />
          <rect x="59" y="70" width="23" height="18" className="fill-aqua stroke-brand" />
          <rect x="84" y="70" width="23" height="18" className="fill-botanical stroke-brand" />
          <path d="M36 120c9-7 18 7 27 0s18 7 27 0 18 7 27 0 18 7 27 0" className="stroke-brand" />
          <path
            d="M39 51c7-8 16-8 23 0M69 38c6-6 13-6 19 0"
            className="stroke-brand"
            strokeOpacity="0.35"
          />
          <path d="m140 54 10 5-10 5" className="stroke-brand" strokeWidth="2.4" />
        </g>
      )}
      {stage === "grow" && (
        <g {...common}>
          <path d="M90 113V61" className="stroke-brand-deep" strokeWidth="2.5" />
          <path
            d="M89 76C67 76 53 64 53 45c22 0 36 12 36 31ZM91 91c23 0 38-12 38-32-23 0-38 12-38 32Z"
            className="fill-botanical stroke-brand-deep"
          />
          <path
            d="M90 62c0-18 11-29 28-31 1 17-9 29-28 31Z"
            className="fill-aqua stroke-brand-deep"
          />
          <path d="M48 113h84M59 113c3 13 14 20 31 20s28-7 31-20" className="stroke-brand" />
          <path
            d="M65 102c-8-5-15-5-22 0M120 103c8-6 16-6 23 0"
            className="stroke-brand"
            strokeOpacity="0.4"
          />
          <circle cx="46" cy="40" r="8" className="fill-sand stroke-brand" />
          <path
            d="M46 25v-7M46 62v-7M31 40h-7M68 40h-7"
            className="stroke-brand"
            strokeOpacity="0.45"
          />
        </g>
      )}
    </svg>
  );
}
