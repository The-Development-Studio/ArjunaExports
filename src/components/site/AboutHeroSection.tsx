import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function AboutHeroSection() {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPhotoSrc(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="about" className="about-hero-section relative overflow-hidden bg-[#06231f] text-[#efe6d2] font-['DM_Sans',system-ui,sans-serif] leading-[1.65]">
      <style>{`
        .about-hero-section {
          scroll-margin-top: var(--header-h, 64px);
          padding-top: calc(var(--header-h, 64px) + 48px);
          padding-bottom: 72px;
          background:
            repeating-linear-gradient(103deg, transparent 0 22px, rgba(201,164,107,.045) 22px 23px, transparent 23px 51px),
            radial-gradient(120% 80% at 85% 0%, #0a3531 0%, #06231f 70%);
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 48px;
          padding-right: 48px;
          position: relative;
          z-index: 1;
        }

        .globe-bg {
          position: absolute;
          top: 0;
          right: -100px;
          width: 500px;
          max-width: 60vw;
          opacity: 0.08;
          pointer-events: none;
          z-index: 0;
        }

        .photo-row {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 64px;
          align-items: center;
          position: relative;
        }

        .photo-frame {
          position: relative;
          margin: 0;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 6px;
          background: linear-gradient(160deg, #124b44, #0a2f2a);
          cursor: pointer;
        }
        .photo-frame::after {
          content: "";
          position: absolute;
          inset: -8px;
          border: 1.5px solid #c9a46b;
          border-radius: 10px;
          pointer-events: none;
          transition: border-color 0.25s;
        }
        .photo-frame:focus-within::after {
          border-color: #c8e35a;
        }
        .photo-frame.has img { display: block; }
        .photo-frame.has .ph-box { display: none; }

        .ph-box {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: #c9a46b;
          text-align: center;
          font-size: 13px;
          padding: 24px;
        }

        .story-content p {
          margin: 0 0 20px;
          font-size: 16px;
          line-height: 1.65;
          max-width: 52ch;
          text-align: left;
          hyphens: manual;
          color: #d9e2d3;
        }
        .story-content p:last-of-type { margin-bottom: 0; }

        .about-discover {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #c8e35a;
          text-decoration: none;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: .14em;
          text-transform: uppercase;
          padding: 12px 22px;
          border: 1.5px solid #c8e35a;
          border-radius: 999px;
          transition: background .25s, color .25s, gap .25s;
        }
        .about-discover:hover { background: #c8e35a; color: #06231f; gap: 16px; }
        .about-discover:focus-visible { outline: 3px solid #efe6d2; outline-offset: 3px; }

        .about-roots {
          display: block;
          width: 100%;
          height: 150px;
          margin-top: 56px;
          overflow: visible;
        }
        .about-roots path {
          fill: none;
          stroke: #c9a46b;
          stroke-width: 2;
          stroke-linecap: round;
          vector-effect: non-scaling-stroke;
        }
        .about-roots path.thin { stroke-width: 1; opacity: .55; }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 0;
        }
        .card-item {
          position: relative;
          padding: 28px;
          background: #efe6d2;
          color: #06231f;
          display: flex;
          flex-direction: column;
          min-height: 200px;
        }
        .card-item:nth-child(1) { border-radius: 4px 4px 44px 4px; margin-top: 0; }
        .card-item:nth-child(2) { border-radius: 44px 4px 4px 4px; margin-top: 28px; }
        .card-item:nth-child(3) { border-radius: 4px 44px 4px 4px; margin-top: 56px; }

        .card-item::before {
          content: "";
          position: absolute;
          top: -6px;
          left: 50%;
          width: 12px;
          height: 12px;
          margin-left: -6px;
          border-radius: 50%;
          background: #c8e35a;
          box-shadow: 0 0 0 5px rgba(200,227,90,.22);
        }

        .card-title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .commercial-label::after {
          content: ""; flex: 1; height: 1px; background: linear-gradient(90deg, #c9a46b, transparent);
        }

        @media (max-width: 900px) {
          .about-container { padding-left: 24px; padding-right: 24px; }
          .photo-row { grid-template-columns: 1fr !important; gap: 40px !important; }
          .photo-frame { width: 100% !important; max-width: 100% !important; }
          .about-roots { display: none !important; }
          .cards-grid { grid-template-columns: 1fr !important; gap: 16px !important; margin-top: 40px !important; }
          .card-item, .card-item:nth-child(2), .card-item:nth-child(3) { margin-top: 0 !important; }
          .globe-bg { right: -120px !important; width: 380px !important; }
        }

        @media (max-width: 480px) {
          .about-hero-section { padding-top: calc(var(--header-h, 64px) + 32px) !important; }
          .year-text { font-size: 56px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-discover { transition: none; }
        }
      `}</style>

      {/* Globe Line Art */}
      <motion.svg
        className="globe-bg"
        viewBox="0 0 400 400"
        fill="none"
        stroke="#c8e35a"
        strokeWidth="1.2"
        aria-hidden="true"
        initial={reducedMotion ? { opacity: 0.08 } : { opacity: 0, rotate: -15, scale: 0.9 }}
        whileInView={{ opacity: 0.08, rotate: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <circle cx="200" cy="200" r="190" />
        <ellipse cx="200" cy="200" rx="190" ry="70" />
        <ellipse cx="200" cy="200" rx="70" ry="190" />
        <ellipse cx="200" cy="200" rx="140" ry="190" />
        <path d="M10 200h380" />
      </motion.svg>

      <div className="about-container">
        {/* Photo & Story Grid */}
        <div className="photo-row">
          {/* Left Column: Photo Frame */}
          <motion.figure
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
            className={`photo-frame ${photoSrc ? "has" : ""}`}
            id="photo"
          >
            {photoSrc && (
              <img
                id="photoImg"
                src={photoSrc}
                alt="Arjuna Exports coconut plantation, Namakkal District"
                className="absolute inset-0 w-full h-full object-cover rounded-[6px]"
              />
            )}
            <div className="ph-box">
              <svg viewBox="0 0 48 48" className="w-20 h-20 stroke-[#c9a46b] fill-none stroke-[1.4]" aria-hidden="true">
                <circle cx="24" cy="26" r="15" />
                <circle cx="24" cy="26" r="9" />
                <path d="M24 11c0-5 4-8 9-8" />
                <circle cx="20" cy="23" r="1.2" />
                <circle cx="26" cy="22" r="1.2" />
                <circle cx="23" cy="28" r="1.2" />
              </svg>
              <span className="font-medium">Click to place your photo here</span>
            </div>
            <input
              type="file"
              accept="image/*"
              id="photoInput"
              aria-label="Choose a photo"
              onChange={handlePhotoChange}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
            />
          </motion.figure>

          {/* Right Column: Story Content */}
          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="story-content"
          >
            <p>
              Arjuna Exports is a South India-based exporter of coco substrate products for professional
              growers, horticultural businesses, and international customers.
            </p>
            <p>
              Rooted in the coconut-producing heartland of Tamil Nadu, we combine deep agricultural
              understanding with modern engineering discipline and stringent quality control. From substrate
              blending to containerised peat shipments, we provide consistent, crop-oriented growing media
              engineered for professional growing environments worldwide.
            </p>

            <div className="flex items-baseline gap-7 flex-wrap mt-8">
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="year-text font-['Dela_Gothic_One',sans-serif] text-[clamp(56px,7vw,88px)] leading-[0.9] text-[#c9a46b]"
              >
                2019
              </motion.div>
              <Link to="/contact" className="about-discover">
                Discover
                <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M0 5h20M16 1l4 4-4 4" />
                </svg>
              </Link>
            </div>

            <div className="flex items-center gap-2 mt-4 text-[13px] text-[#c9a46b]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0" aria-hidden="true">
                <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Namakkal District, Tamil Nadu, South India
            </div>
          </motion.div>
        </div>

        {/* Roots Network Animated SVG */}
        <svg className="about-roots" viewBox="0 0 1000 150" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            d="M500 0 C500 50 190 40 167 150"
            initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 2.2, delay: 0.3, ease: [0.5, 0, 0.2, 1] }}
          />
          <motion.path
            d="M500 0 C500 60 500 80 500 178"
            initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 2.2, delay: 0.45, ease: [0.5, 0, 0.2, 1] }}
          />
          <motion.path
            d="M500 0 C500 50 810 40 833 206"
            initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 2.2, delay: 0.6, ease: [0.5, 0, 0.2, 1] }}
          />
          <motion.path
            className="thin"
            d="M500 0 C470 40 330 70 300 140"
            initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.8, delay: 0.7, ease: [0.5, 0, 0.2, 1] }}
          />
          <motion.path
            className="thin"
            d="M500 0 C530 40 670 70 700 140"
            initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.8, delay: 0.85, ease: [0.5, 0, 0.2, 1] }}
          />
        </svg>

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="cards-grid"
        >
          {/* Card 1: Origin */}
          <motion.article
            variants={{
              hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] } },
            }}
            className="card-item"
          >
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#5b6f5a]">
              01 — Origin
            </div>
            <h3 className="card-title flex items-center gap-2.5 my-2.5 text-[#0a3531] font-['Dela_Gothic_One',sans-serif] font-normal text-xl leading-[1.2]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#0a3531] fill-none stroke-[1.8] shrink-0" aria-hidden="true">
                <path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15z" />
                <path d="M5 19c3-5 6-8 10-10" />
              </svg>
              100% Organic Sourcing
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.6] text-[#2f4a45]">
              Naturally cultivated, no chemical processing — maintaining substrate purity from field to facility.
            </p>
          </motion.article>

          {/* Card 2: Quality */}
          <motion.article
            variants={{
              hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] } },
            }}
            className="card-item"
          >
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#5b6f5a]">
              02 — Quality
            </div>
            <h3 className="card-title flex items-center gap-2.5 my-2.5 text-[#0a3531] font-['Dela_Gothic_One',sans-serif] font-normal text-xl leading-[1.2]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#0a3531] fill-none stroke-[1.8] shrink-0" aria-hidden="true">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
              </svg>
              Low EC Washed Grades
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.6] text-[#2f4a45]">
              Multiple washing stages ensure stable EC and pH, meeting international horticulture standards.
            </p>
          </motion.article>

          {/* Card 3: Logistics */}
          <motion.article
            variants={{
              hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] } },
            }}
            className="card-item"
          >
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#5b6f5a]">
              03 — Logistics
            </div>
            <h3 className="card-title flex items-center gap-2.5 my-2.5 text-[#0a3531] font-['Dela_Gothic_One',sans-serif] font-normal text-xl leading-[1.2]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#0a3531] fill-none stroke-[1.8] shrink-0" aria-hidden="true">
                <path d="M2 6h11v10H2zM13 9h4l3 3v4h-7z" />
                <circle cx="6" cy="18" r="1.8" />
                <circle cx="16.5" cy="18" r="1.8" />
              </svg>
              Reliable Logistics
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.6] text-[#2f4a45]">
              Export-ready packaging, documentation accuracy and container-level tracking for every shipment.
            </p>
          </motion.article>
        </motion.div>

        {/* Bottom Commercial Substrates Label */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="commercial-label flex items-center gap-4 mt-[72px] text-[11px] font-bold tracking-[0.18em] uppercase text-[#c9a46b]"
        >
          Commercial Substrates
        </motion.div>
      </div>
    </section>
  );
}
