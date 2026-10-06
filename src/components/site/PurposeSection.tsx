import { useEffect, useRef, useState } from "react";

export function PurposeSection() {
  const [activeCard, setActiveCard] = useState<"vision" | "mission">("vision");
  const [isInView, setIsInView] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setIsInView(true);
            io.disconnect();
          }
        },
        { threshold: 0.25 },
      );
      io.observe(el);
      return () => io.disconnect();
    } else {
      setIsInView(true);
      return undefined;
    }
  }, []);

  return (
    <section className="purpose-section-root bg-[#006461] text-white transition-colors duration-300 py-16 sm:py-20 lg:py-24">
      <style>{`
        .purpose-wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .purpose-root {
          --bg: #006461; --ink: #ffffff; --brand: #ffffff; --muted: #ffffff;
          --card: #054D4A; --line: rgba(255,255,255,0.25); --coir: #b9814f; --coir-d: #7a4f2b; --leaf: #4fa653;
          --stage: #033D3B; --stage-ink: #ffffff; --node: #f3d9b4;
          --display: 'Bowlby One','Archivo Black','Arial Black',Impact,sans-serif;
          --body: 'Poppins',system-ui,'Segoe UI',Arial,sans-serif;
        }

        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .purpose-root {
            --bg: #071f1e; --ink: #d7f0ee; --brand: #5fd3cb; --muted: #9ccac6;
            --card: #0e3231; --line: rgba(95,211,203,.22); --stage: #0b3c3a; --leaf: #7fd283;
          }
        }

        .purpose-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: .75rem;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: #7FE0CB;
          margin-bottom: 20px;
        }

        .purpose-eyebrow i {
          width: 32px;
          height: 2px;
          background: #7FE0CB;
        }

        .purpose-head-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 32px;
        }

        .purpose-heading {
          font-family: var(--display);
          font-weight: 400;
          color: #ffffff !important;
          font-size: clamp(2.2rem, 5vw, 4.2rem);
          line-height: .98;
          margin: 0;
          letter-spacing: -.01em;
        }

        .purpose-heading .ln {
          display: block;
        }

        .purpose-heading .ln span {
          display: block;
          color: #ffffff !important;
          opacity: 1 !important;
          transform: none !important;
        }

        .purpose-intro-text {
          margin: 0;
          font-size: clamp(1rem, 1.3vw, 1.15rem);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.92);
          max-width: 52ch;
          font-weight: 500;
        }

        .purpose-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin-bottom: 40px;
        }

        .purpose-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .purpose-stage {
          position: relative;
          background: var(--stage);
          border-radius: 20px;
          overflow: hidden;
          min-height: 440px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--stage-ink);
        }

        .purpose-stage svg {
          width: 100%;
          height: auto;
          display: block;
          flex: 1;
        }

        .fibre { stroke: var(--coir-d); stroke-width: 1.4; fill: none; stroke-linecap: round; opacity: .55; }
        .block { fill: var(--coir); }
        .stem { fill: none; stroke: var(--leaf); stroke-width: 5; stroke-linecap: round; stroke-dasharray: 130; stroke-dashoffset: 130; transition: stroke-dashoffset 1.6s .9s ease-out; }
        .leaf { fill: var(--leaf); transform-box: fill-box; transform-origin: 0% 100%; transform: scale(0); transition: transform .9s cubic-bezier(.3,1.5,.5,1); }
        .leaf.r { transform-origin: 100% 100%; }
        .leaf.a { transition-delay: 2.1s; }
        .leaf.b { transition-delay: 2.4s; }
        .leaf.c { transition-delay: 2.7s; }
        .purpose-stage.in .stem { stroke-dashoffset: 0; }
        .purpose-stage.in .leaf { transform: scale(1); }

        .plant { transform-box: fill-box; transform-origin: 50% 100%; transition: transform .8s cubic-bezier(.3,1.4,.5,1); }
        .sway { transform-box: fill-box; transform-origin: 50% 100%; animation: sway 5s ease-in-out infinite alternate; }
        
        @keyframes sway { from { transform: rotate(-2deg); } to { transform: rotate(2deg); } }

        .orbit { transform-box: view-box; transform-origin: 200px 150px; animation: spin 60s linear infinite; transition: opacity .6s; opacity: .55; }
        .orbit .ring { fill: none; stroke: var(--stage-ink); stroke-opacity: .35; stroke-dasharray: 3 7; }
        .orbit .spoke { stroke: var(--node); stroke-opacity: .35; stroke-width: 1; }
        .orbit .dot { fill: var(--node); transform-box: fill-box; transform-origin: center; animation: pulse 3s ease-in-out infinite; }
        .orbit .dot:nth-of-type(2) { animation-delay: .5s; }
        .orbit .dot:nth-of-type(3) { animation-delay: 1s; }
        .orbit .dot:nth-of-type(4) { animation-delay: 1.5s; }
        .orbit .dot:nth-of-type(5) { animation-delay: 2s; }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 50% { transform: scale(1.7); } }

        .glow { fill: var(--node); opacity: 0; transition: opacity .6s; }

        .purpose-stage[data-mode="vision"] .orbit { opacity: 1; }
        .purpose-stage[data-mode="vision"] .glow { opacity: .14; }
        .purpose-stage[data-mode="mission"] .plant { transform: scale(1.16); }
        .purpose-stage[data-mode="mission"] .orbit { opacity: .3; }

        .purpose-cards { display: flex; flex-direction: column; gap: 16px; }
        .purpose-card { background: var(--card); border: 1px solid var(--line); border-radius: 14px; transition: border-color .3s, box-shadow .3s; }
        .purpose-card[data-open="true"] { border-color: var(--brand); box-shadow: 0 14px 34px -18px var(--brand); }
        
        .purpose-card button {
          all: unset;
          box-sizing: border-box;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          padding: 22px 24px;
        }

        .purpose-card button:focus-visible { outline: 3px solid var(--brand); outline-offset: -3px; border-radius: 14px; }

        .purpose-ico { flex: none; width: 44px; height: 44px; border-radius: 50%; background: var(--brand); display: grid; place-items: center; }
        .purpose-ico svg { width: 24px; height: 24px; stroke: var(--bg); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

        .purpose-kind { display: block; font-size: .8rem; font-weight: 600; color: var(--muted); margin-bottom: 2px; }
        .purpose-ttl { display: block; font-family: var(--display); font-size: clamp(1.05rem,2.3vw,1.3rem); color: var(--brand); line-height: 1.2; }
        
        .purpose-chev { margin-left: auto; flex: none; width: 20px; height: 20px; stroke: var(--brand); fill: none; stroke-width: 2; transition: transform .35s; }
        .purpose-card[data-open="true"] .purpose-chev { transform: rotate(180deg); }

        .purpose-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .45s ease; }
        .purpose-card[data-open="true"] .purpose-body { grid-template-rows: 1fr; }
        .purpose-body > div { overflow: hidden; }
        .purpose-body p { margin: 0; padding: 0 24px; font-weight: 500; line-height: 1.7; color: var(--muted); font-size: .97rem; }

        .purpose-tags { display: flex; flex-wrap: wrap; gap: 8px; padding: 18px 24px 24px; }
        .purpose-tags span { font-size: .8rem; font-weight: 600; color: var(--brand); border: 1.5px solid var(--brand); border-radius: 99px; padding: 5px 14px; opacity: 0; transform: translateY(8px); transition: opacity .4s, transform .4s; }
        .purpose-card[data-open="true"] .purpose-tags span { opacity: 1; transform: none; }
        .purpose-card[data-open="true"] .purpose-tags span:nth-child(2) { transition-delay: .12s; }
        .purpose-card[data-open="true"] .purpose-tags span:nth-child(3) { transition-delay: .24s; }

        .purpose-marquee { margin-top: 64px; border-block: 1px solid var(--line); overflow: hidden; padding: 18px 0; white-space: nowrap; }
        .purpose-track { display: inline-flex; animation: slide 32s linear infinite; }
        .purpose-track span { font-family: var(--display); font-size: clamp(1.6rem,4.5vw,3rem); color: transparent; -webkit-text-stroke: 1.5px var(--brand); padding-right: 1.2em; }
        .purpose-track span:nth-child(even) { color: var(--brand); -webkit-text-stroke: 0; }
        .purpose-marquee:hover .purpose-track { animation-play-state: paused; }

        @keyframes slide { to { transform: translateX(-50%); } }

        @media (max-width: 820px) {
          .purpose-head-row { grid-template-columns: 1fr; gap: 16px; margin-bottom: 24px; }
          .purpose-grid { grid-template-columns: 1fr; }
          .purpose-stage { min-height: 0; }
          .purpose-wrap { padding-top: 24px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
          .stem { stroke-dashoffset: 0; }
          .leaf { transform: none; }
          .purpose-card[data-open="true"] .purpose-tags span { opacity: 1; }
        }
      `}</style>

      <div className="purpose-root purpose-wrap">
        <div className="purpose-eyebrow">
          <i aria-hidden="true" />
          <span>OUR DIRECTION</span>
        </div>

        <div className="purpose-head-row">
          <h2 className="purpose-heading !text-white" style={{ color: "#ffffff" }}>
            <span className="ln !text-white" style={{ color: "#ffffff" }}>
              <span className="!text-white" style={{ color: "#ffffff" }}>Purpose in every</span>
            </span>
            <span className="ln !text-white" style={{ color: "#ffffff" }}>
              <span className="!text-white" style={{ color: "#ffffff" }}>partnership.</span>
            </span>
          </h2>

          <p className="purpose-intro-text">
            A clear mission guides how we work today. A global vision keeps us building for what
            growers and international partners will need tomorrow.
          </p>
        </div>

        <div className="purpose-divider" aria-hidden="true" />

        <div className="purpose-grid">
          <div
            ref={stageRef}
            className={`purpose-stage ${isInView ? "in" : ""}`}
            id="stage"
            data-mode={activeCard}
          >
            <svg
              viewBox="0 0 400 330"
              role="img"
              aria-label="A seedling growing from a coir block, surrounded by connected partner nodes"
            >
              <circle className="glow" cx="200" cy="150" r="150" />
              <g className="orbit">
                <ellipse className="ring" cx="200" cy="150" rx="160" ry="120" />
                <ellipse className="ring" cx="200" cy="150" rx="105" ry="120" />
                <line className="spoke" x1="200" y1="150" x2="360" y2="150" />
                <line className="spoke" x1="200" y1="150" x2="40" y2="150" />
                <line className="spoke" x1="200" y1="150" x2="200" y2="30" />
                <line className="spoke" x1="200" y1="150" x2="305" y2="150" />
                <line className="spoke" x1="200" y1="150" x2="95" y2="150" />
                <circle className="dot" cx="360" cy="150" r="5" />
                <circle className="dot" cx="40" cy="150" r="5" />
                <circle className="dot" cx="200" cy="30" r="5" />
                <circle className="dot" cx="305" cy="150" r="4" />
                <circle className="dot" cx="95" cy="150" r="4" />
              </g>
              <g className="plant">
                <g className="sway">
                  <path className="stem" d="M200 238 C 200 205, 196 175, 200 118" />
                  <path className="leaf a" d="M199 190 C 170 190, 152 172, 150 150 C 176 150, 196 164, 199 190Z" />
                  <path className="leaf r b" d="M201 160 C 230 160, 250 142, 252 120 C 224 120, 204 134, 201 160Z" />
                  <path className="leaf c" d="M200 128 C 188 112, 190 96, 200 84 C 212 96, 212 114, 200 128Z" />
                </g>
              </g>
              <rect className="block" x="115" y="236" width="170" height="74" rx="8" />
              <g className="fibre">
                <path d="M126 252 q14 -6 28 0 t28 0 t28 0" />
                <path d="M134 266 q12 6 26 0 t26 0 t26 0 t24 0" />
                <path d="M124 280 q16 -6 30 0 t30 0 t30 0" />
                <path d="M140 294 q14 6 28 0 t28 0 t28 0" />
                <path d="M256 250 q8 10 0 20" />
                <path d="M270 262 q-6 10 2 22" />
              </g>
            </svg>
          </div>

          <div className="purpose-cards">
            {/* Vision Card */}
            <article
              className="purpose-card"
              data-mode="vision"
              data-open={activeCard === "vision" ? "true" : "false"}
            >
              <button
                type="button"
                aria-expanded={activeCard === "vision"}
                aria-controls="b1"
                onClick={() => setActiveCard("vision")}
              >
                <span className="purpose-ico">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
                  </svg>
                </span>
                <span>
                  <span className="purpose-kind">Vision</span>
                  <span className="purpose-ttl">A Global Vision for Better Growing</span>
                </span>
                <svg className="purpose-chev" viewBox="0 0 20 20">
                  <path d="M4 7l6 6 6-6" />
                </svg>
              </button>
              <div className="purpose-body" id="b1">
                <div>
                  <p>
                    To build a globally trusted coco substrate company that sets new standards for
                    quality, transparency, and professionalism in horticultural supply.
                  </p>
                  <div className="purpose-tags">
                    <span>Better Substitutes.</span>
                    <span>Brighter Tomorrows.</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Mission Card */}
            <article
              className="purpose-card"
              data-mode="mission"
              data-open={activeCard === "mission" ? "true" : "false"}
            >
              <button
                type="button"
                aria-expanded={activeCard === "mission"}
                aria-controls="b2"
                onClick={() => setActiveCard("mission")}
              >
                <span className="purpose-ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21v-9" />
                    <path d="M12 12c0-4 3-6 7-6 0 4-3 6-7 6z" />
                    <path d="M12 15c0-3-2-5-6-5 0 3 2 5 6 5z" />
                  </svg>
                </span>
                <span>
                  <span className="purpose-kind">Mission</span>
                  <span className="purpose-ttl">Turning Knowledge into Growing Solutions</span>
                </span>
                <svg className="purpose-chev" viewBox="0 0 20 20">
                  <path d="M4 7l6 6 6-6" />
                </svg>
              </button>
              <div className="purpose-body" id="b2">
                <div>
                  <p>
                    To transform coconut coir into reliable growing solutions by combining
                    agricultural knowledge, technical discipline, consistent quality, and
                    customer-focused execution — building long-term partnerships with growers and
                    businesses worldwide.
                  </p>
                  <div className="purpose-tags">
                    <span>People.</span>
                    <span>Partnerships.</span>
                    <span>Progress.</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="purpose-marquee" aria-hidden="true">
          <div className="purpose-track">
            <span>Better Substitutes.</span>
            <span>Brighter Tomorrows.</span>
            <span>People.</span>
            <span>Partnerships.</span>
            <span>Progress.</span>
            <span>Better Substitutes.</span>
            <span>Brighter Tomorrows.</span>
            <span>People.</span>
            <span>Partnerships.</span>
            <span>Progress.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
