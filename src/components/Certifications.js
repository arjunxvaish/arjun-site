// src/components/Certifications.js
import React from "react";

const IMG = process.env.PUBLIC_URL;

const certs = [
  {
    img: `${IMG}/uw.png`,
    title: "B.Sc. in Electrical & Computer Engineering • University of Washington, Seattle",
    year: "2026",
  },
  {
    img: `${IMG}/dscap.png`,
    title: "Dragonstone Capital Management",
    year: "2025",
  },
  {
    img: `${IMG}/akuna.png`,
    title: "Akuna Capital Options 101",
    year: "2025",
  },
  {
    img: `${IMG}/yale.png`,
    title: "Financial Markets – Yale University",
    year: "2025",
  },
  {
    img: `${IMG}/itpm.png`,
    title: "Institute of Trading & Portfolio Management Mentorship",
    year: "2025",
  },
  {
    img: `${IMG}/bloomberg.png`,
    title: "Bloomberg Market Concepts",
    year: "2024",
  },
  {
    img: `${IMG}/tsrs.png`,
    title: "The Shri Ram School",
    year: "2022",
  },
  {
    img: `${IMG}/nus.png`,
    title: "Global Summer Academy • National University of Singapore",
    year: "2019",
  },
];

export default function Certifications() {
  return (
    <section
  id="certifications"
  className="w-full overflow-hidden bg-gradient-to-r from-amber-50 via-purple-50 to-teal-50 py-20 px-4 sm:px-6"
>
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-4xl font-bold text-gray-900 text-center">
          Certifications & Education
        </h2>

        {/* FLEX-WRAP container */}
        <div className="flex flex-wrap justify-center gap-8">
          {certs.map((c, idx) => (
            <div
              key={idx}
              className="w-[260px] flex flex-col items-center text-center rounded-lg bg-white shadow px-4 py-6"
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-20 w-auto mb-4 object-contain"
              />
              <h3 className="text-base font-semibold text-gray-800">
                {c.title}
              </h3>
              <span className="mt-2 inline-block rounded bg-purple-600/10 px-2 py-0.5 text-xs font-medium text-purple-700">
                {c.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
