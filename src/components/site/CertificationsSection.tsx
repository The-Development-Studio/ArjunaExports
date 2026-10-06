import epceLogo from "@/assets/certifications/eepc-official.png";
import msmeLogo from "@/assets/certifications/msme.png";
import coirBoardLogo from "@/assets/certifications/coir-board.jpg";
import fieoLogo from "@/assets/certifications/fieo-official.gif";
import iso9001Logo from "@/assets/certifications/iso-9001.png";

const certificates = [
  {
    name: "MSME · Udyam",
    desc: "Registered micro, small and medium enterprise",
    image: msmeLogo,
    rotationStyle: { transform: "rotate(-1.8deg)" },
  },
  {
    name: "EEPC India",
    desc: "Engineering Export Promotion Council",
    image: epceLogo,
    rotationStyle: { transform: "rotate(1.2deg)" },
  },
  {
    name: "Coir Board",
    desc: "Under the Ministry of MSME",
    image: coirBoardLogo,
    rotationStyle: { transform: "rotate(-0.8deg)" },
  },
  {
    name: "FIEO",
    desc: "Federation of Indian Export Organisations",
    image: fieoLogo,
    rotationStyle: { transform: "rotate(1.7deg)" },
  },
  {
    name: "ISO 9001:2015",
    desc: "Certified quality management system",
    image: iso9001Logo,
    rotationStyle: { transform: "rotate(-1.3deg)" },
  },
];

export function CertificationsSection() {
  return (
    <section className="bg-white py-16 lg:py-24 text-[#0f2747] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 lg:mb-20">
          <div>
            <h2 className="font-['Archivo','Arial_Black',sans-serif] text-[clamp(36px,5.4vw,64px)] font-extrabold leading-[0.98] tracking-[-0.015em] text-[#0f2747]">
              Standards behind
              <br />
              every shipment.
            </h2>
          </div>
          <p className="font-['Poppins',sans-serif] text-[15px] leading-[1.7] text-[#5f7390] max-w-[42ch] sm:text-right">
            Recognised memberships and quality systems support a professional, export-ready supply
            experience.
          </p>
        </div>

        {/* Rope & Grid Container */}
        <div className="relative w-full">
          {/* Dashed Rope */}
          <div className="absolute top-0 -left-6 -right-6 h-[3px] border-t-[3px] border-dashed border-[#0f2747] z-10 pointer-events-none" />

          {/* Grid of 5 Certificates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-4.5 pt-[54px] relative z-20">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                className="group relative transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:!rotate-0 hover:translate-y-1.5 motion-reduce:transform-none motion-reduce:transition-none"
                style={cert.rotationStyle}
              >
                {/* String from Rope to Card */}
                <div className="absolute -top-[54px] left-1/2 -translate-x-1/2 w-[2px] h-[54px] bg-[#0f2747] z-10" />

                {/* Outer Frame */}
                <div className="relative bg-white border-2 border-[#0f2747] rounded-[4px] p-2.5 shadow-[6px_6px_0_#0f2747] flex flex-col h-full">
                  {/* Gold Pin at top center */}
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#ffb81c] border-2 border-[#0f2747] rounded-full z-20" />

                  {/* Inner Paper */}
                  <div className="relative border border-[#d99400] px-3.5 pt-8 pb-13 text-center min-h-[300px] flex flex-col justify-between items-center bg-white flex-1">
                    {/* Corner Brackets */}
                    <div className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#0f2747]" />
                    <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#0f2747]" />

                    {/* Top Tag & Logo Box */}
                    <div className="w-full flex flex-col items-center">
                      <span className="font-['Cormorant_Garamond',serif] italic font-semibold text-[17px] text-[#d99400] mb-2 block">
                        Certificate
                      </span>
                      <div className="h-[78px] w-full flex items-center justify-center mb-2">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="max-h-[70px] max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Diamond Divider */}
                    <div className="w-[80%] flex items-center justify-center gap-2 my-2">
                      <div className="flex-1 h-[1px] bg-[#0f2747]" />
                      <div className="w-[7px] h-[7px] bg-[#ffb81c] border border-[#0f2747] rotate-45 shrink-0" />
                      <div className="flex-1 h-[1px] bg-[#0f2747]" />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-['Cormorant_Garamond',serif] font-bold text-[25px] text-[#0f2747] leading-tight mb-2">
                        {cert.name}
                      </h3>
                      <p className="font-['Poppins',sans-serif] text-[12px] text-[#5f7390] leading-snug">
                        {cert.desc}
                      </p>
                    </div>
                  </div>

                  {/* Rosette Seal overlapping bottom */}
                  <div className="absolute -bottom-[30px] left-1/2 -translate-x-1/2 w-[60px] h-[60px] z-30 pointer-events-none">
                    {/* Ribbon Tails */}
                    <div className="absolute -bottom-[12px] left-[12px] w-[16px] h-[30px] bg-[#0f2747] [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] -rotate-[14deg]" />
                    <div className="absolute -bottom-[12px] right-[12px] w-[16px] h-[30px] bg-[#0f2747] [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] rotate-[14deg]" />

                    {/* Gold Rosette SVG */}
                    <svg viewBox="0 0 60 60" className="w-[60px] h-[60px] relative z-10">
                      <path
                        d="M30 0 L33.5 4 L38.5 2.5 L40.5 7.2 L45.5 7 L46.2 12 L51 13 L50.2 18 L54.5 20 L52.5 24.8 L56 27.8 L53 32 L55.5 36 L51.5 39 L53 44 L48 45.5 L48.5 50.5 L43.5 50.8 L42.5 55.5 L37.5 54.5 L35.5 59 L30 57 L24.5 59 L22.5 54.5 L17.5 55.5 L16.5 50.8 L11.5 50.5 L12 45.5 L7 44 L8.5 39 L4.5 36 L7 32 L4 27.8 L7.5 24.8 L5.5 20 L9.8 18 L9 13 L13.8 12 L14.5 7 L19.5 7.2 L21.5 2.5 L26.5 4 Z"
                        fill="#ffb81c"
                        stroke="#0f2747"
                        strokeWidth="1.5"
                      />
                      <circle cx="30" cy="30" r="17" fill="#ffffff" stroke="#0f2747" strokeWidth="2" />
                      <path
                        d="M23 30 L28 35 L38 23"
                        fill="none"
                        stroke="#0f2747"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
