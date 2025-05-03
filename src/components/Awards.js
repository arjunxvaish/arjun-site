// src/components/Awards.js
const IMG = process.env.PUBLIC_URL;   // shorthand

const awards = [
  {
    img: `${IMG}/imc.png`,
    title: "IMC Prosperity Trading Competition",
    blurb: "Lead Strategist & Developer · Top‑100 globally",
    year: "2024",
  },
  {
    img: `${IMG}/dbf.png`,
    title: "AIAA Design‑Build‑Fly",
    blurb: "3rd place out of 93 teams",
    year: "2023",
  },
  {
    img: `${IMG}/nasa.png`,
    title: "NASA International Space Settlement Design Competition",
    blurb: "Global Finalist",
    year: "2022",
  },
  {
    img: `${IMG}/frc.png`,
    title: "FIRST Robotics Competition",
    blurb: "Rookie Game Changer Award",
    year: "2022",
  },
];

  
  export default function Awards() {
    return (
      <section
        id="awards"
        className="bg-gradient-to-r from-amber-50 via-purple-50 to-teal-50 py-20 px-4 sm:px-6"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-4xl font-bold text-gray-900">Awards</h2>
  
          {/* FLEX‑WRAP container */}
          <div className="flex flex-wrap justify-center gap-8">
            {awards.map((a, idx) => (
              <div
                key={idx}
                className="w-[260px] flex flex-col items-center text-center rounded-lg bg-white shadow px-4 py-6"
              >
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-16 w-auto mb-4 object-contain"
                />
                <h3 className="text-base font-semibold text-gray-800">
                  {a.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{a.blurb}</p>
                <span className="mt-2 inline-block rounded bg-purple-600/10 px-2 py-0.5 text-xs font-medium text-purple-700">
                  {a.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  