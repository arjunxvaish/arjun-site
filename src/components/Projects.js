const projects = [
  {
    img: `${process.env.PUBLIC_URL}/marble.png`,
    title: "3D Marble Race Game (Desktop only)",
    blurb: "A cool rolling ball game with real world physics",
    link: "https://arjunxvaish.github.io/Sphere-Sprint/",
  },
  {
    img: `${process.env.PUBLIC_URL}/algo.png`,
    title: "QuantConnect 7699 % Algo Backtest",
    blurb: "Out-performed SPY buy-and-hold by 7,000% through 2008 & COVID crashes.",
    link: "https://www.quantconnect.com/terminal/processCache/?request=embedded_backtest_08f2b11694e508dca8310697f62dfded.html",
  },
];

export default function Projects() {
  return (
    <section
  id="projects"
  className="w-full overflow-hidden bg-gradient-to-r from-teal-50 via-purple-50 to-amber-50 py-24 px-4 sm:px-6"
>

      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-4xl font-bold text-gray-900">Projects</h2>

        <div
          className="
            flex flex-col             /* stack on mobile */
            md:flex-row               /* row on md+ */
            gap-8
            pb-4
            md:overflow-x-auto        /* scroll only on md+ */
            md:snap-x md:snap-mandatory
          "
        >
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full                   /* full width on mobile */
                md:min-w-[320px]         /* as before */
                md:min-w-[380px]
                snap-center
                rounded-lg
                bg-white
                shadow
                transition hover:shadow-lg
                overflow-hidden
              "
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 md:h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
