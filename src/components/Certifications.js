const certs = [
    { img: `${process.env.PUBLIC_URL}/bloomberg.png`, title: "Bloomberg Market Concepts" },
    { img: `${process.env.PUBLIC_URL}/yale.png`,      title: "Financial Markets – Yale University" },
    { img: `${process.env.PUBLIC_URL}/akuna.png`,     title: "Akuna Capital Options 101" },
  ];
  
  export default function Certifications() {
    return (
      <section
        id="certifications"
        className="bg-white py-20 px-4 sm:px-6"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-4xl font-bold text-gray-900">
            Certifications
          </h2>
  
          <div className="grid gap-8 xs:grid-cols-2 md:grid-cols-3">
            {certs.map((c, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-20 w-auto mb-4 object-contain"
                />
                <p className="text-lg font-medium text-gray-700">{c.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  