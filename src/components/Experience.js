// src/components/Experience.js
const items = [
    {
      title: "Mentee · Institute of Trading & Portfolio Management",
      date: "Mar 2025 – Apr 2025",
      points: [
        "Mentored by ex-Goldman Sachs, ex-Lehman Brothers traders on professional trading strategies.",
          "Designed hedged options plays (ratio diagonals, calendar) and sized risk per ITPM core‑tier framework.",
      "Developed advanced market analysis techniques using professional indicators and macroeconomic models.",
      ],
    },
    {
      title: "Chief Trading Officer · Algorithmic Trading Club (UW)",
      date: "Mar 2024 – Jan 2025",
      points: [
        "Secured QuantConnect partnership; hosted Jane Street talks.",
        "Managed $10 K long/short equity book with diagonal spreads.",
      ],
    },
    {
      title: "Algorithm Dev · QuantConnect",
      date: "Jan 2025",
      points: [
        "7 699 % cumulative‑return algo since 2005",
      "Beat the S&P 500 every calendar year since inception and continues to outperform YTD 2025.",
      "Stress‑tested across 2008 GFC, COVID‑19 crash & 2022 rate‑hike regime without breaching risk limits.",
      ],
    },
  ];
  
  export default function Experience() {
    return (
      <section
        id="experience"
        className="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-50 py-20 px-4 sm:px-6"
      >
        <div className="relative mx-auto max-w-5xl">
          {/* gradient spine */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-purple-400 via-indigo-500 to-amber-400" />
  
          <h2 className="mb-12 ml-6 text-4xl font-bold text-gray-900">Experience</h2>
  
          <ol className="relative">
            {items.map((item, idx) => (
              <li key={idx} className="mb-12 ml-6 pl-2 sm:pl-4">
                {/* static dot */}
                <span className="flex h-6 w-6 items-center justify-center">
                  <span className="h-3 w-3 rounded-full bg-purple-600 ring-8 ring-purple-300/30" />
                </span>
  
                <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                <time className="block text-sm text-purple-700">{item.date}</time>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-800">
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
  