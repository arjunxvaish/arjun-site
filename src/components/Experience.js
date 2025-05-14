const items = [
  {
    title: "Remote Trading Intern · Dragonstone Capital Management (Remote, Singapore)",
    date: "May 2025 – Present",
    points: [
      "Working under ex-Goldman Sachs and ex-JP Morgan distressed debt trader managing a USD 3 billion multi-strategy family office.",
      "Learning discretionary and systematic strategies across credit, equities, rates, FX, and options.",
      "Studying trade structuring, macro analysis, risk frameworks, and capital allocation across the book."
    ],
  },
  {
    title: "Mentee · Institute of Trading & Portfolio Management (Remote, Phuket HQ)",
    date: "Mar 2025 – Apr 2025",
    points: [
      "Mentored by ex-Goldman Sachs and ex-Lehman Brothers traders based in Phuket on structured professional trading methods.",
      "Designed hedged options plays and performed risk sizing per the ITPM Core-Tier portfolio model.",
      "Learned multi-timeframe macro analysis and institutional-grade execution strategy under tight risk constraints."
    ],
  },
  {
    title: "Chief Trading Officer · Algorithmic Trading Club (University of Washington)",
    date: "Mar 2024 – Jan 2025",
    points: [
      "Secured a strategic partnership with QuantConnect and organized industry talks with Jane Street and Morgan Stanley.",
      "Led a $10K long/short equity portfolio using multi-leg options structures to maximize asymmetric payoffs.",
    ],
  },
  {
    title: "Algorithm Developer · QuantConnect (Seattle)",
    date: "Jan 2025",
    points: [
      "Built a quantitative strategy that achieved a 7,699% cumulative return since 2005, consistently outperforming the S&P 500.",
      "Maintained risk-adjusted returns through the 2008 GFC, COVID-19 crash, and 2022 tightening cycle without breaching drawdown limits.",
      "Engineered a resilient backtest framework with Python, pandas, and NumPy for robust alpha validation."
    ],
  },
];


export default function Experience() {
  return (
    <section
  id="experience"
  className="w-full overflow-hidden bg-gradient-to-r from-amber-50 via-purple-50 to-teal-50 py-20 px-4 sm:px-6"
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
