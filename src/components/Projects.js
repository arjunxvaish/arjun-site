// src/components/Projects.js
import React from "react";

const projects = [
  {
    img: `${process.env.PUBLIC_URL}/quant.png`,
    title: "QuantConnect League — #1 (Q2 2025)",
    blurb: "Took 1st place in QuantConnect’s global algorithmic trading league.",
    link: "https://www.quantconnect.com/league/2025-q2/",
  },
  {
    img: `${process.env.PUBLIC_URL}/algo.png`,
    title: "77x Return Algo Backtest",
    blurb: "Out-performed SPY buy-and-hold by 7,000% through 2008 & COVID crashes.",
    link: "https://www.quantconnect.com/terminal/processCache/?request=embedded_backtest_08f2b11694e508dca8310697f62dfded.html",
  },
  {
    img: `${process.env.PUBLIC_URL}/blog.png`,
    title: "Trading Blog: Arjun’s Edge",
    blurb: "Macro insights, trade breakdowns, and live equity curve setups — built from scratch.",
    link: "https://arjunxvaish.github.io/my-dark-blog-main",
  },
  {
    img: `${process.env.PUBLIC_URL}/marble.png`,
    title: "3D Marble Race Game",
    blurb: "A cool rolling ball game with real world physics. (Desktop only)",
    link: "https://arjunxvaish.github.io/Sphere-Sprint/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-r from-teal-50 via-purple-50 to-amber-50 py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Projects
        </h2>

        {/* GRID: 1 col → 2 col → 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white shadow transition hover:shadow-lg hover:-translate-y-0.5 overflow-hidden flex flex-col h-full"
              aria-label={`${p.title} — ${p.blurb}`}
              title={p.title}
            >
              <img
                src={p.img}
                alt={`${p.title} preview`}
                className="w-full h-40 md:h-44 object-cover"
              />
              <div className="p-4 flex-1">
                <h3 className="text-base md:text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
