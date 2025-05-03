const projects = [
    {
      img: `${process.env.PUBLIC_URL}/marble.png`,
      title: "3D Marble Race Game",
      blurb: "React Three Fiber + Rapier physics; averages 50 daily players.",
      link: "https://arjunxvaish.github.io/Sphere-Sprint/",
    },
    {
      img: `${process.env.PUBLIC_URL}/algo.png`,
      title: "QuantConnect 7 699 % Algo",
      blurb: "Out‑performed SPX through 2008 & COVID crashes.",
      link: "https://www.quantconnect.com/terminal/processCache/?request=embedded_backtest_08f2b11694e508dca8310697f62dfded.html",
    },
  ];
  
  export default function Projects() {
    return (
      <section
        id="projects"
        className="bg-gradient-to-r from-teal-50 via-purple-50 to-amber-50 py-24 px-4 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-4xl font-bold text-gray-900">Projects</h2>
  
          <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
            {projects.map((p, idx) => (
              <a
                key={idx}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[320px] md:min-w-[380px] snap-center rounded-lg bg-white shadow transition hover:shadow-lg overflow-hidden"
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
  